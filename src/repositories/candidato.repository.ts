import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {Candidato, CandidatoRelations} from '../models';

export class CandidatoRepository extends DefaultCrudRepository<
  Candidato,
  typeof Candidato.prototype.id,
  CandidatoRelations
> {
  constructor(
    @inject('datasources.mySQL') dataSource: MySqlDataSource,
  ) {
    super(Candidato, dataSource);
  }
}
