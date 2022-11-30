import {Entity} from "../../../types/entity";

export type Personal= Entity<number> & {
  nombre: string;
  apellidoP: string;
  apellidoM: string;
  sueldo: number;
  puesto: any;
  fecNac: string;
};
