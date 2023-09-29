import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Mural } from '../pensamentos/interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private readonly API ='http://localhost:3000/mural'
  constructor(private http: HttpClient) { }

listar(): Observable<Mural[]> {

return this.http.get<Mural[]>(this.API)

}

cadastrar(mural:Mural): Observable<Mural>{

return this.http.post<Mural>(this.API, mural)


}

}
