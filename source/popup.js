document.addEventListener("DOMContentLoaded", function() {
    var ticketInput = document.getElementById("ticketinput");

    chrome.storage.local.get('domain', function(settings) {
      document.getElementById('domain-name').textContent = settings.domain;
    });

    ticketInput.addEventListener('submit', function(){
      var ticketNumber = document.getElementById("ticket-number");
      chrome.storage.local.get('domain', function(settings) {
        var jiraUrl = "https://" + settings.domain + ".jira.com/browse/" +
          ticketNumber.value;
        chrome.tabs.create({url: jiraUrl}); 
      });
      return false;
    });
});
