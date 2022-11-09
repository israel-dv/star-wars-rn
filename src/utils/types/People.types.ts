export type PeopleResults = {
  name: string;
  gender: string;
  birth_year: string;
  url: string;
  height: string;
  mass: string;
};

export type People = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PeopleResults[];
};
