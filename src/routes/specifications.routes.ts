 import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

 const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();
                                   

 specificationsRoutes.post("/", (request, response) => {
    
    const {nome, descricao}=request.body;
    
    const createSpecificationService = new CreateSpecificationService(specificationsRepository)

    createSpecificationService.execute({nome,descricao})

    return response.status(201).send();

});

 export{specificationsRoutes};
