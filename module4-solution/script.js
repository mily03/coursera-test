
(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (let i = 0; i < names.length; i++) {
    let name = names[i];

    var firstLetter = name.toLowerCase().charAt(0);

    if (firstLetter == 'j') {
      window.byeSpeaker.speak(name);
    } else {
      window.helloSpeaker.speak(name);
    }
  }
})(window)
