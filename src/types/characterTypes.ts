export type Chararter = {
  id: string;
  image: string;
  name: string;
  species: string;
  gender: string;
  status: string;
  location: {
    name: string;
  };
  episode: Array<{
    name: string;
  }>;
};
