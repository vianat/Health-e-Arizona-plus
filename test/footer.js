import assert from 'assert';
// import {assert} from 'chai';
import sel from '../selectors/footer';
import exp from '../expected/footer';

describe('Footer', function () {

    describe('General', function () {

        it('bkgrd color', function () {
            browser.url('/');
            assert.equal($(sel.footer).getCSSProperty("background-color").parsed.hex, exp.bkgrdColor);
        });

        it('border color', function () {
            assert.equal($(sel.footer).getCSSProperty("border-top-color").parsed.hex, exp.borderColor);
        });

        it('border style', function () {
            assert.equal($(sel.footer).getCSSProperty("border-top-style").value, exp.borderStyle);
        });

        it('border width', function () {
            assert.equal($(sel.footer).getCSSProperty("border-top-width").value, exp.borderWidth);
        });

        it('logo alt', function () {
            assert.equal($(sel.footer).getAttribute('alt'), exp.altText);
        });

    });

    describe('Links', function () {

        it('font-color', function () {
            let arr = $$(sel.links);
            for (let el of arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.linksColor) return false;
            }
            return true;
        });

        it('font-size', function () {
            let arr = $$(sel.links);
            for (let el of arr) {
                if (el.getCSSProperty('font-size').value !== exp.linksSize) return false;
            }
            return true;
        });

        it('font-family', function () {
            let arr = $$(sel.links);
            for (let el of arr) {
                if (el.getCSSProperty('font-family').value !== exp.linksFamily) return false;
            }
            return true;
        });

        it('font-weight', function () {
            let arr = $$(sel.links);
            for (let el of arr) {
                if (el.getCSSProperty('font-weight').value !== exp.linksWeight) return false;
            }
            return true;
        });

    });

    describe('Copyrights', function () {

        it('font-color', function () {
            let arr = $$(sel.copyrights);
            for (let el of arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.linksColor) return false;
            }
            return true;
        });

        it('font-size', function () {
            let arr = $$(sel.copyrights);
            for (let el of arr) {
                if (el.getCSSProperty('font-size').value !== exp.copyrightsSize) return false;
            }
            return true;
        });

        it('font-family', function () {
            let arr = $$(sel.copyrights);
            for (let el of arr) {
                console.log(el.getCSSProperty('font-family').value);
                if (el.getCSSProperty('font-family').value !== exp.linksFamily) return false;
            }
            return true;
        });

        it('font-weight', function () {
            let arr = $$(sel.copyrights);
            for (let el of arr) {
                if (el.getCSSProperty('font-weight').value !== exp.linksWeight) return false;
            }
            return true;
        });

    });

});
