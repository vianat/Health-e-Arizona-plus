import assert from 'assert';
// import {assert} from 'chai';
import sel from '../selectors/warning';
import exp from '../expected/warning';

describe('Warning', function () {

    describe('General', function () {

        it('main div width', function () {
            browser.url('/');
            assert.equal($(sel.div).getCSSProperty("width").value, exp.width[0]);
        });

        it('main div height', function () {
            assert.equal($(sel.div).getCSSProperty("height").value, exp.height);
        });

        it('margin', function () {
            assert.equal($(sel.div).getCSSProperty("margin").value, exp.margin);
        });

        it('bcgrd color', function () {
            assert.equal($(sel.div).getCSSProperty("background-color").parsed.hex, exp.color[0]);
        });

        it('color', function () {
            assert.equal($(sel.div).getCSSProperty("color").parsed.hex, exp.color[1]);
        });

        it('font-family', function () {
            assert.equal($(sel.div).getCSSProperty("font-family").value, exp.family[1]);
        });

        it('font-size', function () {
            assert.equal($(sel.div).getCSSProperty("font-size").value, exp.size[2]);
        });

        it('font-weight', function () {
            assert.equal($(sel.div).getCSSProperty("font-weight").value, exp.weight[1]);
        });

        it('font-style', function () {
            assert.equal($(sel.text).getCSSProperty("font-style").value, exp.style);
        });

    });

});
