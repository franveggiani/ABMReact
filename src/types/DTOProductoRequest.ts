export interface DTOProductoRequest {
    id: number;
    tipoProducto: string | null;
    denominacion: string;
    descripcion: string;
    precio: number;
    costo: number;
    tiempoEstimadoCocina: number;
    marca: string;
    lote: number;
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
}