/* global by, browser */

var createRepoPage = function() {
	this.txtRepoName  = element(by.id('repository_name'));
	this.txtRepoDescription = element(by.id('repository_description'));
	this.btnCreateRepository = element(by.xpath('//div[@class="new-repo-container"]//button[@type="submit"]'));
	this.repoName = element(by.xpath('//strong[@itemprop="name"]'));
	this.linkCreateReadMe = element(by.xpath('//a[text()="README"]'));
	this.readMeTxt = element(by.xpath('//div[@class="CodeMirror-code"][1]'));
	this.btnSubmitFile = element(by.xpath('//button[@id="submit-file"]'));
	
	
	this.addNewRepository = function(txtRepoName, txtDescription){
		this.txtRepoName.sendKeys(txtRepoName);
		this.txtRepoDescription.sendKeys(txtDescription);
		browser.sleep(1000);
		this.btnCreateRepository.click();
		browser.sleep(1000);
	};
	
	this.createReadMe = function(txtReadMeComment){
		browser.sleep(3000);
		this.linkCreateReadMe.click();
		this.readMeTxt.click();
		this.readMeTxt.sendKeys(txtReadMeComment);
		this.btnSubmitFile.click();
		return require('../gitHubPages/repositoryPage');
	};
};
module.exports = new createRepoPage();