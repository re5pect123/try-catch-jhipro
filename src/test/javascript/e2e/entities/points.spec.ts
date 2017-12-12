import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Points e2e test', () => {

    let navBarPage: NavBarPage;
    let pointsDialogPage: PointsDialogPage;
    let pointsComponentsPage: PointsComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Points', () => {
        navBarPage.goToEntity('points');
        pointsComponentsPage = new PointsComponentsPage();
        expect(pointsComponentsPage.getTitle()).toMatch(/vezbaJhipsterKnjigaApp.points.home.title/);

    });

    it('should load create Points dialog', () => {
        pointsComponentsPage.clickOnCreateButton();
        pointsDialogPage = new PointsDialogPage();
        expect(pointsDialogPage.getModalTitle()).toMatch(/vezbaJhipsterKnjigaApp.points.home.createOrEditLabel/);
        pointsDialogPage.close();
    });

    it('should create and save Points', () => {
        pointsComponentsPage.clickOnCreateButton();
        pointsDialogPage.setNameInput('name');
        expect(pointsDialogPage.getNameInput()).toMatch('name');
        pointsDialogPage.setSurnameInput('surname');
        expect(pointsDialogPage.getSurnameInput()).toMatch('surname');
        pointsDialogPage.save();
        expect(pointsDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class PointsComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-points div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class PointsDialogPage {
    modalTitle = element(by.css('h4#myPointsLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    nameInput = element(by.css('input#field_name'));
    surnameInput = element(by.css('input#field_surname'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setNameInput = function(name) {
        this.nameInput.sendKeys(name);
    }

    getNameInput = function() {
        return this.nameInput.getAttribute('value');
    }

    setSurnameInput = function(surname) {
        this.surnameInput.sendKeys(surname);
    }

    getSurnameInput = function() {
        return this.surnameInput.getAttribute('value');
    }

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
