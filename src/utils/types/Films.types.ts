export type FilmsResults = {
  title: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
};
export type Films = {
  count: number;
  next: string | null;
  previous: string | null;
  results: FilmsResults[];
};
