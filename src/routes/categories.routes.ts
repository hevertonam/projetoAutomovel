import {Router} from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategories';


const categoriesRoutes = Router();

const categoriesRepository = CategoriesRepository.getInstance();

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request,response);
  });

  
categoriesRoutes.get("/", (request, response) => {
   return listCategoryController.handle(request,response);
   
});

export {categoriesRoutes};