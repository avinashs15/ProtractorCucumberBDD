/* global by, browser */
var launchPage = function() {
	 this.linkSignIn = element(by.xpath('//a[@href="/login"]'));
	
	this.clickSignIn = function(callback){	    
		var self = this;		
		this.linkSignIn.isPresent().then(function(status){		    
			if(status){
			    self.linkSignIn.click();
			    callback(status);
			    return require('../gitHubPages/loginPage.js');			    
			}
			else{
				callback(false);
			}
		});		
	};
	
	this.launchGitHub = function(url){		
		browser.driver.get(url);
		browser.manage().window().maximize();
		browser.ignoreSynchronization = true;		
		browser.sleep(1000);		
	};
};
module.exports = new launchPage();