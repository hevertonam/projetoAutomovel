import {Model} from "../model/Model";



interface ICreateModeloDTO {
    nome:string;
    descricao:string;
}

class ModelsRepository{
      
private models : Model[];

constructor(){
    this.models = [];
}

    create({nome,descricao}:ICreateModeloDTO) : void{
    const model = new Model ();
                
    Object.assign(model,{
    nome,
    descricao,
    data_criacao: new Date(),
    });

this.models.push(model);  
}

list():Model[]   {
   return this.models;
    }
    

findByName(nome:string): Model{
    const model = this.models.find(Model => Model.nome === nome);
    return model;

}
}




export {ModelsRepository};