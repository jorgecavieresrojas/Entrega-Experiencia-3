import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  // URL base del archivo JSON
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Obtener la lista de eventos desde el JSON
  getEventos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/eventos`);
  }

  // Obtener los eventos registrados de un usuario
  getEventosRegistrados(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/eventosRegistrados?userId=${userId}`);
  }

  // Registrar un usuario en un evento
  registrarEvento(evento: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/eventosRegistrados`, evento);
  }

  // Verificar si el usuario ya está registrado en un evento
  checkUserRegistration(userId: string, eventId: string): Observable<boolean> {
    return this.http
      .get<any[]>(`${this.apiUrl}/eventosRegistrados?userId=${userId}&id=${eventId}`)
      .pipe(map((registrations) => registrations.length > 0)); // Retorna true si ya está registrado
  }
}
