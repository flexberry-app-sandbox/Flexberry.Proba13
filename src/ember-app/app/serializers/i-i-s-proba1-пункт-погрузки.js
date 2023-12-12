import { Serializer as ПунктПогрузкиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-proba1-пункт-погрузки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПунктПогрузкиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
