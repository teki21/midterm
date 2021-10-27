var seconds = 0;
var p = document.getElementById('seconds');

function incrementSeconds() {
    seconds += 1;
    p.innerText = "it took you " + seconds + " seconds to complete this quiz.";
}

var cancel = setInterval(incrementSeconds, 1000);

function quiz(){
  event.preventDefault();

  clearInterval(cancel);
 
    p.style.display="block"

  return true
}
