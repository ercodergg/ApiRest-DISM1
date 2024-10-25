import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FichajeService {
  private dbUrl = 'http://localhost:3000/fichajes'; // URL para acceder a los datos

  constructor(private http: HttpClient) {}

  // Método para obtener fichajes
  getFichajes(): Observable<any[]> {
    return this.http.get<any[]>(this.dbUrl).pipe(
      map(data => data || []) // Asegúrate de que data sea un array
    );
  }

  // Método para agregar un nuevo fichaje
  addFichaje(nuevoFichaje: any): Observable<any> {
    return this.http.post<any>(this.dbUrl, nuevoFichaje).pipe(
      tap(() => {
        console.log('Fichaje agregado', nuevoFichaje);
      })
    );
  }
}