import { useTareasContext } from "../context/TareasContext";

export const ListadoTareas = () => {
  const { tareas, removeTarea, filter } = useTareasContext();

  const tareasFiltered = filter ? tareas.filter( tarea => tarea.label.toUpperCase() === filter ) : tareas;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Listado de Tareas</h2>

      {tareasFiltered.map( ( tarea ) => (
        <div
          key={ tarea.id }
          className="flex justify-between p-2 bg-gray-100 mb-2"
        >
          <span className="text-lg font-semibold">{ tarea.text }</span>
          <button
            onClick={() => removeTarea( tarea.id )}
            className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};
