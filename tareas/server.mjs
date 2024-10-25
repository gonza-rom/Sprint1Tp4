
import express from 'express';
import { obtenerTodasLasTareas, agregarNuevaTarea, actualizarTareaPorId, eliminarTareaPorId, obtenerTareaPorIdController }
from './controllers/tareaController.mjs';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/tareas', obtenerTodasLasTareas);
app.get('/tareas/:id', obtenerTareaPorIdController);
app.post('/tareas', agregarNuevaTarea);
app.put('/tareas/:id', actualizarTareaPorId);
app.delete('/tareas/:id', eliminarTareaPorId);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})
