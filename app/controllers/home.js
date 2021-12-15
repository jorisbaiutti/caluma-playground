import Controller from '@ember/controller';
import { decodeId } from '@projectcaluma/ember-core/helpers/decode-id';
import createDocumentMutation from 'caluma-playground/gql/mutations/create-document.graphql';
import { task } from 'ember-concurrency-decorators';
import { queryManager } from 'ember-apollo-client';
import { inject as service } from '@ember/service';

export default class HomeController extends Controller {
  @service router;
  @queryManager apollo;

  @task *createDocument() {
    // create new document
    const newDocument = yield this.apollo.mutate({
      mutation: createDocumentMutation,
      variables: { form: 'request-new-beer-type' }, // slug of form previously created
    });
    // redirect to beerrequest and add the new document id to the path
    this.router.transitionTo(
      'beerrequest',
      decodeId(newDocument.saveDocument.document.id)
    );
  }
}
