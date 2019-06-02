import {assert} from 'chai';
import sel from '../selectors/logo';
import exp from '../expected/logo';

describe('Logo section', function () {

    describe('General', function () {

        it('main div width', function () {
            browser.url('/');
            assert.equal($(sel.logo).getCSSProperty("width").value, exp.width);
        });

        it('main div height', function () {
            assert.equal($(sel.logo).getCSSProperty("height").value, exp.height);
        });

        it('margin', function () {
            assert.equal($(sel.logo).getCSSProperty("margin-right").value, exp.margin);
        });

        it('logo url', function () {
            assert.equal($(sel.logo).getAttribute('src'), exp.url);
        });

        it('logo alt', function () {
            assert.equal($(sel.logo).getAttribute('alt'), exp.altText);
        });

    });

});
