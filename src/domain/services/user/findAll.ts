import { IUserFindAllRepository, User } from "../../repositories/user/findAll";

export interface IUserFindAllService {
  findAll(): User[];
}

type TDeps = {
  findAllUserRepository: IUserFindAllRepository;
};

class FindAll implements IUserFindAllService {
  private findAllUser: IUserFindAllRepository;

  constructor({ findAllUserRepository }: TDeps) {
    this.findAllUser = findAllUserRepository;
  }

  public findAll() {
    return this.findAllUser.findAll();
  }
}

export default FindAll;
