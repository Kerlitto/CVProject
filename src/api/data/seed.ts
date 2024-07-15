import { env } from "@/lib/env";
import { getItem, setItem } from "@/lib/utils/localStorage";

import { type Listing, listings } from "./listings";
import { type Location, locations } from "./locations";
import { type User, users } from "./users";

export interface InitialDatabase {
  listings: Listing[];
  locations: Location[];
  users: User[];
  lastFetched?: number;
}

// Add all data to localstorage to simulate database
export const seedLocalDatabase = () => {
  const database = getItem(env.DB_KEY);

  // If a database already exists, do nothing
  if (database) {
    return;
  }

  // Creates the initial database with all data
  const initialDatabase: InitialDatabase = {
    listings,
    locations,
    users,
  };

  setItem(env.DB_KEY, initialDatabase);
};
