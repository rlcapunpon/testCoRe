import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserDataService {
    
  users: User[] = [];

  constructor() { }
  
  addUser(user: User): UserDataService {
    this.users.push(user);
    return this;
  }
  
  deleteUserById(id: number): UserDataService {
    this.users = this.users.filter(user => user.id !== id);
    return this;
  }
  
  getAllUsers(): User[] {
    return this.users;
  }

}
