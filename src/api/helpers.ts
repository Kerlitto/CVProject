import * as jose from "jose";

import { env } from "@/lib/env";
import { getItem } from "@/lib/utils/localStorage";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const JWT_SECRET_KEY = "cvproject";
const jwtSecret = new TextEncoder().encode(JWT_SECRET_KEY);

// Waits for a given number of milliseconds
export const wait = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

// Helper function to easily retrieve a database table
export const getDatabaseTable = (entity: string) =>
  getItem(env.DB_KEY)?.[entity];

export const withAuth =
  (
    mockFunction: (
      config: AxiosRequestConfig
    ) => Promise<AxiosResponse> | AxiosResponse
  ) =>
  async (
    config: AxiosRequestConfig
  ): Promise<AxiosResponse | [number, { message: string }]> => {
    const token = config.headers?.Authorization?.split(" ")[1];

    // Verifies access token if present
    const verified = token ? await verifyToken(token) : false;

    // Returns 403 if token is invalid and auth is enabled
    if (env.USE_AUTH && !verified) {
      return [403, { message: "Unauthorized" }];
    }

    // Calls the original mock function
    return mockFunction(config);
  };

// Verifies a JWT token
export const verifyToken = async (
  token: string | Uint8Array
): Promise<false | jose.JWTPayload> => {
  try {
    const verification = await jose.jwtVerify(token, jwtSecret);
    return verification.payload;
  } catch {
    return false;
  }
};

// Generates a refresh token with a 30 day expiration
export const generateRefreshToken = async <T>(data: T): Promise<string> => {
  console.log({ data });
  return await new jose.SignJWT({ data })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("30d")
    .sign(jwtSecret);
};

// Generates an access token with a 15 minute expiration
export const generateAccessToken = async <T>(data: T): Promise<string> => {
  return await new jose.SignJWT({ data })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("15m")
    .sign(jwtSecret);
};
