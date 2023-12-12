import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proba1.caption'),
          title: i18n.t('forms.application.sitemap.proba1.title'),
          children: [{
            link: 'i-i-s-proba1-формир-распр-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-формир-распр-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-формир-распр-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-proba1-клиенты-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-клиенты-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-proba1-список-контей-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-список-контей-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-список-контей-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-proba1-товары-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-товары-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-proba1-формир-рез-пос-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-формир-рез-пос-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-формир-рез-пос-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-proba1-докум-постав-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-докум-постав-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-докум-постав-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-proba1-пункт-погрузки-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-пункт-погрузки-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-пункт-погрузки-l.title'),
            children: null
          }, {
            link: 'i-i-s-proba1-список-барж-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-список-барж-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-список-барж-l.title'),
            children: null
          }, {
            link: 'i-i-s-proba1-организация-l',
            caption: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.proba1.i-i-s-proba1-организация-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})