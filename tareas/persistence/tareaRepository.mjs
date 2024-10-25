import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import TareaDataSource from './tareaDataSource.mjs';

export default class TareaFileRepository extends TareaDataSource {
    constructor() {
        super();
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        this.filePath = path.join(__dirname, '../tareas.txt');
    }
    obtenerTodas() {
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);
    }
    guardar(tareas) {
        fs.writeFileSync(this.filePath, JSON.stringify(tareas, null, 2))
    }
}