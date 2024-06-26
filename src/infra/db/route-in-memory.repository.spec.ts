import { Route, RouteProps } from "../../domain/route.entity";
import { RouteInMemoryRepository } from "./route-in-memory.repository";

describe("RouteInMemoryRepository", () => {
  it("should isnert a new route", async () => {
    const repository = new RouteInMemoryRepository();
    const routeProps: RouteProps = {
      title: "Minha rota",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };

    const route = new Route(routeProps);
    repository.insert(route);

    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  });
});
