import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адресПоставщика: DS.attr('string'),
  наимЗаказа: DS.attr('string'),
  расчетСчет: DS.attr('number'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  адресПоставщика: {
    descriptionKey: 'models.i-i-s-proba1-клиенты.validations.адресПоставщика.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наимЗаказа: {
    descriptionKey: 'models.i-i-s-proba1-клиенты.validations.наимЗаказа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расчетСчет: {
    descriptionKey: 'models.i-i-s-proba1-клиенты.validations.расчетСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-proba1-клиенты.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентыE', 'i-i-s-proba1-клиенты', {
    наимЗаказа: attr('Наим заказа', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    адресПоставщика: attr('Адрес поставщика', { index: 2 }),
    расчетСчет: attr('Расчет счет', { index: 3 })
  });

  modelClass.defineProjection('КлиентыL', 'i-i-s-proba1-клиенты', {
    наимЗаказа: attr('Наим заказа', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    адресПоставщика: attr('Адрес поставщика', { index: 2 }),
    расчетСчет: attr('Расчет счет', { index: 3 })
  });
};
