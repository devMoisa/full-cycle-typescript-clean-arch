import { Route, RouteProps } from "./route.entity";

describe("Route tests", () => {
  test("Constructor", () => {
    let routeProps: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    let route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });

    routeProps.points = [{ lat: 10, lng: 11 }];
    route = new Route(routeProps); // Calling again to resign the values.
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 10, lng: 11 }],
    });
  });
});
