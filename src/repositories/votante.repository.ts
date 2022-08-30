import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Votante, VotanteRelations} from '../models';

export class VotanteRepository extends DefaultCrudRepository<
  Votante,
  typeof Votante.prototype.id,
  VotanteRelations
> {
  constructor(
    @inject('datasources.mySQL') dataSource: MySqlDataSource,
  ) {
    super(Votante, dataSource);
  }
}
