const userRoutes = (deps: any) => {
  const { server } = deps;

  const router = server.getRouter();

  router.get("/", (_: any, res: any) => res.status(200).json({}));

  return router;
};

export default userRoutes;
