import EmberRouter from '@ember/routing/router';
import config from 'caluma-playground/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.mount('@projectcaluma/ember-form-builder', {
    as: 'form-builder',
    path: '/form-builder',
  });
  this.route('home', { path: '/' });
  this.route('beerrequest', { path: '/beerrequest/:document_id' });
});
