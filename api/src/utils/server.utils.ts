import {createServer, IncomingMessage, ServerResponse} from 'http';
import {BadRequestError} from '../models/BadRequestError';
import {parse} from 'querystring';
import {RouteResolver, Routes} from '../models/Routes';

export function runServer(port: number, routes: Routes) {
  const server = createServer(async (req: IncomingMessage, res: ServerResponse) => {
    await resolveRequest(req, res, routes);
  });

  server.listen(port);

  console.log(`Server started. http://localhost:${port}`);
}

export async function resolveRequest(req: IncomingMessage, res: ServerResponse, routes: Routes) {
  const route = getRequestRouteResolver(req, routes);

  if (route === null) {
    sendNotFound(res);

    return;
  }

  await route(req, res);
}

export function getRequestRouteResolver(req: IncomingMessage, routes: Routes): RouteResolver<any> {
  return routes[getRequestRouteName(req)] || null;
}

export function getRequestRouteName(req: IncomingMessage): string {
  return `${req.method} ${getRequestPath(req)}`;
}

export function getRequestPath(req: IncomingMessage): string {
  return (req.url || '').split('?')[0];
}

export function getRequestQueryParams<T>(req: IncomingMessage): T {
  const [, query] = (req.url || '').split('?');

  return parse(query) as any as T;
}

export function createRequestResolver<T>(resolver: RouteResolver<T>, actionName: string): RouteResolver<void> {
  return async (req: IncomingMessage, res: ServerResponse) => {
    try {
      const jsonResponse = await resolver(req, res);

      sendJsonResponse(res, jsonResponse);

      console.info(`On "${actionName}" response: `, jsonResponse);
    } catch (error) {
      onRequestResolverError(res, error, actionName);
    }
  };
}

export function onRequestResolverError(res: ServerResponse, error: Error, actionName: string) {
  if (error instanceof BadRequestError) {
    sendBadRequest(res);

    return;
  }

  console.error(`On "${actionName}" error: `, error);
  sendServerError(res);
}

export function sendNotFound(res: ServerResponse) {
  res.statusCode = 404;
  res.end();
}

export function sendBadRequest(res: ServerResponse) {
  res.statusCode = 400;
  res.end();
}

export function sendServerError(res: ServerResponse) {
  res.statusCode = 500;
  res.end();
}

export function sendJsonResponse(res: ServerResponse, json: any) {
  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify(json));
}

export async function getRequestJson<T>(req: IncomingMessage): Promise<T> {
  return new Promise<T>((onResolve, onReject) => {
    let buffer = '';

    req.on('data', (chunk: string) => {
      buffer += chunk;
    });

    req.on('end', () => {
      try {
        const json = JSON.parse(buffer);

        onResolve(json);
      } catch (e) {
        onReject(new Error('Request json parse error'));
      }
    });

    req.on('error', error => {
      onReject(error);
    });
  });
}
