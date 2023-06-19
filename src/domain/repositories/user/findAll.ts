export type User = {
  name: string;
  motherName: string;
};

export interface IUserFindAllRepository {
  findAll(): User[];
}

class UserFindAllRepository implements IUserFindAllRepository {
  public findAll() {
    return [
      {
        name: "user name repo",
        motherName: "mother user name repo",
      },
    ];
  }
}

export default UserFindAllRepository;
