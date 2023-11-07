import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { ProductService } from "../../services/ProductService";
import Loader from "../Loader/Loader";
import { Card, Col, Container, Row, Table } from "react-bootstrap";

const ProductTable = () => {
  //Esto contiene los productos que traemos desde la API
  const [products, setProducts] = useState<Product[]>([]);

  //Componente loader hasta que recibo los datos
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Funcion para obtener todos los productos
    const fetchProducts = async () => {
      const products = await ProductService.getProducts();
      setProducts(products);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  console.log(JSON.stringify(products, null, 2));

  return (
    <>
      {isLoading ? <Loader /> : (
            <Table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                        <th>Categoria</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map( product => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td><img src={product.image} alt={product.title} style={{width: "50px"}}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )}

      {/* {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Table>
            <Row>
              {products.map((product) => (
                <Col>
                  <Card style={{width: "14rem"}}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ maxWidth: "100%", height: "18rem", width: "20rem" }}
                    />
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Subtitle>{product.category}</Card.Subtitle>
                  </Card>
                </Col>
              ))}
            </Row>
          </Table>
        </Container>
      )} */}
    </>
  );
};
export default ProductTable;
