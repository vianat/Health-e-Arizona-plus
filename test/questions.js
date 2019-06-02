import {assert} from 'chai';
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
                if (el.getCSSProperty('color').parsed.hex !== exp.greyColor){
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-family', function () {
            let Arr = $$(sel.headers);
            Arr.push($(sel.headersSpan));
            for (let el of Arr) {
                if (el.getCSSProperty('font-family').value !== exp.family){
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-size', function () {
            let Arr = $$(sel.headers);
            Arr.push($(sel.headersSpan));
            for (let el of Arr) {
                if (el.getCSSProperty('font-size').value !== exp.size){
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-weight', function () {
            let Arr = $$(sel.headers);
            Arr.push($(sel.headersSpan));
            for (let el of Arr) {
                if (el.getCSSProperty('font-weight').value !== exp.weight){
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

    });

    describe('Links', function () {

        it('color', function () {
            let Arr = $$(sel.link);
            for (let el of Arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.blueColor){
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-family', function () {
            let Arr = $$(sel.link);
            for (let el of Arr) {
                if (el.getCSSProperty('font-family').value !== exp.family){
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-size', function () {
            let Arr = $$(sel.link);
            for (let el of Arr) {
                if (el.getCSSProperty('font-size').value !== exp.size){
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-weight', function () {
            let Arr = $$(sel.link);
            for (let el of Arr) {
                if (el.getCSSProperty('font-weight').value !== exp.weight){
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

    });

    describe('Links redirect', function () {

        it('link 1 redirect to correct URL', function () {
            $(sel.link1).click();
            let currentURL = browser.getUrl();
            if(currentURL === exp.link1){
                $(sel.logoNotMainPage).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('link 2 shows pop-up menu', function () {
            $(sel.link2).click();
            $(sel.linkPopUp).waitForDisplayed();
            if($(sel.linkPopUp).isDisplayed()){
                $(sel.PopUpClose).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('link 3 open new window', function () {
            if($(sel.link3).getAttribute('target') === exp.newWindow){
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('link 4 shows pop-up menu', function () {
            $(sel.link4).click();
            $(sel.linkPopUp).waitForDisplayed();
            if($(sel.linkPopUp).isDisplayed()){
                $(sel.PopUpClose).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

    });

    describe('Localization & content', function () {

        it('headers = eng text', function () {
            let arr = $$(sel.headers);
            let count = arr.length;
            for(let i = 0; i < count; i++){
                if(arr[i].getText() !== exp.headersTextEN[i]){
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('headers = spain text', function () {
            $(sel.lnkSpain).click();
            let arr = $$(sel.headers);
            let count = arr.length;

            for(let i = 0; i < count; i++){
                if(arr[i].getText() !== exp.headersTextSP[i]){
                    $(sel.lnkEnglish).click();
                    assert.equal(false, true);
                }
            }
            $(sel.lnkEnglish).click();
            assert.equal(true, true);
        });

        it('description = eng text', function () {
            assert.equal($(sel.description).getText(), exp.descriptionTextEN);
        });

        it('description = spain text', function () {
            $(sel.lnkSpain).click();
            let el = $(sel.description).getText();
            $(sel.lnkEnglish).click();
            assert.equal(el, exp.descriptionTextSP);
        });

    });

});
