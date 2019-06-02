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
            if($(sel.banner).getAttribute("src") === exp.bannerUrlAfterImg1Click) {
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }

        });

        it('cell 2 changes banner', function () {
            $(sel.cell_2_Img).click();
            if($(sel.banner).getAttribute("src") === exp.bannerUrlAfterImg2Click) {
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('cell 3 changes banner', function () {
            $(sel.cell_3_Img).click();
            if($(sel.banner).getAttribute("src") === exp.bannerUrlAfterImg3Click) {
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('cell 1 changes header', function () {
            $(sel.cell_1_Img).click();
            if($(sel.header).getText() === exp.cell_1_Img_Alt.toUpperCase()) {
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('cell 2 changes header', function () {
            $(sel.cell_2_Img).click();
            if($(sel.header).getText() === exp.cell_2_Img_Alt.toUpperCase()) {
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('cell 3 changes header', function () {
            $(sel.cell_3_Img).click();
            if($(sel.header).getText() === exp.cell_3_Img_Alt.toUpperCase()) {
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('cell 1 changes text in EN version', function () {
            $(sel.cell_1_Img).click();
            if($(sel.text).getText() === exp.descriptionTextEN[0]) {
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('cell 2 changes text in EN version', function () {
            $(sel.cell_2_Img).click();
            if($(sel.text).getText() === exp.descriptionTextEN[1]) {
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('cell 3 changes text in EN version', function () {
            $(sel.cell_3_Img).click();
            if($(sel.text).getText() === exp.descriptionTextEN[2]) {
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('cell 1 changes text in SP version', function () {
            $(sel.lnkSpain).click();
            $(sel.cell_1_Img).click();
            if($(sel.text).getText() === exp.descriptionTextSP[0]) {
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('cell 2 changes text in SP version', function () {
            $(sel.cell_2_Img).click();
            if($(sel.text).getText() === exp.descriptionTextSP[1]) {
                assert.equal(true, true);
            }else {
                assert.equal(false, true);
            }
        });

        it('cell 3 changes text in SP version', function () {
            $(sel.cell_3_Img).click();
            if($(sel.text).getText() === exp.descriptionTextSP[3]) {
                $(sel.lnkEnglish).click();
                assert.equal(true, true);
            }else {
                $(sel.lnkEnglish).click();
                assert.equal(false, true);
            }
        });

    });

    describe('headers style', function () {

        it('color', function () {
            let arr = $$(sel.headers);
            for (let el of arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.headersColor) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-family', function () {
            let arr = $$(sel.headers);
            for (let el of arr) {
                if (el.getCSSProperty('font-family').value !== exp.headersFamily) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-size', function () {
            let arr = $$(sel.headers);
            for (let el of arr) {
                if (el.getCSSProperty('font-size').value !== exp.headersSize) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-weight', function () {
            let arr = $$(sel.headers);
            for (let el of arr) {
                if (el.getCSSProperty('font-weight').value !== exp.headersWeight) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

    });

    describe('Description style', function () {

        it('color', function () {
            let arr = $$(sel.description);
            for (let el of arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.descColor) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-family', function () {
            let arr = $$(sel.description);
            for (let el of arr) {
                if (el.getCSSProperty('font-family').value !== exp.descFamily) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-size', function () {
            let arr = $$(sel.description);
            for (let el of arr) {
                if (el.getCSSProperty('font-size').value !== exp.descSize) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-weight', function () {
            let arr = $$(sel.description);
            for (let el of arr) {
                if (el.getCSSProperty('font-weight').value !== exp.descWeight) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

    });

    describe('Link styles', function () {

        it('color', function () {
            let arr = $$(sel.link);
            for (let el of arr) {
                if (el.getCSSProperty('color').parsed.hex !== exp.linkColor) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-family', function () {
            let arr = $$(sel.link);
            for (let el of arr) {
                if (el.getCSSProperty('font-family').value !== exp.linkFamily) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-size', function () {
            let arr = $$(sel.link);
            for (let el of arr) {
                if (el.getCSSProperty('font-size').value !== exp.linkSize) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('font-weight', function () {
            let arr = $$(sel.link);
            for (let el of arr) {
                if (el.getCSSProperty('font-weight').value !== exp.linkWeight) {
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

    });

    describe('Links redirect', function () {

        it('link "Started" redirect to correct URL', function () {
            if($(sel.linkStarted).getAttribute("href") === exp.linkStartedURL){
                assert.equal(true, true);
            }else{
                assert.equal(false, true);
            }
        });

        it('link "State" redirect to correct URL', function () {
            if($(sel.linkState).getAttribute("href") === exp.linkStateURL){
                assert.equal(true, true);
            }else{
                assert.equal(false, true);
            }
        });

        it('link "Community" redirect to correct URL', function () {
            if($(sel.linkCommunity).getAttribute("href") === exp.linkCommunityURL){
                assert.equal(true, true);
            }else{
                assert.equal(false, true);
            }
        });

    });

    describe('Localization & content', function () {

        it('links = eng text', function () {
            let arr = $$(sel.link);
            for (let element of arr){
                if(element.getText() !== exp.linksText){
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('links = spain text', function () {
            $(sel.lnkSpain).click();
            let arr = $$(sel.link);
            for (let element of arr){
                if(element.getText() !== exp.linksTextES){
                    $(sel.lnkEnglish).click();
                    assert.equal(false, true);
                }
            }
            $(sel.lnkEnglish).click();
            assert.equal(true, true);
        });

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
            let arr = $$(sel.description);
            let count = arr.length;
            for(let i = 0; i < count; i++){
                if(arr[i].getText() !== exp.descriptionTextEN1[i]){
                    assert.equal(false, true);
                }
            }
            assert.equal(true, true);
        });

        it('description = spain text', function () {
            $(sel.lnkSpain).click();
            let arr = $$(sel.description);
            let count = arr.length;
            for(let i = 0; i < count; i++){
                if(arr[i].getText() !== exp.descriptionTextSP1[i]){
                    $(sel.lnkEnglish).click();
                    assert.equal(false, true);
                }
            }
            $(sel.lnkEnglish).click();
            assert.equal(true, true);
        });

    });

});
