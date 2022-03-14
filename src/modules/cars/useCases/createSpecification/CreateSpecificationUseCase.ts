import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description:string;
}

class CreateSpecificationUseCase{
    constructor(private specificactionsRepository: ISpecificationRepository){

    }
    
    execute({name, description}: IRequest): void{
        const specificationAlreadyExists = this.specificactionsRepository.findByname(name);

        if(specificationAlreadyExists){
            throw new Error("Specification already exists!"); //para erros lançados a quem fez a requisição
        };
        
        this.specificactionsRepository.create({
            name, 
            description,
        });
    }
}

export {CreateSpecificationUseCase}