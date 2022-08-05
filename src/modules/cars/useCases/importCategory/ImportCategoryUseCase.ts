import fs from "fs";
import csvParse from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory{
    nome: string;
    descricao: string;
}

class ImportCategoryUseCase{

    constructor(private categoriesRepository:ICategoriesRepository){}



    loadCategories(file: Express.Multer.File):IImportCategory[]{
        const stream = fs.createReadStream(file.path); 
        const categories: IImportCategory[]=[];
              const parseFile = csvParse();

        stream.pipe(parseFile);

        parseFile.on("data",  async(line)=>{
            const [nome, descricao] = line;
            categories.push({
                nome,
                descricao,
            });
        });
        return categories;
    }

    execute(file: Express.Multer.File):void{
        const categories = this.loadCategories(file);
        console.log(categories);
    }
}
 
export{ImportCategoryUseCase}
