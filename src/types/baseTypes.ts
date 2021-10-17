export type ResponseType<T> = {
  info: null | {
    count?: number;
    next?: number;
    pages?: number;
    prev?: number;
  };
  results: Array<T>;
};

export type ResponseError = {
  errors: Array<{
    message: string;
  }>;
};

export type AppError = {
  statusCode: number;
  statusText: string;
  errors: Array<string>;
};

export enum RequestStatus {
  idle = 'idle',
  pending = 'pending',
  fulfilled = 'fulfilled',
  rejected = 'rejected',
}

export type SliceType<T> = {
  data: T | null, status: RequestStatus, error: null | any
};

export type PageSliceType<T> = SliceType<T> & Pick<ResponseType<T>, 'info'>;

export type QueryVariables = {
  page: number,
  filter: Filters
};

export type Filters = {
  name: string
};
