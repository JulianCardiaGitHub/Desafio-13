import TablaFila from "./TablaFila";

const Tabla = ({products, eliminarProducto, setProductoAEditar}) => {

  return (
    <>
      <h2>Tabla de usuarios</h2>
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Color favorito</th>
          </tr>
        </thead>
        <tbody>
            {
              products && products.map((product, idx) => (
                <TablaFila 
                  key={idx} 
                  product={product} 
                  eliminarProducto={eliminarProducto} 
                  setProductoAEditar={setProductoAEditar}
                />
              ))
            }
        </tbody>
      </table>

    </>
  );
};

export default Tabla;

