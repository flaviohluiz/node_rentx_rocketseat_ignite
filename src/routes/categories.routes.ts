import { Router } from 'express';
import createCategoryController from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';
import multer from 'multer'
import { importCategoryController } from '../modules/cars/useCases/importCategories';

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});


//recebe a requisição, chama o serviço e retorna a resposta
categoriesRoutes.post('/', (request, response)=>{       
    return createCategoryController().handle(request, response);
});

categoriesRoutes.get('/', (request, response)=>{
    return listCategoriesController.handle(request, response);
});


categoriesRoutes.post('/import', upload.single("file"), (request, response)=>{
    return importCategoryController.handle(request, response);
});

export {categoriesRoutes};