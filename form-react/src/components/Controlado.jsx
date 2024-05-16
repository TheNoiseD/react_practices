import { useState } from "react";
const Controlado = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    state: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, description, state } = todo;

    console.log("enviando datos", { title, description, state });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />

      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />

      <select
        className="form-select mb-2"
        name="state"
        value={todo.state}
        onChange={(e) =>
          setTodo({
            ...todo,
            state: e.target.value,
          })
        }
      >
        <option value="" disabled>
          Seleccione un estado
        </option>
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
      {/* {error && <div className="alert alert-danger mt-2">{error}</div>} */}
    </form>
  );
};
export default Controlado;
