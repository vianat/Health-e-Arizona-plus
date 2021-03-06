import {assert} from 'chai';
import sel from '../selectors/header';
import exp from '../expected/header';

describe('Header', function () {

    describe('Client', function () {

        it('Get title', function () {
            browser.url('/');
            let title = browser.getTitle();
            browser.pause(500);
            assert.equal(title, 'Health-e-Arizona > Home');
        })

    });

    describe('General', function () {

        it('header width', function () {
            let headWidth = $(sel.header).getCSSProperty("width").value;
            assert.equal(headWidth, exp.headerWidth);
        });

        it('header logo img url', function () {
            let headerLogoImg = $(sel.headerImg).getAttribute("src");
            assert.equal(headerLogoImg, exp.headerLogoImg);
        });

        it('header logo widht', function () {

            let headLogo = $(sel.headerImg).getCSSProperty("width").value;
            assert.equal(headLogo, exp.headerImgWidth);
        });

        it('header logo heigth', function () {

            let headLogo = $(sel.headerImg).getCSSProperty("height").value;
            assert.equal(headLogo, exp.headerImgHeight);
        });

        it('header bkgrd img url', function () {

            let headerBkgrdImg = $(sel.header).getCSSProperty("background-image").value;
            assert.equal(headerBkgrdImg, exp.headerBcgrdImg);
        });

        it('body bkgrd color', function () {

            let color = $(sel.body).getCSSProperty("background-color").parsed.hex;
            assert.equal(color, exp.bkgrd);
        });

    });

    describe('Links style', function () {

        it('color', function () {

            let linksArr = $$(sel.headerLinks);

            for (let element of linksArr){
                if(element.getCSSProperty('color').parsed.hex !== exp.white){
                    assert.equal(false, true);
                }
                assert.equal(true, true)
            }
        });

        it('font-family', function () {

            let linksArr = $$(sel.headerLinks);

            for (let element of linksArr){
                if(element.getCSSProperty('font-family').value !== exp.fontFamily){
                    assert.equal(false, true);
                }
                assert.equal(true, true)
            }
        });

        it('font-size', function () {

            let linksArr = $$(sel.headerLinks);

            for (let element of linksArr){
                if(element.getCSSProperty('font-size').value !== exp.fontSize){
                    assert.equal(false, true);
                }
                assert.equal(true, true)
            }
        });

        it('font-weight', function () {

            let linksArr = $$(sel.headerLinks);

            for (let element of linksArr){
                if(element.getCSSProperty('font-weight').value !== exp.fontWeight){
                    assert.equal(false, true);
                }
                assert.equal(true, true)
            }
        });

    });

    describe('Links redirect', function () {

        it('logo redirect to main page', function () {
            $(sel.getStarted).click();
            $(sel.logoNotMainPage).click();
            let url = browser.getUrl();
            if(url === exp.logoRedirectUrl) return true;
            return false;
        });

        it('create acc lnk redirect to correct url', function () {
            $(sel.createAcc).click();
            let url = browser.getUrl();
            $(sel.logoNotMainPage).click();
            if(url === exp.createAcc){
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('return lnk shows pop-up menu', function () {
            $(sel.return).click();
            $(sel.return).waitForDisplayed();
            if($(sel.popup).isDisplayed()){
                $(sel.return).click();
            }else {
                assert.equal(false, true);
            }
        });

        it('help lnk shows pop-up menu', function () {
            $(sel.help).click();
            $(sel.helpPopUp).waitForDisplayed();
            if($(sel.helpPopUp).isDisplayed()){
                $(sel.helpClose).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('faq lnk shows pop-up menu', function () {
            $(sel.faq).click();
            $(sel.popUp).waitForDisplayed();
            if($(sel.popUp).isDisplayed()){
                $(sel.popUpClose).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('eng lnk switch lang', function () {
            $(sel.lnkEnglish).click();
            let langAfter = $(sel.mainHeader).getText();

            if(langAfter === exp.engMainHeader){
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('spain lnk switch lang', function () {
            $(sel.lnkSpain).click();
            let langAfter = $(sel.mainHeader).getText();

            if(langAfter === exp.spainMainHeader){
                $(sel.lnkEnglish).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

    });

    describe('Localization & content', function () {

        it('lnk create = eng/spain text', function () {

            let engContent = $(sel.createAcc).getText();
            $(sel.lnkSpain).click();
            let spainContent = $(sel.createAcc).getText();
            if(engContent === exp.engLinksText[0] && spainContent === exp.spainLinksText[0]){
                $(sel.lnkEnglish).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('lnk return = eng/spain text', function () {

            let engContent = $(sel.return).getText();
            $(sel.lnkSpain).click();
            let spainContent = $(sel.return).getText();
            if(engContent === exp.engLinksText[1] && spainContent === exp.spainLinksText[1]){
                $(sel.lnkEnglish).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('lnk help = eng/spain text', function () {

            let engContent = $(sel.help).getText();
            $(sel.lnkSpain).click();
            let spainContent = $(sel.help).getText();
            if(engContent === exp.engLinksText[2] && spainContent === exp.spainLinksText[2]){
                $(sel.lnkEnglish).click();
                return true;
            }
            else return false;
        });

        it('lnk faq = eng/spain text', function () {

            let engContent = $(sel.faq).getText();
            $(sel.lnkSpain).click();
            let spainContent = $(sel.faq).getText();
            if(engContent === exp.engLinksText[3] && spainContent === exp.spainLinksText[3]){
                $(sel.lnkEnglish).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('lnk english = eng/spain text', function () {

            let engContent = $(sel.lnkEnglish).getText();
            $(sel.lnkSpain).click();
            let spainContent = $(sel.lnkEnglish).getText();
            if(engContent === exp.engLinksText[4] && spainContent === exp.spainLinksText[4]){
                $(sel.lnkEnglish).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('lnk spain = eng/spain text', function () {

            let engContent = $(sel.lnkSpain).getText();
            $(sel.lnkSpain).click();
            let spainContent = $(sel.lnkSpain).getText();
            if(engContent === exp.engLinksText[5] && spainContent === exp.spainLinksText[5]){
                $(sel.lnkEnglish).click();
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

    });

});
