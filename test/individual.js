import assert from 'assert';
// import {assert} from 'chai';
import sel from '../selectors/individual';
import exp from '../expected/individual';

describe('Individual & family section', function () {

    describe('General', function () {

        it('main width', function () {
            browser.url('/');
            assert.equal($(sel.main).getCSSProperty("width").value, exp.width);
        });

        it('left cell width', function () {
            assert.equal($(sel.leftCell).getAttribute("width"), exp.leftCellWidth);
        });

        it('right cell width', function () {
            assert.equal($(sel.rightCell).getAttribute("width"), exp.rightCellWidth);
        });

        it('left cell img url', function () {
            assert.equal($(sel.img).getAttribute("src"), exp.leftCellImg);
        });

        it('left cell img url alt text', function () {
            assert.equal($(sel.img).getAttribute("alt"), exp.leftCellImgAlt);
        });

    });

    describe('Title', function () {

        it('color', function () {
            assert.equal($(sel.title).getCSSProperty('color').parsed.hex, exp.titleColor);
        });

        it('font-family', function () {
            assert.equal($(sel.title).getCSSProperty('font-family').value, exp.titleFamily);
        });

        it('font-size', function () {
            assert.equal($(sel.title).getCSSProperty('font-size').value, exp.titleSize);
        });

        it('font-weight', function () {
            assert.equal($(sel.title).getCSSProperty('font-weight').value, exp.titleWeight);
        });

    });

    describe('Description', function () {

        it('color', function () {
            assert.equal($(sel.text).getCSSProperty('color').parsed.hex, exp.textColor);
        });

        it('font-family', function () {
            assert.equal($(sel.text).getCSSProperty('font-family').value, exp.textFamily);
        });

        it('font-size', function () {
            assert.equal($(sel.text).getCSSProperty('font-size').value, exp.textSize);
        });

        it('font-weight', function () {
            assert.equal($(sel.text).getCSSProperty('font-weight').value, exp.textWeight);
        });

    });

    describe('Button get started', function () {

        it('img eng url', function () {
            assert.equal($(sel.btnGetStart).getAttribute("src"), exp.btnEngImg);
        });

        it('img spain url', function () {
            $(sel.lnkSpain).click();
            if($(sel.btnGetStartES).getAttribute("src") === exp.btnSpainImg){
                $(sel.lnkEnglish).click();
                return true;
            }
            else return false;
        });

        it('img url alt text', function () {
            assert.equal($(sel.btnGetStart).getAttribute("alt"), exp.btnImgAlt);
        });

        it('redirect url', function () {
            $(sel.btnGetStart).click();
            $(sel.logoNotMainPage).click();
            let url = browser.getUrl();
            if(url === exp.btnEngUrl) return true;
            return false;
        });

    });

    describe('Localization & content', function () {

        it('header = eng/spain text', function () {
            let engContent = $(sel.title).getText();
            $(sel.lnkSpain).click();
            let spainContent = $(sel.title).getText();
            if(engContent === exp.engText[0] && spainContent === exp.spainText[0]){
                $(sel.lnkEnglish).click();
                return true;
            }
            else return false;
        });

        it('description = eng/spain text', function () {
            let engContent = $(sel.text).getText();
            $(sel.lnkSpain).click();
            let spainContent = $(sel.text).getText();
            if(engContent === exp.engText[1] && spainContent === exp.spainText[1]){
                $(sel.lnkEnglish).click();
                return true;
            }
            else return false;
        });

    });

});
