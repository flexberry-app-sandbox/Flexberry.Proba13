import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧИнфОЗакMixin
} from '../mixins/regenerated/models/i-i-s-proba1-т-ч-инф-о-зак';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧИнфОЗакMixin, Validations, {
});

defineProjections(Model);

export default Model;
