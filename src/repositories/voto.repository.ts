import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Voto, VotoRelations} from '../models';

export class VotoRepository extends DefaultCrudRepository<
  Voto,
  typeof Voto.prototype.id,
  VotoRelations
> {
  constructor(
    @inject('datasources.mySQL') dataSource: MySqlDataSource,
  ) {
    super(Voto, dataSource);
  }
}
