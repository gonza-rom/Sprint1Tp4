

import TareaRepository from '../persistence/tareaRepository.mjs'

const repository = new TareaRepository();

export function obtenerTareas() {
    return repository.obtenerTodas()
}

export function obtenerTareaPorId(id) {
    const tareas = repository.obtenerTodas();
    return tareas.find(t => t.id === id);
}

export function agregarTarea(datos) {
    const tareas = repository.obtenerTodas();
    const nuevaTarea = {id : tareas.length + 1, ...datos};
    tareas.push(nuevaTarea);
    repository.guardar(tareas);
    return nuevaTarea;
}

export function actulaizarTarea(id, datos) {
    const tareas = repository.obtenerTodas();
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        Object.assign(tarea, datos);
        repository.guardar(tareas);
        return true
    }
    return false;
}

export function eliminarTarea(id) {
    const tareas = repository.obtenerTodas();
    const nuevaLista = tareas.filter(t => t.id === id);
    if (tareas.length !== nuevaLista.length) {
        repository.guardar(nuevaLista);
        return true;
    }
    return false;
}