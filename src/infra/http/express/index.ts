import express, { Request, Response } from "express";
import { CreateRouteUseCase } from "../../../application/create-route.use-case";
import { RouteInMemoryRepository } from "../../db/route-in-memory.repository";
import { ListAllRoutesUseCase } from "../../../application/list-all-routes.use-case";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
const routeRepository = new RouteInMemoryRepository();

app.post("/routes", async (req: Request, res: Response) => {
  const createUseCase = new CreateRouteUseCase(routeRepository);
  const output = await createUseCase.execute(req.body);
  res.status(201).json(output);
});

app.get("/routes", async (req: Request, res: Response) => {
  const listAllRoutesUseCase = new ListAllRoutesUseCase(routeRepository);
  const output = await listAllRoutesUseCase.execute();
  res.status(200).json(output);
});

app.listen(port, () => console.log(`API RUNNING ON PORT ${port}`));
