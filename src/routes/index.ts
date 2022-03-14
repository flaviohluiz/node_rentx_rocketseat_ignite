import {Router} from 'express';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specification.routes';

const router = Router();

router.use('/categories', categoriesRoutes); //usar a rota - passar prefixo e a constante
router.use('/specifications', specificationsRoutes); 


export{router}


//arquivo apenas para rotas