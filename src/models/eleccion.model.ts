import {Entity, model, property} from '@loopback/repository';

@model()
export class Eleccion extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  descripcion: string;

  
  /* TODO Adición de descripción */

  constructor(data?: Partial<Eleccion>) {
    super(data);
  }
}

export interface EleccionRelations {
  // describe navigational properties here
}

export type EleccionWithRelations = Eleccion & EleccionRelations;
