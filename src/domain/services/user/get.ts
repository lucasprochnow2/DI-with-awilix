import UserRepository, { IUserRepository } from "../../repositories/user";

class GetUser {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public get() {
    console.log("************ entrou");
    return this.userRepository.get();
  }
}

export default GetUser;
