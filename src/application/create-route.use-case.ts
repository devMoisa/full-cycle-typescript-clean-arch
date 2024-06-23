// Se quiser, retorna dados de saida ------> output
// Recebe dados de entrada ----------------> input
// O Caso de uso, é a camada que pode ser um pouco suja
import { IRouteRepository } from "../domain/iroute.repository";
import { LatLng, Route } from "../domain/route.entity";

export class CreateRouteUseCase {
  constructor(private routeRepo: IRouteRepository) {}

  async execute(input: ICreateRouteInput): Promise<ICreateRouteOutput> {
    const route = new Route(input);
    await this.routeRepo.insert(route);
    return route.toJSON();
  }
}

type ICreateRouteInput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  paths?: LatLng[];
};

type ICreateRouteOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  paths?: LatLng[];
};
