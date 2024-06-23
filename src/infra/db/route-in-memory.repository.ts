import { IRouteRepository } from "../../domain/iroute.repository";
import { Route } from "../../domain/route.entity";

export class RouteInMemoryRepository implements IRouteRepository {
  items: Route[] = [];

  async insert(route: Route): Promise<void> {
    this.items.push(route);
  }

  async findAll(): Promise<Route[]> {
    return this.items;
  }
}
