import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДогРаспр: DS.attr('number'),
  докумПостав: DS.belongsTo('i-i-s-proba1-докум-постав', { inverse: null, async: false }),
  пунктПогрузки: DS.belongsTo('i-i-s-proba1-пункт-погрузки', { inverse: null, async: false }),
  списокБарж: DS.belongsTo('i-i-s-proba1-список-барж', { inverse: null, async: false }),
  списокКонтей: DS.belongsTo('i-i-s-proba1-список-контей', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-proba1-формир-распр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДогРаспр: {
    descriptionKey: 'models.i-i-s-proba1-формир-распр.validations.номерДогРаспр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  докумПостав: {
    descriptionKey: 'models.i-i-s-proba1-формир-распр.validations.докумПостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пунктПогрузки: {
    descriptionKey: 'models.i-i-s-proba1-формир-распр.validations.пунктПогрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокБарж: {
    descriptionKey: 'models.i-i-s-proba1-формир-распр.validations.списокБарж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокКонтей: {
    descriptionKey: 'models.i-i-s-proba1-формир-распр.validations.списокКонтей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРаспрE', 'i-i-s-proba1-формир-распр', {
    дата: attr('Дата', { index: 0 }),
    номерДогРаспр: attr('Номер дог распр', { index: 1 })
  });

  modelClass.defineProjection('ФормирРаспрL', 'i-i-s-proba1-формир-распр', {
    дата: attr('Дата', { index: 0 }),
    номерДогРаспр: attr('Номер дог распр', { index: 1 }),
    списокБарж: belongsTo('i-i-s-proba1-список-барж', 'Производитель', {
      производитель: attr('Производитель', { index: 2 })
    }, { index: -1, hidden: true }),
    списокКонтей: belongsTo('i-i-s-proba1-список-контей', 'Наим контей', {
      наимКонтей: attr('Наим контей', { index: 3 })
    }, { index: -1, hidden: true }),
    пунктПогрузки: belongsTo('i-i-s-proba1-пункт-погрузки', 'Адрес', {
      адрес: attr('Адрес', { index: 4 })
    }, { index: -1, hidden: true }),
    докумПостав: belongsTo('i-i-s-proba1-докум-постав', 'Дата', {
      дата: attr('Дата', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
