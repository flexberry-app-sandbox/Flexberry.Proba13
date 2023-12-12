import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba1-клиенты', 'Unit | Model | i-i-s-proba1-клиенты', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba1-докум-постав',
    'model:i-i-s-proba1-клиенты',
    'model:i-i-s-proba1-организация',
    'model:i-i-s-proba1-пункт-погрузки',
    'model:i-i-s-proba1-список-барж',
    'model:i-i-s-proba1-список-контей',
    'model:i-i-s-proba1-т-ч-инф-о-зак',
    'model:i-i-s-proba1-товары',
    'model:i-i-s-proba1-формир-распр',
    'model:i-i-s-proba1-формир-рез-пос',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
