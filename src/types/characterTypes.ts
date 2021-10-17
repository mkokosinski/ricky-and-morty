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
    episode: string;
    name: string;
  }>;
};

export type ChararterListItem = Pick<Chararter, 'id' | 'image' | 'name' | 'species'>;

export const ChararterLabels = {
  image: 'image',
  name: 'name',
  species: 'species',
  gender: 'gender',
  status: 'status',
  location: {
    name: 'location name',
  },
  episode: {
    episode: 'episode',
    name: 'name',
  },
};
