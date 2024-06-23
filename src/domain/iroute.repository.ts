import { Route } from "./route.entity";

export interface IRouteRepository {
  insert(route: Route): Promise<void>;
  findAll(): Promise<Route[]>;
}

/* 
  A Interface do repositorio pertence a camada Domain
  pois ela é agnostica, ela é uma abstração do que precisa ser implementado,
  e com isso, é reconhecida como parte do domínio.
*/
