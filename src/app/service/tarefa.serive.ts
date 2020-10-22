import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Tarefa } from "../model/tarefa";
import { map} from 'rxjs/operators';
import { Observable} from 'rxjs';

const url = 'http://localhost:3004/tarefa'

@Injectable()
export class TarefaService{
       constructor(private http: HttpClient){
      }


   public gravar(tarefa : Tarefa){
             return this.http.post<Tarefa>(`${url}`,tarefa);
     }
       

    public listar():Observable<Tarefa[]>{
            return   this.http.get<Tarefa[]>(url).pipe(map(dados=>{
            let tarefas = dados.map(item=>{
           item.entrega = new Date(item.entrega)
           return  item;
         })
         return tarefas;
     }));
    }


}