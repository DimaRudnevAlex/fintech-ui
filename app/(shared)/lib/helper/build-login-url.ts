import { ROUTES } from '@/(shared)/constants/routes';

export const buildLoginUrl = (): string => {
  const currentPath = window.location.pathname + window.location.search;
  const encodedPath = encodeURIComponent(currentPath);

  return `${ROUTES.LOGIN}?cachedRoute=${encodedPath}`;
};
