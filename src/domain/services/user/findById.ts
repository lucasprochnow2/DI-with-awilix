import { User } from "../../repositories/user/findAll";
import { IUserFindByIdRepository } from "../../repositories/user/findById";

export interface IUserFindByIdService {
  findById(userId: number): User;
}

class FindAll implements IUserFindByIdService {
  private findUserById: IUserFindByIdRepository;

  constructor({ findByIdUserRepository }: any) {
    this.findUserById = findByIdUserRepository;
  }

  public findById(userId: number) {
    return this.findUserById.findById(userId);
  }
}

export default FindAll;
