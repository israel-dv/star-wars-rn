import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import React from "react";
import { getAllStarships } from "../api/swapiApi";
import { Starships } from "../utils/types/Starships.types";

export const useStarships = (
  page: number,
  options?: UseQueryOptions<unknown, Error, Starships>
): UseQueryResult<Starships, Error> => {
  return useQuery({
    queryKey: ["getAllStarships", page],
    queryFn: () => getAllStarships(page),
    onError: (error) => {
      throw Error("getPeople Error", error);
    },
    ...options,
  });
};
