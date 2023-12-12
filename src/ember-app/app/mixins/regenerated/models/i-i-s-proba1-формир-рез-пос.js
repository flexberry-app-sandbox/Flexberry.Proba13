import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  наличДеф: DS.attr('boolean'),
  статусЗаказа: DS.attr('i-i-s-proba1-статус-заказа'),
  удовлКл: DS.attr('i-i-s-proba1-удовл-кл'),
  формирРаспр: DS.belongsTo('i-i-s-proba1-формир-распр', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-proba1-формир-рез-пос.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  наличДеф: {
    descriptionKey: 'models.i-i-s-proba1-формир-рез-пос.validations.наличДеф.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статусЗаказа: {
    descriptionKey: 'models.i-i-s-proba1-формир-рез-пос.validations.статусЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  удовлКл: {
    descriptionKey: 'models.i-i-s-proba1-формир-рез-пос.validations.удовлКл.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  формирРаспр: {
    descriptionKey: 'models.i-i-s-proba1-формир-рез-пос.validations.формирРаспр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРезПосE', 'i-i-s-proba1-формир-рез-пос', {
    дата: attr('Дата', { index: 0 }),
    статусЗаказа: attr('Статус заказа', { index: 1 }),
    наличДеф: attr('Налич деф', { index: 2 }),
    удовлКл: attr('Удовл кл', { index: 3 }),
    формирРаспр: belongsTo('i-i-s-proba1-формир-распр', 'Формир распр', {
      дата: attr('Дата', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'дата' })
  });

  modelClass.defineProjection('ФормирРезПосL', 'i-i-s-proba1-формир-рез-пос', {
    дата: attr('Дата', { index: 0 }),
    статусЗаказа: attr('Статус заказа', { index: 1 }),
    наличДеф: attr('Налич деф', { index: 2 }),
    удовлКл: attr('Удовл кл', { index: 3 }),
    формирРаспр: belongsTo('i-i-s-proba1-формир-распр', 'Дата', {
      дата: attr('Дата', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
