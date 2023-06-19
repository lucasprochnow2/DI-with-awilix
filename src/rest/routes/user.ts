import { IUserFindAllService } from "../../domain/services/user/findAll";

type TDeps = {
  server: any;
  findAllUserService: IUserFindAllService;
};

const userRoutes = (deps: TDeps) => {
  const { server, findAllUserService } = deps;

  const router = server.getRouter();

  router.get("/", (_: any, res: any) => {
    const getUser = findAllUserService.findAll();
    res.status(200).json(getUser);
    return;
  });

  return router;
};

export default userRoutes;
