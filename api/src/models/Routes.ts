import {IncomingMessage, ServerResponse} from 'http';

export type RouteResolver<T> = (req: IncomingMessage, res: ServerResponse) => Promise<T>;
export type Routes = { [route: string]: RouteResolver };
