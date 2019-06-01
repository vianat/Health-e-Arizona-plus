import assert from 'assert';
// import {assert} from 'chai';
import sel from '../selectors/announcement';
import exp from '../expected/announcement';

describe('announcement', function () {

    describe('General', function () {

        it('width', function () {
            browser.url('/');
            assert.equal($(sel.main).getCSSProperty("width").value, exp.width[0]);
        });

        it('height', function () {
            assert.equal($(sel.main).getCSSProperty("height").value, exp.height);
        });

        it('margin', function () {
            assert.equal($(sel.div).getCSSProperty("margin").value, exp.margin);
        });

        it('padding', function () {
            assert.equal($(sel.div).getCSSProperty("padding").value, exp.padding);
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

    describe('Description', function () {

        it('bkgrd color', function () {
            assert.equal($(sel.div).getCSSProperty("background-color").parsed.hex, exp.color[1]);
        });

        it('color', function () {
            let Arr = $$(sel.descriptions);
            for (let el of Arr) {
                if (el.getCSSProperty('color').value !== exp.color[0]) return false;
            }
            return true;
        });

        it('font-family', function () {
            let Arr = $$(sel.descriptions);
            for (let el of Arr) {
                if (el.getCSSProperty('font-family').value !== exp.family[1]) return false;
            }
            return true;
        });

        it('font-size', function () {
            let Arr = $$(sel.descriptions);
            for (let el of Arr) {
                if (el.getCSSProperty('font-size').value !== exp.size[1]) return false;
            }
            return true;
        });

        it('font-weight', function () {
            let Arr = $$(sel.descriptions);
            for (let el of Arr) {
                if (el.getCSSProperty('font-weight').value !== exp.weight[1]) return false;
            }
            return true;
        });

    });

    describe('Link', function () {

        it('color', function () {
            assert.equal($(sel.link).getCSSProperty('color').parsed.hex, exp.color[2]);
        });

        it('font-family', function () {
            assert.equal($(sel.link).getCSSProperty('font-family').value, exp.family[1]);
        });

        it('font-size', function () {
            assert.equal($(sel.link).getCSSProperty('font-size').value, exp.size[1]);
        });

        it('font-weight', function () {
            assert.equal($(sel.link).getCSSProperty('font-weight').value, exp.weight[1]);
        });

        it('link url', function () {
            assert.equal($(sel.link).getAttribute("href"), exp.url);
        });

    });
});
