import { Films } from "../utils/types/Films.types";
import { People } from "../utils/types/People.types";
import { Starships } from "../utils/types/Starships.types";
import { swapi } from "./swapiClient";

/**
 *
 * No API calls handle try catch here, this is done in their
 * respective hooks in the option onError
 *
 * @param page
 * @returns Promise People { }
 */

export const getAllPeople = async (page: number): Promise<People> => {
  const response = await swapi.get(`/people/?page=${page}`);

  return response.data;
};

/**
 *
 * @param name
 * @returns Promise People { }
 */
export const getPeopleByName = async (name?: string) => {
  const response = await swapi.get(`/people/?search=${name}`);

  return response.data;
};

/**
 *
 * @param name
 * @returns Promise Films { }
 */
export const getAllFilms = async (): Promise<Films> => {
  const response = await swapi.get("/films");

  return response.data;
};

export const getAllStarships = async (page: number): Promise<Starships> => {
  const response = await swapi.get(`/starships/?page=${page}`);

  return response.data;
};
