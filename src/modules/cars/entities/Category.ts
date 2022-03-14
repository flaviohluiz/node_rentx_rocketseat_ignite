import {v4 as uuid } from 'uuid'; //pacote id //sobrescrevemos o v4 com uuidv4
import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";

@Entity("categories")
class Category {    
    
    @PrimaryColumn()
    id?: string; //opcional

    @Column()
    name: string;
    
    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){ 
            this.id = uuid(); // se for um objeto novo, receberá um id
        }
    }

}

export {Category}