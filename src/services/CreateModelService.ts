
interface IRequest {
    nome: string;
    descricao: string;
}

class CreateModelService{

    execute({nome, descricao}:IRequest){
        
        const modelsAlreadyExists = modelsRepository.findByName(nome);

        if(modelsAlreadyExists){

        throw new Error("modelsAlreadyExists!");    

        }
     
        modelsRepository.create({nome, descricao});
    }
}



export {CreateModelService}