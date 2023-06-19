import { User } from "./findAll";

export interface IUserFindByIdRepository {
  findById(userId: number): User;
}

class UserFindByIdRepository implements IUserFindByIdRepository {
  public findById(userId: number) {
    return {
      name: `user name repo ${userId}`,
      motherName: `mother user name repo ${userId}`,
    };
  }
}

export default UserFindByIdRepository;
