import { User } from "../../repositories/user/findAll";
import { IUserFindByIdRepository } from "../../repositories/user/findById";

export interface IUserFindByIdService {
  findById(userId: string): User;
}

type TDeps = {
  findByIdUserRepository: IUserFindByIdRepository;
};

class FindAll implements IUserFindByIdService {
  private findUserById: IUserFindByIdRepository;

  constructor({ findByIdUserRepository }: TDeps) {
    this.findUserById = findByIdUserRepository;
  }

  public findById(userId: string) {
    return this.findUserById.findById(userId);
  }
}

export default FindAll;
