import { test } from 'qunit';
import moduleForAcceptance from 'bayzat/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list houses');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/houses');
  });
});

test('should redirect to houses route', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/houses', 'should redirect automatically');
  });
});

test('should list houses.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 10, 'should see 10 listings');
  });
});

test('should link to information about the company.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});
