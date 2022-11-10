import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { getPeopleByName } from "../api/swapiApi";
import { People } from "../utils/types/People.types";

export const usePeopleByName = (
  name?: string,
  options?: UseQueryOptions<unknown, Error, People>
): UseQueryResult<People, Error> => {
  return useQuery({
    queryKey: ["getByName", name],
    queryFn: () => getPeopleByName(name),
    enabled: Boolean(name), // This query only works while name is not empty
    ...options,
  });
};
