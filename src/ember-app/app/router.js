import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proba1-докум-постав-l');
  this.route('i-i-s-proba1-докум-постав-e',
  { path: 'i-i-s-proba1-докум-постав-e/:id' });
  this.route('i-i-s-proba1-докум-постав-e.new',
  { path: 'i-i-s-proba1-докум-постав-e/new' });
  this.route('i-i-s-proba1-клиенты-l');
  this.route('i-i-s-proba1-клиенты-e',
  { path: 'i-i-s-proba1-клиенты-e/:id' });
  this.route('i-i-s-proba1-клиенты-e.new',
  { path: 'i-i-s-proba1-клиенты-e/new' });
  this.route('i-i-s-proba1-организация-l');
  this.route('i-i-s-proba1-организация-e',
  { path: 'i-i-s-proba1-организация-e/:id' });
  this.route('i-i-s-proba1-организация-e.new',
  { path: 'i-i-s-proba1-организация-e/new' });
  this.route('i-i-s-proba1-пункт-погрузки-l');
  this.route('i-i-s-proba1-пункт-погрузки-e',
  { path: 'i-i-s-proba1-пункт-погрузки-e/:id' });
  this.route('i-i-s-proba1-пункт-погрузки-e.new',
  { path: 'i-i-s-proba1-пункт-погрузки-e/new' });
  this.route('i-i-s-proba1-список-барж-l');
  this.route('i-i-s-proba1-список-барж-e',
  { path: 'i-i-s-proba1-список-барж-e/:id' });
  this.route('i-i-s-proba1-список-барж-e.new',
  { path: 'i-i-s-proba1-список-барж-e/new' });
  this.route('i-i-s-proba1-список-контей-l');
  this.route('i-i-s-proba1-список-контей-e',
  { path: 'i-i-s-proba1-список-контей-e/:id' });
  this.route('i-i-s-proba1-список-контей-e.new',
  { path: 'i-i-s-proba1-список-контей-e/new' });
  this.route('i-i-s-proba1-товары-l');
  this.route('i-i-s-proba1-товары-e',
  { path: 'i-i-s-proba1-товары-e/:id' });
  this.route('i-i-s-proba1-товары-e.new',
  { path: 'i-i-s-proba1-товары-e/new' });
  this.route('i-i-s-proba1-формир-распр-l');
  this.route('i-i-s-proba1-формир-распр-e',
  { path: 'i-i-s-proba1-формир-распр-e/:id' });
  this.route('i-i-s-proba1-формир-распр-e.new',
  { path: 'i-i-s-proba1-формир-распр-e/new' });
  this.route('i-i-s-proba1-формир-рез-пос-l');
  this.route('i-i-s-proba1-формир-рез-пос-e',
  { path: 'i-i-s-proba1-формир-рез-пос-e/:id' });
  this.route('i-i-s-proba1-формир-рез-пос-e.new',
  { path: 'i-i-s-proba1-формир-рез-пос-e/new' });
});

export default Router;
