import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {BloqueCargo, BloqueCargoRelations} from '../models';

export class BloqueCargoRepository extends DefaultCrudRepository<
  BloqueCargo,
  typeof BloqueCargo.prototype.id,
  BloqueCargoRelations
> {
  constructor(
    @inject('datasources.mySQL') dataSource: MySqlDataSource,
  ) {
    super(BloqueCargo, dataSource);
  }
}
