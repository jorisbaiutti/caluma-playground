import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'caluma-playground/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
  constructor() {
    super(...arguments);

    this.engines = {
      '@projectcaluma/ember-form-builder': {
        dependencies: {
          services: [
            'apollo', // ember-apollo-client for graphql
            'notification', // ember-uikit for notifications
            'router', // ember router for navigation
            'intl', // ember-intl for i18n
            'caluma-options', // service to configure ember-caluma
            'validator', // service for generic regex validation
          ],
        },
      },
    };
  }
}

loadInitializers(App, config.modulePrefix);
