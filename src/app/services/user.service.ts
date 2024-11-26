import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: Array<{ username: string; email: string; password: string }> = [];

  constructor() {}

  registerUser(username: string, email: string, password: string): boolean {
    const userExists = this.users.some(
      (user) => user.username === username || user.email === email
    );

    if (!userExists) {
      this.users.push({ username, email, password });
      return true; // Registro exitoso
    }
    return false; // Usuario ya existe
  }

  getUsers() {
    return this.users;
  }
}
