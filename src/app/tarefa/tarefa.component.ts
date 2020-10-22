import { TarefaService } from './../service/tarefa.serive';
import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../model/tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  tarefa: Tarefa;
  tarefas : Tarefa[]=[];
  
  constructor(private service: TarefaService) { 
    this.tarefa = new Tarefa({});
  }

  ngOnInit() {
    this.listar();
  }

  public listar(){
    this.service.listar().subscribe(res=>{
      this.tarefas = res;
    })
  }

  public gravar(){
    this.service.gravar(this.tarefa).subscribe(res=>{
      this.tarefa = new Tarefa({});
      this.listar();
    })
  }


}
