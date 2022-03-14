import {v4 as uuid} from 'uuid';

class Specification{
    
    id?: string; //opcional
    name: string;
    description: string;
    created_at: Date;

    constructor(){
        if(!this.id){ 
            this.id = uuid(); // se for um objeto novo, receberá um id
        }
    }
}

export {Specification}