import assert from 'assert';
// import {assert} from 'chai';
import sel from '../selectors/question';
import exp from '../expected/question';

describe('Question section', function () {

    describe('General', function () {

        it('main div width', function () {
            browser.url('/');
            assert.equal($(sel.main).getCSSProperty("width").value, exp.width);
        });

        it('cell 1 width', function () {
            assert.equal($(sel.cellOne).getCSSProperty("width").value, exp.cellsWidth[0]);
        });

        it('cell 2 width', function () {
            assert.equal($(sel.cellTwo).getCSSProperty("width").value, exp.cellsWidth[1]);
        });

        it('cell 3 width', function () {
            assert.equal($(sel.cellThree).getCSSProperty("width").value, exp.cellsWidth[2]);
        });

    });

    describe('Description', function () {

        it('color', function () {
            let Arr = $$(sel.headers);
            Arr.push($(sel.headersSpan));
            for (let el of Arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.greyColor) return false;
            }
            return true;
        });

        it('font-family', function () {
            let Arr = $$(sel.headers);
            Arr.push($(sel.headersSpan));
            for (let el of Arr) {
                if (el.getCSSProperty('font-family').value !== exp.family) return false;
            }
            return true;
        });

        it('font-size', function () {
            let Arr = $$(sel.headers);
            Arr.push($(sel.headersSpan));
            for (let el of Arr) {
                if (el.getCSSProperty('font-size').value !== exp.size) return false;
            }
            return true;
        });

        it('font-weight', function () {
            let Arr = $$(sel.headers);
            Arr.push($(sel.headersSpan));
            for (let el of Arr) {
                if (el.getCSSProperty('font-weight').value !== exp.weight) return false;
            }
            return true;
        });

    });

    describe('Links', function () {

        it('color', function () {
            let Arr = $$(sel.link);
            for (let el of Arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.blueColor) return false;
            }
            return true;
        });

        it('font-family', function () {
            let Arr = $$(sel.link);
            for (let el of Arr) {
                if (el.getCSSProperty('font-family').value !== exp.family) return false;
            }
            return true;
        });

        it('font-size', function () {
            let Arr = $$(sel.link);
            for (let el of Arr) {
                if (el.getCSSProperty('font-size').value !== exp.size) return false;
            }
            return true;
        });

        it('font-weight', function () {
            let Arr = $$(sel.link);
            for (let el of Arr) {
                if (el.getCSSProperty('font-weight').value !== exp.weight) return false;
            }
            return true;
        });

    });

});
