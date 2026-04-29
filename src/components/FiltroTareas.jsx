import { useTareasContext } from "../context/TareasContext";

export const FiltroTareas = () => {

    const { tareas, filter, filteredByLabel } = useTareasContext();

    //const labels = tareas.map( tarea => tarea.label.toUpperCase() );
    const labels = Array.from(new Set(tareas.map( tarea => tarea.label.toUpperCase() )));
    //console.log(labels);

    const handleFilterChange = ( e ) => {
        //console.log('Recibiendo la etiqueta: ', e.target.value);
        filteredByLabel(e.target.value);
    }

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Filtrar tareas</h2>
      <select onChange={handleFilterChange} value={filter} className="border p-2 rounded mb-2 w-full bg-white cursor-pointer">
        <option value="">-- Todas las Etiquetas --</option>
        { labels.map( (label, index) => (
            <option key={ index } value={ label }>{ label }</option>
        ) ) }
      </select>
    </div>
  );
};
