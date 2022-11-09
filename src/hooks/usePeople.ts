import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { getAllPeople } from "../api/peopleApi";
import { People } from "../utils/types/People.types";

export const usePeople = (
  page: number,
  options?: UseQueryOptions<unknown, Error, People>
): UseQueryResult<People, Error> => {
  return useQuery({
    queryKey: ["allPeople", page],
    queryFn: () => getAllPeople(page),
    onError: (error) => {
      throw Error("getPeople Error", error);
    }, // This supply try - catch and here we catch the error
    ...options,
  });
};
