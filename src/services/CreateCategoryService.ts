import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
    nome: string;
    descricao: string;
}

class CreateCategoryService{

    constructor (private categoriesRepository : CategoriesRepository){
    }

    execute({nome, descricao}:IRequest){
        
        const categoriesAlreadyExists = this.categoriesRepository.findByName(nome);

        if(categoriesAlreadyExists){

        throw new Error("modelsAlreadyExists!");    

        }
     
        this.categoriesRepository.create({nome, descricao});
    }
}



export {CreateCategoryService}