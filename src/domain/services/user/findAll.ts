import { IUserFindAllRepository, User } from "../../repositories/user/findAll";

export interface IUserFindAllService {
  findAll(): User[];
}

class FindAll implements IUserFindAllService {
  private findAllUserRepository: IUserFindAllRepository;

  constructor({ findAllUserRepository }: any) {
    this.findAllUserRepository = findAllUserRepository;
  }

  public findAll() {
    return this.findAllUserRepository.findAll();
  }
}

export default FindAll;
