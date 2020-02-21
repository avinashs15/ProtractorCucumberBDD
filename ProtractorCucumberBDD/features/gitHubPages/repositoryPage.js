/* global by, browser */

var repositoryPage = function() {
	this.repoName = element(by.xpath('//strong[@itemprop="name"]'));
	this.repoDescription = element(by.xpath('//div[@id="readme"]//p'));
	this.tabSettings = element(by.xpath('//a[contains(@data-selected-links,"settings")]'));
	this.btnDeleteRepo = element(by.xpath('//summary[contains(text(),"Delete this repository")]'));
	this.txtRepoName = element(by.xpath('//form[contains(@action,"delete")]//input[@class="form-control input-block"]'));
	this.btnDeleteConfirm = element(by.xpath('//form[contains(@action,"delete")]//button'));
	
	this.verifyRepositoryCreated = function(txtRepoName, txtDescription, callback){
		this.repoName.getText().then(function(txtRepoNameRunTime){
			callback(txtRepoNameRunTime.indexOf(txtRepoName) > -1);
		});
		this.repoDescription.getText().then(function(txtRepoNameRunTime){
			callback(txtRepoNameRunTime.indexOf(txtDescription) > -1);
		});
	};
	
	this.navigateToTabs = function(tabName){
		switch(tabName){
			case "Settings" : 
			    this.tabSettings.click();
			    browser.sleep(3000);
			break;
		}
	};
	
	this.deleteRepository = function(txtRepoName, callback){
		this.btnDeleteRepo.click();
		this.btnDeleteConfirm.isEnabled().then(function(status){
			callback(status);
		});
		this.txtRepoName.sendKeys(txtRepoName);
		this.btnDeleteConfirm.click();
	};
};
module.exports = new repositoryPage();