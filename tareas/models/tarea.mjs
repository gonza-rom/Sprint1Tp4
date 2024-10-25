

export default class Tarea {
    constructor(id, titulo, descripcion, completado = false) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completado = completado;
    }
    completado() {
        this.completado = true;
    }
}