import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interface/heroes.interface';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

// import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  //Environment de desarrollo
  private baseUrl: string = environment.baseUrl;
  
  //Environment de producción
  // private baseUrl: string = environment.baseUrl

  // url: string = 'http://localhost:3000/heroes';

  constructor( private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroePorId(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
  }
}

/*
url: string = 'http://localhost:3000/';

  constructor( private http: HttpClient) { }

  getHeroes(){
    return this.http.get<Heroe[]>(`${this.url}/heroes`);
  }

  hetHeroePorId(id: string){
    return this.http.get<Heroe>(`${this.url}/dc-batman`);
  }*/