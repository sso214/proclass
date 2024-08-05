import { URLS } from './urls';

type Route = Record<string, string>;
type Routes<T extends Route> = { [K in keyof T]: string };

function urlsToRoutes<T extends Route>(urls: T): Routes<T> {
  const result = {} as Route;
  Object.keys(urls).forEach((key) => {
    [result[key]] = urls[key].split('/').reverse();
  });
  return result as Routes<T>;
}

export const ROUTES = {
  AUTH: {
    DOMAIN: '/auth',
    ...urlsToRoutes(URLS.AUTH),
  },
  CONSOLE: {
    DOMAIN: '/console',
    ...urlsToRoutes(URLS.CONSOLE),
  },
  ERROR: {
    DOMAIN: '/error',
    ...urlsToRoutes(URLS.ERROR),
  },
} as const;
