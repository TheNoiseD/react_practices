import { useState } from "react";
import { useRef } from "react";


const NoControlado = () => {
    const [error, setError] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        
        const data = new FormData(form.current);
        const { title, description, state} = Object.fromEntries([
            ...data.entries(),
        ]);

        if((!title && !title.trim())){            
            return setError("El titulo es requerido");
        }

        if((!description && !description.trim())){
            return setError("La descripcion es requerida");
        }

        if(!state){
            return setError("El estado es requerido");
        }

        console.log('enviando datos', {title, description, state});

    }

    const form  = useRef(null);

    return (
      <form onSubmit={handleSubmit} ref={form}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          className="form-control mb-2"
          name="title"
        />

        <textarea
          className="form-control mb-2"
          placeholder="Ingrese descripcion"
          name="description"
        />

        <select className="form-select mb-2" name="state" defaultValue={""}>
            <option value="" disabled>
                Seleccione un estado
            </option>
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Procesar
        </button>
        {error && <div className="alert alert-danger mt-2">{error}</div>}
      </form>
    );
}
export default NoControlado;
