import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДог: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-proba1-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-proba1-организация', { inverse: null, async: false }),
  тЧИнфОЗаказе: DS.hasMany('i-i-s-proba1-т-ч-инф-о-зак', { inverse: 'докумПостав', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-proba1-докум-постав.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДог: {
    descriptionKey: 'models.i-i-s-proba1-докум-постав.validations.номерДог.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-proba1-докум-постав.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-proba1-докум-постав.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧИнфОЗаказе: {
    descriptionKey: 'models.i-i-s-proba1-докум-постав.validations.тЧИнфОЗаказе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумПоставE', 'i-i-s-proba1-докум-постав', {
    дата: attr('Дата', { index: 0 }),
    номерДог: attr('Номер дог', { index: 1 }),
    организация: belongsTo('i-i-s-proba1-организация', 'Организация', {
      наимОрганиз: attr('Наим организ', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наимОрганиз' }),
    клиенты: belongsTo('i-i-s-proba1-клиенты', 'Клиенты', {
      наимЗаказа: attr('Наим заказа', { index: 5, hidden: true }),
      адресПоставщика: attr('Адрес Поставки', { index: 6 }),
      телефон: attr('Телефон', { index: 7 })
    }, { index: 4, displayMemberPath: 'наимЗаказа' }),
    тЧИнфОЗаказе: hasMany('i-i-s-proba1-т-ч-инф-о-зак', 'Т ч инф о заказе', {
      товары: belongsTo('i-i-s-proba1-товары', 'Товары', {
        наимТовара: attr('Наим товара', { index: 1, hidden: true }),
        едИзм: attr('', { index: 3 }),
        масса: attr('', { index: 4 }),
        цена: attr('', { index: 5 })
      }, { index: 0, displayMemberPath: 'наимТовара' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ДокумПоставL', 'i-i-s-proba1-докум-постав', {
    дата: attr('Дата', { index: 0 }),
    номерДог: attr('Номер дог', { index: 1 }),
    организация: belongsTo('i-i-s-proba1-организация', 'Наим организ', {
      наимОрганиз: attr('Наим организ', { index: 2 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-proba1-клиенты', 'Наим заказа', {
      наимЗаказа: attr('Наим заказа', { index: 3 }),
      адресПоставщика: attr('Адрес поставки', { index: 4 }),
      телефон: attr('телефон', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
