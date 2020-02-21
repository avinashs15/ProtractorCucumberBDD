var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
var homePage = require('../gitHubPages/homePage.js');
var launchPage = require('../gitHubPages/launchPage.js');
var loginPage = require('../gitHubPages/loginPage.js');
var utils = require('../library/utils');
var repositoryPage = require('../gitHubPages/repositoryPage.js');
var repoName;

var gitHubFunctionalitySteps = function(){
    
	this.Given(/^When I launch "([^"]*)"$/, function (arg1) {                  
           launchPage.launchGitHub(arg1);	   
	});
  
	this.When(/^I enter username "([^"]*)" and password "([^"]*)" and login$/, function (username, password) {	    
		launchPage.clickSignIn(function(status){	       
		   expect(status).to.equal(true);
		   browser.sleep(2000);
		});
		homePage = loginPage.logingitHub(username, password);		
	});
	 
	this.Then(/^I should be able to see home page$/, function () {
		homePage.verifyLogin(function(status){
		    expect(status).to.equal(true);	     
		});		
	});
       
	this.Then(/^I should be able to log out of github$/, function () {
		 homePage.navigateHome();
		 homePage.logout();		
	});
       
	this.Then(/^I should be able to Add a new Repository named "([^"]*)"$/, function (reponame) {
		var createRepoPage = homePage.addRepository();
		repoName = reponame + utils.getRandomInt(10000, 1000000);
		repoDesc = "Description "+ repoName;
		createRepoPage.addNewRepository(repoName, repoDesc);
		createRepoPage.createReadMe("Comment for "  +repoDesc );
		
	});
              
	this.Then(/^I should be able to search for the created repository$/, function () {
		browser.sleep(2000);
		homePage.navigateHome();
		homePage.findRepository(repoName, function(status){
		    expect(status).to.equal(true);	     
		});
		
	});
       
	this.Then(/^I should be able to delete the created repository$/, function () {
		browser.sleep(1000);
		homePage.navigateHome();
		browser.sleep(1000);
		homePage.findRepository(repoName, function(status){
			expect(status).to.equal(true);
		});
		repositoryPage.navigateToTabs("Settings");		
		repositoryPage.deleteRepository("new10TestUser/" + repoName, function(status){
			expect(status).to.equal(false);
		});
		
	});
       
	this.Then(/^I should verify the repository is deleted$/, function () {
		homePage.navigateHome();
		homePage.findRepository(repoName, function(status){
			expect(status).to.equal(false);
		});		
	});       
};
module.exports = gitHubFunctionalitySteps;