import { LatLng, Route, RouteProps } from "./route.entity";

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

  test("updateTitle method", () => {
    const routeProps: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    const route = new Route(routeProps);
    route.updateTitle("Minha nova rota");
    expect(route.title).toBe("Minha nova rota");
  });

  test("updatePosition method", () => {
    const routeProps: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    const route = new Route(routeProps);
    const startPosition: LatLng = { lat: 10, lng: 30 };
    const endPosition: LatLng = { lat: 30, lng: 40 };
    route.updatePosition(startPosition, endPosition);

    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });
});
