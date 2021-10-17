export type ResponseType<T> = {
  info:{
    count: number,
    next?: number,
    pages: number
    prev?: number,
  },
  results: Array<T>
};
