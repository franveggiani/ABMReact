export interface Producto <T extends "COCINA" | "BEBIDA"> {
    id: number;
    denominacion: string;
    descripcion: string;
    costo: number;
    precioVenta: number;
    estadoProducto: unknown;
    urlImagen: string;
    fechaAlta: string;
    fechaBaja: string | null;
    fechaModificacion: string | null;
    rubroProducto: {
        id: number;
        denominacion: string;
        fechaHoraAlta: string;
        fechaHoraBaja: string | null;
        fechaHoraModificacion: string | null;
    }
    tipoProducto: T;

    detalleProductoCocina?: T extends "COCINA"
    ? {
        id: number;
        cantidad: number;
        ingrediente: {
          id: number;
          denominacion: string;
          fechaHoraAlta: string;
          fechaHoraBaja: string;
          fechaHoraModificacion: string;
          precioCompra: number;
          stockActual: number;
          stockMinimo: number;
          urlImagen: string;
          unidadMedida: {
            id: number;
            abreviatura: string;
            denominacion: string;
            fechaHoraAlta: string;
            fechaHoraBaja: string | null;
            fechaHoraModificacion: string | null;
          };
          rubroIngrediente: {
            id: number;
            denominacion: string;
            fechaHoraAlta: string;
            fechaHoraBaja: string;
            fechaHoraModificacion: string;
          };
        };
      }
    : never;

    tiempoEstimadoCocina?: T extends "COCINA" ? number : never;
    
    marca?: T extends "BEBIDA" ? string : never;

    lote?: T extends "BEBIDA" ? number : never;

    stock?: T extends "BEBIDA" ? number | null : never;
}