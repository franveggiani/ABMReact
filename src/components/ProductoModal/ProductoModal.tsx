import { Button, Form, FormControl, FormGroup, FormLabel, FormSelect, Modal } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import { DTOProductoRequest } from "../../types/DTOProductoRequest";
import { ProductoService } from "../../services/ProductoService";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ChangeEvent, useState } from "react";

type ProductoModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  modalType: ModalType;
  producto: DTOProductoRequest;
  refreshData: React.Dispatch<React.SetStateAction<boolean>>;
};

//Validation schema
const validationSchema = () => {
  return Yup.object().shape({
    id: Yup.number().integer().min(0),
    denominacion: Yup.string().required("El nombre del producto es requerido"),
    descripcion: Yup.string().required("Debe poner una descripcion"),
    precio: Yup.number().min(0).required("El precio es obligatorio"),
    costo: Yup.number().min(0).required("El costo es obligatorio"),
  });
};

const ProductoModal = ({
  show,
  onHide,
  title,
  modalType,
  producto,
  refreshData,
}: ProductoModalProps) => {
  const [tipoProducto, setTipoProducto] = useState("");

  //Formulario
  const formik = useFormik({
    initialValues: producto,
    validationSchema: validationSchema(),
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (obj: DTOProductoRequest) => handleSaveUpdate(obj),
  });

  //Función para crear o actualizar
  const handleSaveUpdate = async (producto: DTOProductoRequest) => {
    try {
      const isNew = producto.id === 0;
      if (isNew) {
        await ProductoService.createProduct(producto);
      } else {
        console.log("Acá va el update");
      }

      console.log("A");

      onHide(); //Una vez que se crea el producto, se esconde el Modal
      refreshData((prevState) => !prevState); //Se cambia refreshState para actualizar la lista del useEffect()
    } catch (error) {
      console.error(error);
    }
  };

  //Función para determinar el tipo de producto
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTipoProducto(e.target.value);
  };

  return (
    <>
      {modalType === ModalType.DELETE ? (
        /* Modal para un DELETE */
        <>
          <Modal show={show} onHide={onHide} cenntered backdrop="static">
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                ¿Desea eliminar el producto <br />{" "}
                <strong>{producto.denominacion}</strong>?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onHide}>
                Cancelar
              </Button>
              <Button variant="danger" onClick={onHide}>
                {" "}
                {/* handleDelete */}
                Eliminar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        /* Modal para un ADD o UPDATE */
        <>
          <Modal show={show} onHide={onHide} centered backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              {/* Acá va el formulario entero */}
              <Form onSubmit={formik.handleSubmit}>
                <FormLabel>Tipo de producto</FormLabel>
                <FormSelect value={tipoProducto} onChange={handleSelectChange}>
                  <option value="">Selecciona...</option>
                  <option value="COCINA">Cocina</option>
                  <option value="INSUMO">Insumo</option>
                </FormSelect>
          
                <FormGroup controlId="formDenominacion">
                  <FormLabel>Denominacion</FormLabel>
                  <Form.Control 
                    name="denominacion"
                    type="text"
                    value={formik.values.denominacion || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid = {Boolean(formik.errors.denominacion && formik.touched.denominacion)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.denominacion}
                  </Form.Control.Feedback>
                </FormGroup>

                <Modal.Footer>
                  <Button variant="secondary" onClick={onHide}>
                    Cancelar
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={formik.isValid}
                  >
                    {" "}
                    {/* submit */}
                    Agregar
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      )}
      ;
    </>
  );
};
export default ProductoModal;
