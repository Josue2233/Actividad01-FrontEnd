import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';
import { Concurso } from '../models/concurso.model';

const baseUrlUtil = AppSettings.API_ENDPOINT+ '/util';

@Injectable({
  providedIn: 'root'
})
export class ConcursoService {

  constructor(private http: HttpClient) { }

  listaConcurso(): Observable<Concurso[]>{
      return this.http.get<Concurso[]>(baseUrlUtil+"/concurso");
  }

}