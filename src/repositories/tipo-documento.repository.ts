import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MySqlDataSource} from '../datasources';
import {TipoDocumento, TipoDocumentoRelations} from '../models';

export class TipoDocumentoRepository extends DefaultCrudRepository<
  TipoDocumento,
  typeof TipoDocumento.prototype.id,
  TipoDocumentoRelations
> {
  constructor(
    @inject('datasources.mySQL') dataSource: MySqlDataSource,
  ) {
    super(TipoDocumento, dataSource);
  }
}
