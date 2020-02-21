/* global by */

var homePage = function() {
	this.btnAdd  = element(by.xpath('//summary[@class="Header-link"]'));
	this.dropDownNewRepo = element(by.xpath('//details//a[@href="/new"]'));
	this.summaryUserHeader = element(by.xpath('//summary[@class="Header-link"]'));
	this.btnNavigateHome = element(by.xpath('(//a[@aria-label="Homepage"])[1]'));
	this.userIcon = element(by.xpath('//details[contains(@class,"details-overlay")]//img[@class="avatar"]'));
	this.btnLogOut = element(by.xpath('//form[@class="logout-form"]/button'));
	this.txtFindRepo = element(by.xpath('//input[@id="dashboard-repos-filter-left"]'));
	
	
	this.addRepository = function(){
		this.btnAdd.click();
		this.dropDownNewRepo.click();
		return require('../gitHubPages/createRepoPage.js');
	};
	
	this.verifyLogin = function(callback){
		this.summaryUserHeader.isPresent().then(function(status){
			callback(status);
	    	});
	};
	
	this.logout = function(){
		this.userIcon.click();
		this.btnLogOut.click();
	};
	
	this.navigateHome = function(){
		this.btnNavigateHome.click();
		browser.sleep(1000);
	};
	
	this.findRepository = function(txtRepoName, callback){
		var self = this;
		this.txtFindRepo.isPresent().then(function(status){
			if(status){
			    self.txtFindRepo.clear();
			    self.txtFindRepo.sendKeys(txtRepoName);
			    browser.sleep(1000);
			    var repoSitory = element(by.xpath('(//li[contains(@class,"public source")]//span[@title="'+txtRepoName+'"])[1]'));			    
			    repoSitory.isPresent().then(function(status){
				    if(status){
					    callback(status);
					    repoSitory.click();
				    }
				    else{
					    callback(false);
				    }
			    });			    
			}
			else{
				callback(false);
			}
		});		
	};
};
module.exports = new homePage();