import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

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
  private isAuthenticated = false; // Estado de autenticación
  private currentUser: User | null = null; // Usuario actualmente autenticado

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(usernameOrEmail: string, password: string): Observable<boolean> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map((users) => {
        const user = users.find(
          (u) =>
            (u.username === usernameOrEmail || u.email === usernameOrEmail) &&
            u.password === password
        );
        if (user) {
          this.currentUser = user;
          this.isAuthenticated = true; // Marca al usuario como autenticado
        } else {
          this.currentUser = null;
          this.isAuthenticated = false;
        }
        return this.isAuthenticated;
      }),
      catchError((error) => {
        console.error('Error al intentar iniciar sesión:', error);
        this.isAuthenticated = false;
        return of(false);
      })
    );
  }

  // Método para registrar un usuario
  register(username: string, email: string, password: string): Observable<User> {
    const newUser: Omit<User, 'id'> = { username, email, password }; // No enviar ID en la creación
    return this.http.post<User>(this.apiUrl, newUser).pipe(
      tap((user) => {
        console.log('Usuario registrado exitosamente:', user);
      }),
      catchError((error) => {
        console.error('Error al registrar usuario:', error);
        throw error; // Repropaga el error para manejarlo
      })
    );
  }

  // Método para obtener el estado de autenticación
  getAuthStatus(): boolean {
    return this.isAuthenticated; // Retorna el estado actual de autenticación
  }

  // Método para cerrar sesión
  logout(): void {
    this.currentUser = null;
    this.isAuthenticated = false;
    console.log('Sesión cerrada correctamente.');
  }

  // Obtener el usuario actualmente autenticado
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  // Obtener usuario por ID
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      tap((user) => {
        console.log(`Usuario obtenido por ID (${id}):`, user);
      }),
      catchError((error) => {
        console.error('Error al obtener el usuario por ID:', error);
        throw error;
      })
    );
  }

  // Método para actualizar la información del usuario
  updateUser(user: User): Observable<User> {
    if (!user.id) {
      throw new Error('El objeto usuario debe contener un campo `id`.');
    }
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user).pipe(
      tap((updatedUser) => {
        console.log('Usuario actualizado:', updatedUser);
        if (this.currentUser && this.currentUser.id === updatedUser.id) {
          this.currentUser = updatedUser; // Actualiza el usuario actual si coincide
        }
      }),
      catchError((error) => {
        console.error('Error al actualizar el usuario:', error);
        throw error;
      })
    );
  }
}
