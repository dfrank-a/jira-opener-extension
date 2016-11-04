document.addEventListener("DOMContentLoaded", function() {
    var ticketInput = document.getElementById("ticketinput");
    var ticketNumber = document.getElementById("ticket-number");

    chrome.storage.local.get('domain', function(settings) {
      document.getElementById('domain-name').textContent = settings.domain;
    });

    ticketInput.addEventListener('submit', function(){
      chrome.storage.local.get('domain', function(settings) {
        var jiraUrl = "https://" + settings.domain + ".jira.com/browse/" +
          ticketNumber.value;
        chrome.tabs.create({url: jiraUrl}); 
      });
      return false;
    });

    ticketNumber.addEventListener('keyup', function() {
      var value = ticketNumber.value;
      var segments;
      value = value.toUpperCase();
      value = value.replace(/[^A-Z0-9-]/g,'');
      segments = value.split('-');
      segments[0] = segments[0].replace(/[^A-Z]/g,'');
      try{
        segments[1] = segments[1].replace(/[^0-9]/g,'');
      } catch (err) {}
      ticketNumber.value = segments.join('-');
    });
});
