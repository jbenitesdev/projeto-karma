export class Tarefa{

    id : string;
    titulo : string;
    entrega : Date;
    nome : string;
    
  constructor({id='', titulo='', nome='', 
               date : entrega = null as Date}){
       this.id  = id;
       this.titulo = titulo;
       this.nome = nome;
       this.entrega= entrega;
   }




}