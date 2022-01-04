interface Error {
  response: {
    errors: {
      message: string;
      extensions?: {
        category?: string;
      };
      locations?: Array<{
        line: number;
        column: number;
      }>;
      path?: Array<string>;
    }[];
  };
}
