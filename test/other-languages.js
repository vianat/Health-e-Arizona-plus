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
            assert.equal($(sel.main).getCSSProperty("height").value, exp.height[0]);
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

    describe('Links styles', function () {

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

    describe('Description field style', function () {

        it('width', function () {
            assert.equal($(sel.langDescription).getCSSProperty('width').value, exp.width[2]);
        });

        it('height', function () {
            assert.equal($(sel.langDescription).getCSSProperty('height').value, exp.height[1]);
        });

        it('bkgrd color', function () {
            assert.equal($(sel.langDescription).getCSSProperty('background-color').parsed.hex, exp.color[2]);
        });

        it('color', function () {
            assert.equal($(sel.langDescription).getCSSProperty('color').parsed.hex, exp.color[3]);
        });

        it('font-family', function () {
            assert.equal($(sel.langDescription).getCSSProperty('font-family').value, exp.family[1]);
        });

        it('font-size', function () {
            assert.equal($(sel.langDescription).getCSSProperty('font-size').value, exp.size[1]);
        });

        it('font-weight', function () {
            assert.equal($(sel.langDescription).getCSSProperty('font-weight').value, exp.weight[1]);
        });

    });

    describe('Localization & content', function () {

        it('header = eng/spain text', function () {
            let engContent = $(sel.header).getText();
            $(sel.lnkSpain).click();
            let spainContent = $(sel.header).getText();
            if(engContent === exp.headerTextEN && spainContent === exp.headerTextSP){
                $(sel.lnkEnglish).click();
                return true;
            }
            else return false;
        });

        it('spain link shows description', function () {
            $(sel.spain).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.spain);
        });

        it('arabic link shows description', function () {
            $(sel.arabic).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.arabic);
        });

        it('german link shows description', function () {
            $(sel.german).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.german);
        });

        it('syriac link shows description', function () {
            $(sel.syriac).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.syriac);
        });

        it('navajo link shows description', function () {
            $(sel.navajo).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.navajo);
        });

        it('tagalog link shows description', function () {
            $(sel.tagalog).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.tagalog);
        });

        it('russian link shows description', function () {
            $(sel.russian).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.russian);
        });

        it('serbian link shows description', function () {
            $(sel.serbian).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.serbian);
        });

        it('chinese link shows description', function () {
            $(sel.chinese).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.chinese);
        });

        it('korean link shows description', function () {
            $(sel.korean).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.korean);
        });

        it('japanese link shows description', function () {
            $(sel.japanese).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.japanese);
        });

        it('thai link shows description', function () {
            $(sel.thai).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.thai);
        });

        it('vietnamese link shows description', function () {
            $(sel.vietnamese).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.vietnamese);
        });

        it('french link shows description', function () {
            $(sel.french).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.french);
        });

        it('persian link shows description', function () {
            $(sel.persian).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.persian);
        });

        it('italian link shows description', function () {
            $(sel.italian).click();
            $(sel.langDescription).waitForDisplayed();
            assert.equal($(sel.langDescription).getText(), exp.italian);
        });

    });

});
