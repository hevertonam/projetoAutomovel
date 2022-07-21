import {Router} from 'express';

import { ModelsRepository } from '../repositories/ModelsRepository';


const modelsRoutes = Router();

const modelsRepository = new ModelsRepository();


modelsRoutes.post("/", (request, response) => {
    
    const {nome, descricao} = request.body; 

    
    modelsRepository.create({nome, descricao});
    

    return response.status(201).send();

});


modelsRoutes.get("/", (request, response) => {
   
    const all = modelsRepository.list();

    return response.json(all);

});




export {modelsRoutes};