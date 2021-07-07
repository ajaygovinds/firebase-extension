try {
  self.importScripts("./firebase-app.js", "./firebase-database.js");

  var firebaseConfig;
  setTimeout(function () {
    firebaseConfig = {
      apiKey: "API_KEY",
      authDomain: "DATABASE_NAME.firebaseapp.com",
      projectId: "DATABASE_NAME",
      databaseURL: "https://DATABASE_URL.firebaseio.com/",
      storageBucket: "DATABASE_NAME.appspot.com",
      messagingSenderId: "42279855xxxx",
      appId: "API_ID",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    console.log(firebase);

    chrome.runtime.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      console.log(
        sender.tab
          ? "from a content script:" + sender.tab.url
          : "from the extension"
      );
      if (request.greeting == "hello") {
        firebase
          .database()
          .ref("0/")
          .once("value")
          .then(function (snapshot) {
            console.log(snapshot.val().rqm_url);
            // sendResponse({ farewell: snapshot.val().rqm_url });
          });
      }
    });
  }, 2000);
} catch (e) {
  console.log("...inside catch");
  console.log(e);
}
