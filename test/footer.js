import {assert} from 'chai';
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

    describe('Links styles', function () {

        it('font-color', function () {
            let arr = $$(sel.links);
            for (let el of arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.linksColor) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);

        });

        it('font-size', function () {
            let arr = $$(sel.links);
            for (let el of arr) {
                if (el.getCSSProperty('font-size').value !== exp.linksSize) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-family', function () {
            let arr = $$(sel.links);
            for (let el of arr) {
                if (el.getCSSProperty('font-family').value !== exp.linksFamily) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-weight', function () {
            let arr = $$(sel.links);
            for (let el of arr) {
                if (el.getCSSProperty('font-weight').value !== exp.linksWeight) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

    });

    describe('Copyrights styles', function () {

        it('font-color', function () {
            let arr = $$(sel.copyrights);
            for (let el of arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.linksColor) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-size', function () {
            let arr = $$(sel.copyrights);
            for (let el of arr) {
                if (el.getCSSProperty('font-size').value !== exp.copyrightsSize) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-family', function () {
            let arr = $$(sel.copyrights);
            for (let el of arr) {
                console.log(el.getCSSProperty('font-family').value);
                if (el.getCSSProperty('font-family').value !== exp.linksFamily) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-weight', function () {
            let arr = $$(sel.copyrights);
            for (let el of arr) {
                if (el.getCSSProperty('font-weight').value !== exp.linksWeight) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

    });

    describe('Localization & content', function () {

        it('privacy link = eng/spain text', function () {

            let engContent = $(sel.privacy).getText();
            $(sel.lnkSpain).click();
            let spainContent = $(sel.privacySP).getText();
            if(engContent === exp.privacyEN && spainContent === exp.privacySP){
                $(sel.lnkEnglish).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('mission link = eng/spain text', function () {

            let engContent = $(sel.mission).getText();
            $(sel.lnkSpain).click();
            let spainContent = $(sel.mission).getText();
            if(engContent === exp.missionEN && spainContent === exp.missionSP){
                $(sel.lnkEnglish).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('nonDiscrimination link = eng/spain text', function () {

            let engContent = $(sel.nonDiscrimination).getText();
            $(sel.lnkSpain).click();
            let spainContent = $(sel.nonDiscrimination).getText();
            if(engContent === exp.nonDiscriminationEN && spainContent === exp.nonDiscriminationSP){
                $(sel.lnkEnglish).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('about link = eng/spain text', function () {

            let engContent = $(sel.about).getText();
            $(sel.lnkSpain).click();
            let spainContent = $(sel.about).getText();
            if(engContent === exp.aboutEN && spainContent === exp.aboutSP){
                $(sel.lnkEnglish).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('faq link = eng/spain text', function () {

            let engContent = $(sel.faq).getText();
            $(sel.lnkSpain).click();
            let spainContent = $(sel.faq).getText();
            if(engContent === exp.faqEN && spainContent === exp.faqEN){
                $(sel.lnkEnglish).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('copyRight = eng text', function () {
            assert.equal($(sel.copyrightsText).getText(), exp.copyrightsTextEn);
        });
        it('copyRight = eng text', function () {
            $(sel.lnkSpain).click();
            assert.equal($(sel.copyrightsText).getText(), exp.copyrightsTextSp);
        });

    });

});
