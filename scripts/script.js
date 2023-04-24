function typewriterEffect(id, delay, text) {
    const element = document.getElementById(id);
    let i = 0;
    
    element.innerHTML = "";
  
    function typeWriter() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, delay);
      }
    }
  
    typeWriter();
  }

window.onload = function() {
    // const tagLine = document.querySelector("#tag-line");
    const tagLineText = "I’m a junior web developer who creates exceptional digital content."; 
    const fullNameText = "Steven Salcido";
    const locationText = "San Francisco Bay Area, CA";
    const professionText = "Junior Web Developer";
    // call it on 
    typewriterEffect("tag-line", 30, tagLineText);
    
    const myTimeout1 = setTimeout(function () {
        typewriterEffect("full-name", 30, fullNameText);
    }, 5000);
    const myTimeout2 = setTimeout(function () {
        typewriterEffect("location", 30, locationText);
    }, 8000);
    const myTimeout3 = setTimeout(function () {
        typewriterEffect("profession", 30, professionText);
    }, 10000);
}

