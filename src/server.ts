import express from 'express';
import { router } from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import "./database"

const app = express();

app.use(express.json()); //faz com que possamos receber os params em nossa aplicação
//permite que eu utilize o json

app.use("/api-docs", swaggerUi.serve,  swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log("Server is running!"));