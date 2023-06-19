import { IUserFindAllRepository, User } from "../../repositories/user/findAll";

export interface IUserFindAllService {
  findAll(): User[];
}

class FindAll implements IUserFindAllService {
  private findAllUser: IUserFindAllRepository;

  constructor({ findAllUserRepository }: any) {
    this.findAllUser = findAllUserRepository;
  }

  public findAll() {
    return this.findAllUser.findAll();
  }
}

export default FindAll;
