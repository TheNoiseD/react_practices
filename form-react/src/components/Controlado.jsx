import { useState } from "react";
const Controlado = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    state: "",
    priority: false,
  });

  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, state, priority } = todo;
    console.log("enviando datos", { title, description, state ,priority });
  };

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        value={todo.title}
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        value={todo.description}
        onChange={handleChange}
      />

      <select
        className="form-select mb-2"
        name="state"
        value={todo.state}
        onChange={handleChange}
      >
        <option value="" disabled>
          Seleccione un estado
        </option>
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>

      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputcheck"
          checked={todo.priority}
          onChange={handleChange}
        />
        <label htmlFor="inputcheck">Dar prioridad?</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
     {/*{error && <div className="alert alert-danger mt-2">{error}</div>}*/}
    </form>
  );
};
export default Controlado;
