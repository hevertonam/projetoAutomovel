import {Router} from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { PostgresCategoriesRepository } from '../repositories/PostgresCategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';


const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();


categoriesRoutes.post("/", (request, response) => {
    
    const {nome, descricao} = request.body; 

    const createCategoryService = new CreateCategoryService(categoriesRepository);
    
    createCategoryService.execute({nome,descricao});
    
    return response.status(201).send();

});


categoriesRoutes.get("/", (request, response) => {
   
    const all = categoriesRepository.list();

    return response.json(all);

});





export {categoriesRoutes};