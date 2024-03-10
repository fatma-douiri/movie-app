export type Movie = {
  id: number;
  title: string;
  image: string;
  year: string;
  averageRuntime: number;
  rating: number;
  summary: string;
};
export type ResponseApiSearchEntity = {
  score: number;
  show: ResponseApiShowsEntity;
};
export type ResponseApiShowsEntity = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime?: number;
  averageRuntime: number;
  premiered: string;
  ended?: string;
  officialSite?: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network?: Network;
  webChannel?: WebChannel;
  dvdCountry?: DvdCountry;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
};
export type Schedule = {
  time: string;
  days: string[];
};

export type Rating = {
  average?: number;
};

export type Network = {
  id: number;
  name: string;
  country: Country;
  officialSite?: string;
};

export type Country = {
  name: string;
  code: string;
  timezone: string;
};

export type WebChannel = {
  id: number;
  name: string;
  country?: Country2;
  officialSite?: string;
};

export type Country2 = {
  name: string;
  code: string;
  timezone: string;
};

export type DvdCountry = {
  name: string;
  code: string;
  timezone: string;
};

export type Externals = {
  tvrage: number;
  thetvdb?: number;
  imdb?: string;
};

export type Image = {
  medium: string;
  original: string;
};

export type Links = {
  self: Self;
  previousepisode: Previousepisode;
  nextepisode?: Nextepisode;
};

export type Self = {
  href: string;
};

export type Previousepisode = {
  href: string;
};

export type Nextepisode = {
  href: string;
};
