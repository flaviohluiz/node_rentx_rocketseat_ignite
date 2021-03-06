import { getRepository, Repository } from "typeorm";
import {Category} from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";


//DTO - Data transfer object - criar um objeto que fará a transferência de dados



class CategoriesRepository implements ICategoriesRepository{
    
    private repository: Repository<Category>

    private static INSTANCE: CategoriesRepository;

    private constructor(){
        this.repository = getRepository(Category);
    }

    //método responsável por criar um repositorio
    //public static getInstance(): CategoriesRepository{
    //    if (!CategoriesRepository.INSTANCE){
    //        CategoriesRepository.INSTANCE = new CategoriesRepository();
    //    }
    //    return CategoriesRepository.INSTANCE;
    //}

    //a função create será responsavel por cadastrar a categoria em nosso array
    async create({description, name}: ICreateCategoryDTO): Promise<void>{
        
        const category = this.repository.create({
            description, 
            name,
        });
        
        await this.repository.save(category);
    }

    async list(): Promise<Category[]>{
        const categories = await this.repository.find();
        return categories;

    }

    //validação - verificar se é unico
    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({name})
        return category;
    }

    
}

export {CategoriesRepository}