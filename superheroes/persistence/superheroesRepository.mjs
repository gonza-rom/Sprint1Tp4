import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import SuperheroeDataSource from './superheroesDataSource.mjs'


export default class SuperheroesFileRepository extends SuperheroeDataSource{
    constructor(){
        super();
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        this.filePath = path.join(__dirname, '../superheroes.txt');
    }
    obtenerTodos(){
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);
    }
    guardar(superheroes){
        fs.writeFileSync(this.filePath, JSON.stringify(superheroes, null, 2));
    }
}