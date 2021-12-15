import Route from '@ember/routing/route';

export default class BeerrequestRoute extends Route {
  model(params) {
    return {
      document: {
        id: params.document_id,
      },
    };
  }
}
