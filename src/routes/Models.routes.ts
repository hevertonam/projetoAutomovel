import {Router} from 'express';

import { ModelsRepository } from '../repositories/ModelsRepository';


const modelsRoutes = Router();

const modelsRepository = new ModelsRepository();


modelsRoutes.post("/", (request, response) => {
    
    const {nome, descricao} = request.body; 

    const modelsAlreadyExists = modelsRepository.findByName(nome);

    if(modelsAlreadyExists){
        return response.status(400).json({error:"modelsAlreadyExists!"});
    }
 
    modelsRepository.create({nome, descricao});
    

    return response.status(201).send();

});


modelsRoutes.get("/", (request, response) => {
   
    const all = modelsRepository.list();

    return response.json(all);

});




export {modelsRoutes};