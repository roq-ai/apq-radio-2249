const mapping: Record<string, string> = {
  stations: 'station',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
