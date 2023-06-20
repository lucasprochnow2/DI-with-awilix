import { Router } from "express";
import { IUserFindAllService } from "../../domain/services/user/findAll";
import { IUserFindByIdService } from "../../domain/services/user/findById";

type TDeps = {
  findAllUserService: IUserFindAllService;
  findByIdUserService: IUserFindByIdService;
};

const userRoutes = (deps: TDeps) => {
  const { findAllUserService, findByIdUserService } = deps;
  const router = Router();

  router.get("/", (_: any, res: any) => {
    const getUser = findAllUserService.findAll();
    res.status(200).json(getUser);
    return;
  });

  router.get("/:id", (req: any, res: any) => {
    const getUser = findByIdUserService.findById(req.params.id);
    res.status(200).json(getUser);
    return;
  });

  return router;
};

export default userRoutes;
