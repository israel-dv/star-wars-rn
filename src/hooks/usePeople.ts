import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { getAllPeople } from "../api/peopleApi";
import { People } from "../utils/types/People.types";

export const usePeople = (
  options?: UseQueryOptions<unknown, Error, People>
): UseQueryResult<People, Error> => {
  return useQuery({
    queryKey: ["allPeople"],
    queryFn: getAllPeople,
    ...options,
  });
};
