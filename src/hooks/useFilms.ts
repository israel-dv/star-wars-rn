import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { getAllFilms } from "../api/swapiApi";

import { Films } from "../utils/types/Films.types";

export const useFilms = (
  options?: UseQueryOptions<unknown, Error, Films>
): UseQueryResult<Films, Error> => {
  return useQuery({
    queryKey: ["getAllFilms"],
    queryFn: getAllFilms,
    onError: (error) => {
      throw Error("getPeople Error", error);
    },
    ...options,
  });
};
