import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidades } from '../models/habilidades';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getHabilidades():Observable<Habilidades[]>{
    return this.http.get<Habilidades[]>(`${this.apiServerUrl}/habilidades/todas`);
  }

  public addHabilidades(habilidades: Habilidades):Observable<Habilidades>{
    return this.http.post<Habilidades>(`${this.apiServerUrl}/habilidades/agregar`,habilidades);
  }

  public updateHabilidades(habilidades: Habilidades):Observable<Habilidades>{
    return this.http.put<Habilidades>(`${this.apiServerUrl}/habilidades/update`,habilidades);
  }

  public deleteHabilidades(habilidadesId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/habilidades/eliminar/${habilidadesId}`);
  }


}