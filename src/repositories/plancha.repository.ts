import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Plancha, PlanchaRelations} from '../models';

export class PlanchaRepository extends DefaultCrudRepository<
  Plancha,
  typeof Plancha.prototype.id,
  PlanchaRelations
> {
  constructor(
    @inject('datasources.mySQL') dataSource: MySqlDataSource,
  ) {
    super(Plancha, dataSource);
  }
}
