import assert from 'assert';
// import {assert} from 'chai';
import sel from '../selectors/other-option';
import exp from '../expected/other-option';

describe('Other option section', function () {

    describe('General', function () {

        it('main div width', function () {
            browser.url('/');
            assert.equal($(sel.main).getCSSProperty("width").value, exp.width);
        });

        it('cells width', function () {
            let cell1 = $(sel.cellOne).getCSSProperty("width").value;
            let cell2 = $(sel.cellTwo).getCSSProperty("width").value;
            let cell3 = $(sel.cellThree).getCSSProperty("width").value;
            if(cell1 === exp.cellsWidth && cell2 === exp.cellsWidth && cell3 === exp.cellsWidth) {
                assert.equal(true, true);
            }else assert.equal(false, true);
        });

        it('cell 1 img url', function () {
            assert.equal($(sel.cell_1_Img).getAttribute("src"), exp.cell_1_ImgUrl);
        });

        it('cell 2 img url', function () {
            assert.equal($(sel.cell_2_Img).getAttribute("src"), exp.cell_2_ImgUrl);
        });

        it('cell 3 img url', function () {
            assert.equal($(sel.cell_3_Img).getAttribute("src"), exp.cell_3_ImgUrl);
        });

        it('cell 1 img alt text', function () {
            assert.equal($(sel.cell_1_Img).getAttribute("alt"), exp.cell_1_Img_Alt);
        });

        // it('cell 2 img alt text', function () {
        //     assert.equal($(sel.cell_2_Img).getAttribute("alt"), exp.cell_2_Img_Alt);
        // });
        //
        // it('cell 3 img alt text', function () {
        //     assert.equal($(sel.cell_2_Img).getAttribute("alt"), exp.cell_3_Img_Alt);
        // });


    });

    describe('headers', function () {

        it('color', function () {
            let h2Arr = $$(sel.headers);
            for (let el of h2Arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.headersColor) return false;
            }
            return true;
        });

        it('font-family', function () {
            let h2Arr = $$(sel.headers);
            for (let el of h2Arr) {
                if (el.getCSSProperty('font-family').value !== exp.headersFamily) return false;
            }
            return true;
        });

        it('font-size', function () {
            let h2Arr = $$(sel.headers);
            for (let el of h2Arr) {
                if (el.getCSSProperty('font-size').value !== exp.headersSize) return false;
            }
            return true;
        });

        it('font-weight', function () {
            let h2Arr = $$(sel.headers);
            for (let el of h2Arr) {
                if (el.getCSSProperty('font-weight').value !== exp.headersWeight) return false;
            }
            return true;
        });

    });

    describe('Description', function () {

        it('color', function () {
            let h2Arr = $$(sel.description);
            for (let el of h2Arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.descColor) return false;
            }
            return true;
        });

        it('font-family', function () {
            let h2Arr = $$(sel.description);
            for (let el of h2Arr) {
                if (el.getCSSProperty('font-family').value !== exp.descFamily) return false;
            }
            return true;
        });

        it('font-size', function () {
            let h2Arr = $$(sel.description);
            for (let el of h2Arr) {
                if (el.getCSSProperty('font-size').value !== exp.descSize) return false;
            }
            return true;
        });

        it('font-weight', function () {
            let h2Arr = $$(sel.description);
            for (let el of h2Arr) {
                if (el.getCSSProperty('font-weight').value !== exp.descWeight) return false;
            }
            return true;
        });

    });

    describe('Link', function () {

        it('color', function () {
            let h2Arr = $$(sel.link);
            for (let el of h2Arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.linkColor) return false;
            }
            return true;
        });

        it('font-family', function () {
            let h2Arr = $$(sel.link);
            for (let el of h2Arr) {
                if (el.getCSSProperty('font-family').value !== exp.linkFamily) return false;
            }
            return true;
        });

        it('font-size', function () {
            let h2Arr = $$(sel.link);
            for (let el of h2Arr) {
                if (el.getCSSProperty('font-size').value !== exp.linkSize) return false;
            }
            return true;
        });

        it('font-weight', function () {
            let h2Arr = $$(sel.link);
            for (let el of h2Arr) {
                if (el.getCSSProperty('font-weight').value !== exp.linkWeight) return false;
            }
            return true;
        });

    });

});
