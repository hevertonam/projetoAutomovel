import { Category } from "../model/Category";
import { ICategoriesRepository,ICreateCategoryDTO } from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository{
    findByName(nome: string): Category {
      console.log(nome);
      return null;
    }
    list(): Category[] {
        return null;
    }
    create({nome, descricao}:ICreateCategoryDTO): void {
        console.log(nome, descricao);
       
    } 
    }
export {PostgresCategoriesRepository};