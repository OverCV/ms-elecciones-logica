import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Eleccion, EleccionRelations} from '../models';

export class EleccionRepository extends DefaultCrudRepository<
  Eleccion,
  typeof Eleccion.prototype.descripcion,
  EleccionRelations
> {
  constructor(
    @inject('datasources.mySQL') dataSource: MySqlDataSource,
  ) {
    super(Eleccion, dataSource);
  }
}
