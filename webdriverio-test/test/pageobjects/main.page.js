class MainPage {

    open(path) {
        return browser.url(`https://bidzaar.com/landing/${path}`)
    }

    get heroDiv() {
        return driver.$("//div[@class=\"wp-block-media-text__content\"]//h2/..");
    }

    h2Title() {
        return this.heroDiv.$('h2');
    }

    textBidzaar() {
        return this.heroDiv.$('//p[contains(.,\'Bidzaar – это электронная торговая площадка нового типа\')]');

    }

    buttonRegister() {
        return this.heroDiv.$('//a[@class = "wp-block-button__link"]');
    }

    rateCount() {
        return driver.$$("//div[@class = \"bdz-rates\"]//h3");
    }

    buttonsRate() {
        return driver.$$("//button[contains(.,\"Выбрать тариф\")]");
    }

    selectRate(numberElement) {
        const elem = this.buttonsRate()[numberElement];
        elem.waitForClickable({timeout: 3000});
        return this.buttonsRate()[numberElement].doubleClick();

    }

    getRateNamePoppa() {
        const elem = driver.$("//*[@id=\"spu-2969\"]/div");
        elem.waitForDisplayed({timeout: 5000});
        return driver.$("//*[@id=\"bdz-post-title\"]").getText();
    }

    getRateNamePage(numberElement) {
        const rateNamePage = this.rateCount()[numberElement].getText();
        return `${rateNamePage} тариф`;
    }

}

module.exports = new MainPage();