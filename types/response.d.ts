declare global {
  interface Error {
    statusCode?: number;
    message: string;
  }
}
