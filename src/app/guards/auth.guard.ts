import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // URL de la API JSON Server
  private currentUser: User | null = null;

  constructor(private http: HttpClient) {}

  login(usernameOrEmail: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map((users) => {
        const user = users.find(
          (u) =>
            (u.username === usernameOrEmail || u.email === usernameOrEmail) &&
            u.password === password
        );
        this.currentUser = user || null;
        return !!user;
      }),
      catchError(() => of(false))
    );
  }

  getCurrentUser(): User | null {
    return this.currentUser; // Retorna el usuario autenticado
  }

  logout(): void {
    this.currentUser = null; // Limpia el usuario actual
  }
}
