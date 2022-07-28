import {Category} from "../Category/Category";



interface ICreateCategoryDTO {
    nome:string;
    descricao:string;
}

class CategoriesRepository
{

private categories : Category[];
    static findByName: any;
    static create: any;

constructor(){
    this.categories = [];
}

    create({nome,descricao}:ICreateCategoryDTO) : void{
    const category = new Category ();
                
    Object.assign(category,{
    nome,
    descricao,
    data_criacao: new Date(),
    });

this.categories.push(category);  
}

list():Category[]   {
   return this.categories;
    }
    

    findByName(nome:string): Category{
        const category = this.categories.find(Category => Category.nome === nome);
        return category;

}
}




export {CategoriesRepository};