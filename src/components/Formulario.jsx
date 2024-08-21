import { useEffect, useState } from "react"

const Formulario = ({agregarProducto, productoAEditar, setProductoAEditar, editarProducto}) => { // props = { agregarProducto }

   const formInicial = {
    id: null,
    nombre: '',
    apellido: '',
    edad: '',
    colorFavorito: ''
   }

   
   useEffect(() => {
        console.log('Cambió el producto a editar')
        productoAEditar ? setForm(productoAEditar): setForm(formInicial)
   }, [productoAEditar])
   

 
   
   const [form, setForm] = useState(formInicial)

   


   const handleChange = e => {

    setForm({
        ...form, 
        [e.target.name]: e.target.value,
    })

   }

   const handleSubmit = e => {
    e.preventDefault() 
    console.log('Enviando la información')

   
  

    if ( form.id === null ) {
        agregarProducto(form)
    } else {
        editarProducto(form)
    }
    
    handleReset()
   }

   const handleReset = () => {
    setForm(formInicial)
    setProductoAEditar(null)
   }

  return (
    <>
        <h2>Formulario de { productoAEditar ? 'edición' : 'inscripción'}</h2>
        <form className="w-75 border border-danger rounded-3 p-4" onSubmit={handleSubmit}>
            {/* Campo Nombre */}
            <div className="mb-3">
                <label htmlFor="lbl-nombre" className="form-label">Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-nombre" 
                    name="nombre" 
                    placeholder="Ingrese el nombre..."
                    value={form.nombre}
                    onChange={handleChange}
                />
            </div>
            {/* Campo Apellido */}
            <div className="mb-3">
                <label htmlFor="lbl-categoria" className="form-label">Apellido</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-categoria" 
                    name="apellido" 
                    placeholder="Ingrese el apellido..."
                    value={form.apellido}
                    onChange={handleChange}
                />
            </div>
            {/* Campo Edad */}
            <div className="mb-3">
                <label htmlFor="lbl-precio" className="form-label">Edad</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-precio" 
                    name="edad" 
                    placeholder="Ingrese la edad..."
                    value={form.edad}
                    onChange={handleChange}
                />
            </div>
            {/* Campo ColorFavorito */}
            <div className="mb-3">
                <label htmlFor="lbl-precio" className="form-label">Color Favorito</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="lbl-precio" 
                    name="colorFavorito" 
                    placeholder="Ingrese el color favorito..."
                    value={form.colorFavorito}
                    onChange={handleChange}
                />
            </div>
            
            <button type="submit" className="btn btn-dark me-2">{ productoAEditar ? 'Editar' : 'Guardar'}</button>
            <button type="reset" className="btn btn-danger" onClick={handleReset}>Resetear</button>
        </form>
    </>
  )
}

export default Formulario