import { DTOProductoRequest } from "../types/DTOProductoRequest";
import { Producto } from "../types/Producto";

const BASE_URL = "http://localhost:8080/api/v1/productos";

export const ProductoService = {
    //Acá hacemos todas las consultas HTTP

    getProductosList: async (): Promise<Producto<"COCINA"|"BEBIDA">[]> => {
        const response = await fetch(`${BASE_URL}/list`);
        const data = await response.json();

        return data;
    },

    createProduct: async (dtoRequest : DTOProductoRequest): Promise<Producto<"COCINA"|"BEBIDA">> => {
        
        const response = await fetch(`${BASE_URL}/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dtoRequest),
        });

        const data = await response.json();

        return data;
    },    

}