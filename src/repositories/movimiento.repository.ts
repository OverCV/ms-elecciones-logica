import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Movimiento, MovimientoRelations} from '../models';

export class MovimientoRepository extends DefaultCrudRepository<
  Movimiento,
  typeof Movimiento.prototype.id,
  MovimientoRelations
> {
  constructor(
    @inject('datasources.mySQL') dataSource: MySqlDataSource,
  ) {
    super(Movimiento, dataSource);
  }
}
