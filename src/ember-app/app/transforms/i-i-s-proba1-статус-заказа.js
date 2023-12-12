import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусЗаказаEnum from '../enums/i-i-s-proba1-статус-заказа';

export default FlexberryEnum.extend({
  enum: СтатусЗаказаEnum,
  sourceType: 'IIS.Proba1.СтатусЗаказа'
});
