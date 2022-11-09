import { People } from "../utils/types/People.types";
import { swapi } from "./swapiClient";

export const getAllPeople = async (page: number): Promise<People> => {
  const response = await swapi.get(`/people/?page=${page}`);

  return response.data;
};
