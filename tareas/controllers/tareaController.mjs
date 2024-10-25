import {obtenerTareas, obtenerTareaPorId, agregarTarea, actulaizarTarea, eliminarTarea}
from '../services/tareaService.mjs';

import {renderizarListaTarea, renderizarTarea} from '../views/tareaView.mjs';


export function obtenerTodasLasTareas(req, res) {
    const tareas = obtenerTareas();
    res.send(renderizarListaTarea(tareas));
}


export function obtenerTareaPorIdController(req, res) {
    const {id} = req.params;
    const tarea = obtenerTareaPorId(parseInt(id));

    if (tarea){
        res.send(renderizarTarea(tarea));
    }
    else {
        res.status(404).send({mensaje: "Tarea no encontrada"});
    }
}

export function agregarNuevaTarea(req, res) {
    const datos = req.body;
    const nuevaTarea = agregarTarea(datos);
    res.send(nuevaTarea);
}

export function actualizarTareaPorId(req, res) {
    const {id} = req.params;
    const datos = req.body;
    const resultado = actulaizarTarea(parseInt(id), datos);
    res.send(resultado ? 'Tarea actualizada' : 'Tarea no encontrada');
}

export function eliminarTareaPorId(req, res) {
    const {id} = req.params;
    const resultado = eliminarTarea(parseInt(id));
    res.send(resultado ? 'Tarea Eliminada' : 'Tarea no Encontrada');
}