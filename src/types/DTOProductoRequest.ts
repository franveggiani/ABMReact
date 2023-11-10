export interface DTOProductoRequest {
    id: number;
    tipoProducto: string;
    denominacion: string;
    descripcion: string;
    precio: number;
    costo: number;
    tiempoEstimadoCocina: number | null;
    marca: string | null;
    lote: number | null;
    detalleProductoCocinaList: [
        {
            ingrediente: {
                id: number;
            };
            cantidad: number;
        }
    ] | null;
    
    rubroProducto: {
        id: number;
    } | null;

    urlImagen: string;
}