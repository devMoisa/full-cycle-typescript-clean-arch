import { LatLng } from "../domain/route.entity";
import { IRouteRepository } from "../domain/iroute.repository";

export class ListAllRoutesUseCase {
  constructor(private routeRepo: IRouteRepository) {}

  async execute(): Promise<ListAllRoutesOutput> {
    const routes = await this.routeRepo.findAll();
    return routes.map((r) => r.toJSON());
  }
}

type ListAllRoutesOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  paths?: LatLng[];
}[];
