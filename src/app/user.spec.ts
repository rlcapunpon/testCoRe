import {User} from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
  
  it('should accept values in the constructor', () => {
    let user = new User({
      id: 10001,
      password: 'pass'
    });
    expect(user.id).toEqual(10001);
    expect(user.password).toEqual('pass');
  });
});
