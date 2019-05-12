export const mainRoute = '/';
export const quoteIdParam = 'quoteId';
export const quotePageRoute = (quoteId: string = `:${quoteIdParam}`): string => `/quote/${quoteId}`;
