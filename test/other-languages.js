import assert from 'assert';
// import {assert} from 'chai';
import sel from '../selectors/other-languages';
import exp from '../expected/other-languages';

describe('Other languages', function () {

    describe('General', function () {

        it('main div width', function () {
            browser.url('/');
            assert.equal($(sel.main).getCSSProperty("width").value, exp.width[0]);
        });

        it('main div height', function () {
            assert.equal($(sel.main).getCSSProperty("height").value, exp.height);
        });

        it('margin', function () {
            assert.equal($(sel.div).getCSSProperty("margin").value, exp.margin);
        });

        it('cells width', function () {
            let arr = $$(sel.row);
            for (let el of arr) {
                if (el.getCSSProperty('width').value !== exp.width[1]) return false;
            }
            return true;
        });

    });

    describe('Header', function () {

        it('color', function () {
            assert.equal($(sel.header).getCSSProperty('color').parsed.hex, exp.color[0]);
        });

        it('font-family', function () {
            assert.equal($(sel.header).getCSSProperty('font-family').value, exp.family[0]);
        });

        it('font-size', function () {
            assert.equal($(sel.header).getCSSProperty('font-size').value, exp.size[0]);
        });

        it('font-weight', function () {
            assert.equal($(sel.header).getCSSProperty('font-weight').value, exp.weight[0]);
        });

    });

    describe('Links', function () {

        it('color', function () {
            let arr = $$(sel.links);
            for (let el of arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.color[1]) return false;
            }
            return true;
        });

        it('font-family', function () {
            let arr = $$(sel.links);
            for (let el of arr) {
                if (el.getCSSProperty('font-family').value !== exp.family[1]) return false;
            }
            return true;
        });

        it('font-size', function () {
            let arr = $$(sel.links);
            for (let el of arr) {
                if (el.getCSSProperty('font-size').value !== exp.size[1]) return false;
            }
            return true;
        });

        it('font-weight', function () {
            let arr = $$(sel.links);
            for (let el of arr) {
                if (el.getCSSProperty('font-weight').value !== exp.weight[1]) return false;
            }
            return true;
        });

    });

});
