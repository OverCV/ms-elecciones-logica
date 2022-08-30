import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {BloqueVotante, BloqueVotanteRelations} from '../models';

export class BloqueVotanteRepository extends DefaultCrudRepository<
  BloqueVotante,
  typeof BloqueVotante.prototype.id,
  BloqueVotanteRelations
> {
  constructor(
    @inject('datasources.mySQL') dataSource: MySqlDataSource,
  ) {
    super(BloqueVotante, dataSource);
  }
}
