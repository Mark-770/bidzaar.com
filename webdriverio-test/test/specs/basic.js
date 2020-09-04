const assert = require('assert');
const mainPage = require('../pageobjects/main.page.js');


describe('webdriver.io page', () => {
    it('should have the right title', () => {
        const expectedTitle = "Честные тендеры от частного бизнеса";
        const expectedText = "Bidzaar – это электронная торговая площадка нового типа, созданная по принципу социальной сети заказчиков и поставщиков товаров и услуг";
        mainPage.open('');
        assert.equal(mainPage.h2Title().getText(), expectedTitle);
        assert.equal(mainPage.textBidzaar().getText(), expectedText);
        mainPage.buttonRegister().isDisplayed();
    });

    it('rate', () => {
        mainPage.open('prices/');
        mainPage.selectRate(1);
        const rateNamePage = mainPage.getRateNamePage(2);
        const rateNamePoppa = mainPage.getRateNamePoppa();
        assert.equal(mainPage.rateCount().length, 4);
        assert.equal(rateNamePage, rateNamePoppa);
    })
});