import { beforeEach, describe, expect, it, jest } from '@jest/globals';

import UserRepository, { IUserRepository, User } from '../../../../src/domain/repositories/user';
import GetUser from '../../../../src/domain/services/user/get';
import Container from 'typedi';

const mockUser: User = {
  name: 'user name repo',
  motherName: 'mother user name repo',
};

describe('Services - user get', () => {
  let userRepo: IUserRepository;

  beforeEach(() => {
    userRepo = new UserRepository();
    Container.set(UserRepository, userRepo);

    jest.spyOn(userRepo, 'get').mockImplementation(() => mockUser);
  });

  it('Should call get method from user repository', () => {
    const getUserService = new GetUser();
    getUserService.get();

    expect(userRepo.get).toBeCalledTimes(1);
  });

  it('Should return correct user data', () => {
    const getUserService = new GetUser();
    const result = getUserService.get();

    expect(result).toStrictEqual({
      name: 'user name repo',
      motherName: 'mother user name repo',
    });
  });
});
