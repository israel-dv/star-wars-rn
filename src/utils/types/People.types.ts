export type PeopleResults = {
  name: string;
  gender: string;
  birth_year: string;
  url: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
};

export type People = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PeopleResults[];
};
