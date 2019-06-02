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

    describe('Links redirect', function () {

        it('link 1 redirect to correct URL', function () {
            $(sel.link1).click();
            let currentURL = browser.getUrl();
            if(currentURL === exp.link1){
                $(sel.logoNotMainPage).click();
                return true;
            }
            return false;
        });

        it('link 2 shows pop-up menu', function () {
            $(sel.link2).click();
            $(sel.linkPopUp).waitForDisplayed();
            if($(sel.linkPopUp).isDisplayed()){
                $(sel.PopUpClose).click();
                return true;
            }
            return false;
        });

        it('link 3 open new window', function () {
            if($(sel.link3).getAttribute('target') === exp.newWindow){
                return true;
            }
            return false;
        });

        it('link 4 shows pop-up menu', function () {
            $(sel.link4).click();
            $(sel.linkPopUp).waitForDisplayed();
            if($(sel.linkPopUp).isDisplayed()){
                $(sel.PopUpClose).click();
                return true;
            }
            return false;
        });

    });

    describe('Localization & content', function () {

        it('headers = eng text', function () {
            let arr = $$(sel.headers);
            let count = arr.length;
            for(let i = 0; i < count; i++){
                if(arr[i].getText() !== exp.headersTextEN[i]){
                    return false;
                }
            }
            return true;
        });

        it('headers = spain text', function () {
            $(sel.lnkSpain).click();
            let arr = $$(sel.headers);
            let count = arr.length;

            for(let i = 0; i < count; i++){
                if(arr[i].getText() !== exp.headersTextSP[i]){
                    $(sel.lnkEnglish).click();
                    return false;
                }
            }
            $(sel.lnkEnglish).click();
            return true;
        });

        it('description = eng text', function () {
            let arr = $$(sel.description);
            let count = arr.length;

            for(let i = 0; i < count; i++){
                if(arr[i].getText() !== exp.descriptionTextEN[i]){
                    return false;
                }
            }
            return true;
        });

        it('description = spain text', function () {
            let arr = $$(sel.description);
            let count = arr.length;

            for(let i = 0; i < count; i++){
                if(arr[i].getText() !== exp.descriptionTextSP[i]){
                    $(sel.lnkEnglish).click();
                    return false;
                }
            }
            $(sel.lnkEnglish).click();
            return true;
        });

    });

});
