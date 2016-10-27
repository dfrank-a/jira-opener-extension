document.addEventListener("DOMContentLoaded", function() {
	var settingsForm = document.getElementById("settings")
	var domainInput = document.getElementById("domain-value");
    chrome.storage.local.get('domain', function(data) {
    	domainInput.value = data.domain;
    });
    
    settingsForm.addEventListener('submit', function(){
    	console.log('got a submit');
      	chrome.storage.local.set(
      		{domain: domainInput.value}, 
      		function () {console.log('settings saved');}
      	);
    });
});
