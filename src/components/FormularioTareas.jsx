import { useState } from "react";
import { useTareasContext } from "../context/TareasContext";

export const FormularioTareas = () => {
  const [text, setText] = useState("");
  const [label, setlabel] = useState("");

  const { addTarea } = useTareasContext();

  const handleAddTarea = () => {
    if (text && label) {
      addTarea({
        id: Date.now(),
        text: text,
        label: label,
      });

      setText("");
      setlabel("");
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Añadir tarea</h2>
      <input
        value={ text }
        onChange={ (e) => setText(e.target.value) }
        className="border p-2 rounded mb-2 w-full bg-white cursor-text"
        type="text"
        placeholder="Descripción de la tarea"
      ></input>

      <h2 className="text-xl font-bold mb-2">Añadir Etiqueta</h2>
      <input
        value={ label }
        onChange={ (e) => setlabel(e.target.value) }
        className="border p-2 rounded mb-2 w-full bg-white cursor-text"
        type="text"
        placeholder="Nombre de la etiqueta"
      ></input>

      <button
        onClick={ handleAddTarea }
        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
      >
        Añadir
      </button>
    </div>
  );
};
