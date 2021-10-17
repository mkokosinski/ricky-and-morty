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

export type ChararterListItem = Pick<Chararter, 'id' | 'image' | 'name' | 'species'>;
