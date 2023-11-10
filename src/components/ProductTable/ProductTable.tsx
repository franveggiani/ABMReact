import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { ProductService } from "../../services/ProductService";
import Loader from "../Loader/Loader";
import {
  Button,
  Container,
  Table,
} from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import ProductModal from "../ProductModal/ProductModal";
import { EditButton } from "../Buttons/EditButton/EditButton";
import { DeleteButton } from "../Buttons/DeleteButton/DeleteButton";

const ProductTable = () => {
  //Inicializo un producto por defecto
  const initializeNewProduct = (): Product => {
    return {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
    };
  };
  //Seteo producto inicializado anteriormente
  const [product, setProduct] = useState<Product>(initializeNewProduct);

  //Esto contiene los productos que traemos desde la API
  const [products, setProducts] = useState<Product[]>([]);

  //Componente loader hasta que recibo los datos
  const [isLoading, setIsLoading] = useState(true);

  //Variable que va a actualizar los datos de la tabla
  const [refreshData, setRefreshData] = useState(false);

  //Manejo del estado del modal
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
  const [title, setTitle] = useState("");

  //Logica del modal
  const handleClick = (newTitle: string, prod: Product, modal: ModalType) => {
    setTitle(newTitle);
    setModalType(modal);
    setProduct(prod);
    setShowModal(true);
  };

  //Cada vez que se renderice el componente se va a ejecutar lo que esté dentro
  //Cuando cambia refreshData se ejecutará
  useEffect(() => {
    //Funcion para obtener todos los productos
    const fetchProducts = async () => {
      const products = await ProductService.getProducts();
      setProducts(products);
      setIsLoading(false);
    };

    fetchProducts();
  }, [refreshData]);

  console.log(JSON.stringify(products, null, 2));

  return (
    <>
      <Container className="mt-4">
        <Button
          onClick={() =>
            handleClick(
              "Nuevo producto",
              initializeNewProduct(),
              ModalType.CREATE
            )
          }
        >
          Nuevo producto
        </Button>
      </Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className="mt-4">
          <Table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Precio</th>
                <th>Descripcion</th>
                <th>Categoria</th>
                <th>Imagen</th>
                <th>Editar</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: "50px" }}
                    />
                  </td>
                  
                  <td><EditButton onClick={() => handleClick("Editar producto", product, ModalType.UPDATE)} /></td>
                  <td><DeleteButton onClick={() => handleClick("Eliminar producto", product, ModalType.DELETE)} /></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}

      {showModal && (
        <ProductModal
          show={showModal}
          onHide={() => setShowModal(false)}
          title={title}
          modalType={modalType}
          prod={product}
          refreshData = {setRefreshData}
        />
      )}
    </>
  );
};
export default ProductTable;
