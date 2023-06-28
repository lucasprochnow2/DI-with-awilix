import { User } from "./findAll";

export interface IUserFindByIdRepository {
  findById(userId: string): User;
}

class UserFindByIdRepository implements IUserFindByIdRepository {
  public findById(userId: string) {
    return {
      name: `user name repo ${userId}`,
      motherName: `mother user name repo ${userId}`,
    };
  }
}

export default UserFindByIdRepository;
