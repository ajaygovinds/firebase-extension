console.log("Content Script");

  chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log("*** printing response *** \n " +response.farewell +"\n***");
  });
