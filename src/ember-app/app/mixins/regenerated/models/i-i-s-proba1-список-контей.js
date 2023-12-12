import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наимКонтей: DS.attr('string'),
  номерКонтей: DS.attr('number')
});

export let ValidationRules = {
  наимКонтей: {
    descriptionKey: 'models.i-i-s-proba1-список-контей.validations.наимКонтей.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерКонтей: {
    descriptionKey: 'models.i-i-s-proba1-список-контей.validations.номерКонтей.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СписокКонтейE', 'i-i-s-proba1-список-контей', {
    наимКонтей: attr('Наим контей', { index: 0 }),
    номерКонтей: attr('Номер контей', { index: 1 })
  });

  modelClass.defineProjection('СписокКонтейL', 'i-i-s-proba1-список-контей', {
    наимКонтей: attr('Наим контей', { index: 0 }),
    номерКонтей: attr('Номер контей', { index: 1 })
  });
};
