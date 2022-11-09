import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { getAllPeople } from "../api/peopleApi";
import { People } from "../utils/types/People.types";

type usePeopleProps = {
  page: number;
  options?: UseQueryOptions<unknown, Error, People>;
};

export const usePeople = (
  page: number,
  options?: UseQueryOptions<unknown, Error, People>
): UseQueryResult<People, Error> => {
  return useQuery({
    queryKey: ["allPeople", page],
    queryFn: () => getAllPeople(page),
    ...options,
  });
};
