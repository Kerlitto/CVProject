import { getDatabaseTable } from "./helpers";

interface User {
  id: string;
  email: string;
  password: string;
}

export const getUser = (data: User) => {
  const { email, password } = data;

  const users: User[] = getDatabaseTable("users");
  if (!users) {
    console.log("No users table found");
    return;
  }

  const user = users.find(
    user => user.email === email && user.password === password
  );

  return user;
};
