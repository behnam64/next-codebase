export type ResponseType<Data> = {
  statusCode: number;
  message?: string[];
  data: Data;
}
