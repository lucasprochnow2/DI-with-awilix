import Container, { Service } from 'typedi';

import UserRepository, { IUserRepository } from '../../repositories/user';

@Service()
class GetUser {
  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = Container.get(UserRepository);
  }

  public get() {
    return this.userRepository.get();
  }
}

export default GetUser;
