import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba1-товары', 'Unit | Serializer | i-i-s-proba1-товары', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-proba1-товары',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-proba1-ед-изм',
    'transform:i-i-s-proba1-статус-заказа',
    'transform:i-i-s-proba1-удовл-кл',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
