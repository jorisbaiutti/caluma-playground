import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | beerrequest', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:beerrequest');
    assert.ok(route);
  });
});
