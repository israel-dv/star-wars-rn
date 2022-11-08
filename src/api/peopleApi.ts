import { People } from "../utils/types/People.types";
import { swapi } from "./swapiClient";

export const getAllPeople = async (): Promise<People> => {
  const response = await swapi.get("/people");

  return response.data;
};
