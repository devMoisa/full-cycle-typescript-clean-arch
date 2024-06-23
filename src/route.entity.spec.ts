import { Route, RouteProps } from "./route.entity";

describe("Route tests", () => {
  test("Constructor", () => {
    const routeProps: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    const route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });
  });
});
