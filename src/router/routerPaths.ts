export const mainRoute = '/';
export const quoteIdParam = 'quoteId';
export const quotePageRoute = (quoteId: string | number = `:${quoteIdParam}`): string => `/quote/${quoteId}`;
