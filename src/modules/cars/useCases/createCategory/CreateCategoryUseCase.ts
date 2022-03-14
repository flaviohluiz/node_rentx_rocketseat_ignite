import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


interface IRequest{
    name: string;
    description:string;
}

class CreateCategoryUseCase{     
    
    constructor(private categoriesRepository: ICategoriesRepository){}
    async execute({name, description}: IRequest): Promise<void>{
        
        //verificação
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists){
            throw new Error("Category already exists!"); //para erros lançados a quem fez a requisição
        }

        this.categoriesRepository.create({name, description}); //fazer o elo entre a rota e o repositório
    }
}

export {CreateCategoryUseCase}