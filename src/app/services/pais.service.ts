import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';
import { Pais } from '../models/pais.model';

const baseUrlSitio = AppSettings.API_ENDPOINT+ '/sitio';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  listaPais(): Observable<Pais[]>{
      return this.http.get<Pais[]>(baseUrlSitio+"/pais");
  }

}