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

        it('cell 2 img alt text', function () {
            assert.equal($(sel.cell_2_Img).getAttribute("alt"), exp.cell_2_Img_AltUP);
        });

        it('cell 3 img alt text', function () {
            assert.equal($(sel.cell_3_Img).getAttribute("alt"), exp.cell_3_Img_AltUP);
        });

        it('cell 1 changes banner', function () {
            $(sel.cell_1_Img).click();
            if($(sel.banner).getAttribute("src") === $(sel.cell_1_Img).getAttribute("src")) return true;
            return false;
        });

        it('cell 2 changes banner', function () {
            $(sel.cell_2_Img).click();
            if($(sel.banner).getAttribute("src") === $(sel.cell_2_Img).getAttribute("src")) return true;
            return false;
        });

        it('cell 3 changes banner', function () {
            $(sel.cell_3_Img).click();
            if($(sel.banner).getAttribute("src") === $(sel.cell_3_Img).getAttribute("src")) return true;
            return false;
        });

        it('cell 1 changes header', function () {
            $(sel.cell_1_Img).click();
            if($(sel.header).getText() === exp.cell_1_Img_Alt.toUpperCase()) return true;
            return false;
        });

        it('cell 2 changes header', function () {
            $(sel.cell_2_Img).click();
            if($(sel.header).getText() === exp.cell_2_Img_Alt.toUpperCase()) return true;
            return false;
        });

        it('cell 3 changes header', function () {
            $(sel.cell_3_Img).click();
            if($(sel.header).getText() === exp.cell_3_Img_Alt.toUpperCase()) return true;
            return false;
        });

        it('cell 1 changes text', function () {
            $(sel.cell_1_Img).click();
            if($(sel.text).getText() === exp.cell_1_Img_Alt) return true;
            return false;
        });

        it('cell 2 changes text', function () {
            $(sel.cell_2_Img).click();
            if($(sel.text).getText() === exp.cell_2_Img_Alt) return true;
            return false;
        });

        it('cell 3 changes text', function () {
            $(sel.cell_3_Img).click();
            if($(sel.text).getText() === exp.cell_3_Img_Alt) return true;
            return false;
        });

    });

    describe('headers style', function () {

        it('color', function () {
            let arr = $$(sel.headers);
            for (let el of arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.headersColor) return false;
            }
            return true;
        });

        it('font-family', function () {
            let arr = $$(sel.headers);
            for (let el of arr) {
                if (el.getCSSProperty('font-family').value !== exp.headersFamily) return false;
            }
            return true;
        });

        it('font-size', function () {
            let arr = $$(sel.headers);
            for (let el of arr) {
                if (el.getCSSProperty('font-size').value !== exp.headersSize) return false;
            }
            return true;
        });

        it('font-weight', function () {
            let arr = $$(sel.headers);
            for (let el of arr) {
                if (el.getCSSProperty('font-weight').value !== exp.headersWeight) return false;
            }
            return true;
        });

    });

    describe('Description style', function () {

        it('color', function () {
            let arr = $$(sel.description);
            for (let el of arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.descColor) return false;
            }
            return true;
        });

        it('font-family', function () {
            let arr = $$(sel.description);
            for (let el of arr) {
                if (el.getCSSProperty('font-family').value !== exp.descFamily) return false;
            }
            return true;
        });

        it('font-size', function () {
            let arr = $$(sel.description);
            for (let el of arr) {
                if (el.getCSSProperty('font-size').value !== exp.descSize) return false;
            }
            return true;
        });

        it('font-weight', function () {
            let arr = $$(sel.description);
            for (let el of arr) {
                if (el.getCSSProperty('font-weight').value !== exp.descWeight) return false;
            }
            return true;
        });

    });

    describe('Link styles', function () {

        it('color', function () {
            let arr = $$(sel.link);
            for (let el of arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.linkColor) return false;
            }
            return true;
        });

        it('font-family', function () {
            let arr = $$(sel.link);
            for (let el of arr) {
                if (el.getCSSProperty('font-family').value !== exp.linkFamily) return false;
            }
            return true;
        });

        it('font-size', function () {
            let arr = $$(sel.link);
            for (let el of arr) {
                if (el.getCSSProperty('font-size').value !== exp.linkSize) return false;
            }
            return true;
        });

        it('font-weight', function () {
            let arr = $$(sel.link);
            for (let el of arr) {
                if (el.getCSSProperty('font-weight').value !== exp.linkWeight) return false;
            }
            return true;
        });

    });

    describe('Links redirect', function () {

        it('link "Started" redirect to correct URL', function () {
            $(sel.linkStarted).click();
            let currentURL = browser.getUrl();
            if(currentURL === exp.linkStartedURL){
                $(sel.logoNotMainPage).click();
                return true;
            }
            return false;
        });

        it('link "State" redirect to correct URL', function () {
            $(sel.linkState).click();
            let currentURL = browser.getUrl();
            if(currentURL === exp.linkStateURL){
                $(sel.logoNotMainPage).click();
                return true;
            }
            return false;
        });

        it('link "Community" redirect to correct URL', function () {
            $(sel.linkCommunity).click();
            let currentURL = browser.getUrl();
            if(currentURL === exp.linkCommunityURL){
                $(sel.logoNotMainPage).click();
                return true;
            }
            return false;
        });

    });

    describe('Localization & content', function () {

        it('links = eng text', function () {
            let arr = $$(sel.link);
            for (let element of arr){
                if(element.getText() !== exp.linksText){
                    return false;
                }
                return true;
            }
        });

        it('links = spain text', function () {
            $(sel.lnkSpain).click();
            let arr = $$(sel.link);
            for (let element of arr){
                if(element.getText() !== exp.linksTextES){
                    $(sel.lnkEnglish).click();
                    return false;
                }
                $(sel.lnkEnglish).click();
                return true;
            }
        });

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
