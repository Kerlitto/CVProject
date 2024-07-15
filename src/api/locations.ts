import { getDatabaseTable } from "./helpers";

interface Location {
  id: number;
  country: string;
  name: string;
  createdAt: Date;
  modifiedAt: Date;
}

// Exam

export const getLocationById = (id: number) => {
  const locations: Location[] = getDatabaseTable("locations");

  if (!locations) {
    console.log("No locations table found");
    return;
  }

  return locations.find(location => location.id === id);
};
