export interface Cloth {
  _id: string;
  tipo: string;
  cantidad: number;
  precio: number;
  descripcion: string;
}

export interface ClothEdit {
  cantidad: number;
  precio: number;
  descripcion: string;
}
