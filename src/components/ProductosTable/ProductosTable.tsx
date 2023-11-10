import { useEffect, useState } from "react";
import { ProductoService } from "../../services/ProductoService";
import { Producto } from "../../types/Producto";
import { Button, Container, Table } from "react-bootstrap";
import { DTOProductoRequest } from "../../types/DTOProductoRequest";
import { ModalType } from "../../types/ModalType";
import ProductoModal from "../ProductoModal/ProductoModal";

const ProductosTable = () => {
  //Inicializar un producto vacío
  const initDTOProductoRequest = (): DTOProductoRequest => {
    return {
      id: 0,
      tipoProducto: "",
      denominacion: "",
      descripcion: "",
      precio: 0,
      costo: 0,
      tiempoEstimadoCocina: null,
      marca: null,
      lote: null,
      detalleProductoCocinaList: [{
        ingrediente: {
          id: 1
        },
        cantidad: 5
      }],
      rubroProducto: {
        id: 1
      },
      urlImagen: "https://www.tecnagent.com/wp-content/uploads/2017/11/imagen-no-disponible.png"
    };
  };

  //useState de DTOProductoRequest
  const [producto, setProducto] = useState<DTOProductoRequest>(
    initDTOProductoRequest
  );

  //useState lista de productos
  const [productos, setProductos] = useState<Producto<"COCINA" | "BEBIDA">[]>();

  //Refrescar lista, esto lo usamos para el useEffect
  const [refreshData, setRefreshData] = useState(false);

  //Manejo del Modal (todo esto se pasará mediante props)
  const [showModal, setShowModal] = useState(false); //Setea si se muestra o no el modal
  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE); //Setea qué tipo de modal será, cuál se va a mostrar
  const [title, setTitle] = useState(""); //Setea el título que va a tener el modal

  //useEffect para obtener lista de productos
  useEffect(() => {
    const fetchProductos = async () => {
      const productoList = await ProductoService.getProductosList();
      setProductos(productoList);
    };

    fetchProductos();
  }, [refreshData]);

  console.log(JSON.stringify(productos, null, 2));

  //Lógica para elegir el modal y mostrarlo
  const handleClick = (
    newTitle: string,
    dtoProducto: DTOProductoRequest,
    modal: ModalType
  ) => {
    setTitle(newTitle);
    setModalType(modal);
    setProducto(dtoProducto);
    setShowModal(true);
  };

  return (
    <>
      <Container className="mt-4">
        <Button
          onClick={() =>
            handleClick(
              "Nuevo producto",
              initDTOProductoRequest(),
              ModalType.CREATE
            )
          }
        >
          Agregar producto
        </Button>
      </Container>
      <Container className="mt-4">
        <Table>
          {/* Cabecera de la tabla */}
          <thead>
            <tr>
              <th>Denominacion</th>
              <th>Descripcion</th>
              <th>Costo</th>
              <th>Precio de venta</th>
              <th>Rubro</th>
              <th>Imagen</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>
          {/* Contenido con .map */}
          <tbody>
            {productos?.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.denominacion}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.costo}</td>
                <td>{producto.precioVenta}</td>
                <td>{producto.rubroProducto.denominacion}</td>
                <td>
                  <img
                    src={producto.urlImagen}
                    alt={producto.denominacion}
                    style={{ width: "100px" }}
                  ></img>
                </td>
                <td>
                  <Button variant="primary">Editar</Button>
                </td>
                <td>
                  <Button variant="danger">Borrar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {showModal && (
        <ProductoModal 
          show={showModal}
          onHide={() => setShowModal(false)}
          title={title}
          modalType={modalType}
          producto={producto}
          refreshData={setRefreshData}
        />
      )}

    </>
  );
};
export default ProductosTable;
