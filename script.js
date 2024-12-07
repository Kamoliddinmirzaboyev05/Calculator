document.body.style.userSelect = "none";
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var back = document.getElementById("back");
var heading = document.getElementById("display");
var clear = document.getElementById("clear");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multi = document.getElementById("multi");
var divide = document.getElementById("divide");
var equality = document.getElementById("equality");
var dot = document.getElementById("dot");
var inverse = document.getElementById("inverse");
var plusMinus = document.getElementById("plus-minus");
var result;
var push, num1, num2;


//Klaviatura bilan boglash
document.addEventListener('keydown', (event) => {
  if(event.key === '1'){
    one.click();
  }
  if(event.key === '2'){
    two.click();
    
  }
  if(event.key === '9'){
    nine.click();
    
  }
  if(event.key === '3'){
    three.click();

  }
  if(event.key === '4'){
    four.click();

  }
  if(event.key === '5'){
    five.click();

  }
  if(event.key === '6'){
    six.click();

  }
  if(event.key === '7'){
    seven.click();

  }
  if(event.key === '8'){
    eight.click();

  }
  if(event.key === '0'){
    zero.click();

  }
  if(event.key === '+'){
    plus.click();

  }
  if(event.key === '-'){
    minus.click();

  }if(event.key === '*'){
    multi.click();

  }if(event.key === '/'){
    divide.click();

  }
  if(event.key === 'Backspace'){
    back.click();
  }
  if(event.key === 'Enter'){
    equality.click();
  }
  if(event.key == '.'){
    dot.click();
  }
});

/////////////////////////////////////////////////////////////////////////

one.addEventListener("click", () => {
  if (heading.textContent == 0) {
    heading.textContent = 1;
  } else {
    if (heading.textContent.length < 16) {
      heading.textContent += 1;
    }
  }
});
two.addEventListener("click", () => {
  if (heading.textContent == 0) {
    heading.textContent = 2;
  } else {
    if (heading.textContent.length < 16) {
      heading.textContent += 2;
    }
  }
});
three.addEventListener("click", () => {
  if (heading.textContent == 0) {
    heading.textContent = 3;
  } else {
    if (heading.textContent.length < 16) {
      heading.textContent += 3;
    }
  }
});
four.addEventListener("click", () => {
  if (heading.textContent == 0) {
    heading.textContent = 4;
  } else {
    if (heading.textContent.length < 16) {
      heading.textContent += 4;
    }
  }
});
five.addEventListener("click", () => {
  if (heading.textContent == 0) {
    heading.textContent = 5;
  } else {
    if (heading.textContent.length < 16) {
      heading.textContent += 5;
    }
  }
});
six.addEventListener("click", () => {
  if (heading.textContent == 0) {
    heading.textContent = 6;
  } else {
    if (heading.textContent.length < 16) {
      heading.textContent += 6;
    }
  }
});
seven.addEventListener("click", () => {
  if (heading.textContent == 0) {
    heading.textContent = 7;
  } else {
    if (heading.textContent.length < 16) {
      heading.textContent += 7;
    }
  }
});
eight.addEventListener("click", () => {
  if (heading.textContent == 0) {
    heading.textContent = 8;
  } else {
    if (heading.textContent.length < 16) {
      heading.textContent += 8;
    }
  }
});
nine.addEventListener("click", () => {
  if (heading.textContent == 0) {
    heading.textContent = 9;
  } else {
    if (heading.textContent.length < 16) {
      heading.textContent += 9;
    }
  }
});
zero.addEventListener("click", () => {
  if (heading.textContent == 0) {
    heading.textContent = 0;
  } else {
    if (heading.textContent.length < 16) {
      heading.textContent += 0;
    }
  }
});

dot.addEventListener("click", () => {
if(!heading.textContent.split("").includes(".")){
  heading.textContent += ".";
}

});

clear.addEventListener("click", () => {
  heading.textContent = 0;
});

plus.addEventListener("click", () => {
  push = "plus";
  num1 = Number(heading.textContent);
  heading.textContent = 0;
});

minus.addEventListener("click", () => {
    push = "minus";
    num1 = Number(heading.textContent);
    heading.textContent = 0;
  });

  multi.addEventListener("click", () => {
    push = "multi";
    num1 = Number(heading.textContent);
    heading.textContent = 0;
  });

  divide.addEventListener("click", () => {
    push = "divide";
    num1 = Number(heading.textContent);
    heading.textContent = 0;
  });

  inverse.addEventListener("click", () => {
    num1 = Number(heading.textContent);
    heading.textContent = 1 / num1;
  });
equality.addEventListener("click", () => {
    num2 = Number(heading.textContent);
    if(push == "plus"){
        result = num1 + num2;
    }else if(push == "minus"){
        result = num1 - num2
    }else if(push == "multi"){
        result = num1 * num2
    }else if(push == "devide"){
        result = num1 / num2
    }
    heading.textContent = result;
});



back.addEventListener("click", () => {
  if (heading.textContent != 0 && heading.textContent.split("").length != 1) {
    let array = heading.textContent.split("");
    let newarray = array.pop();
    heading.textContent = array.join("");
  } else if (
    heading.textContent != 0 &&
    heading.textContent.split("").length == 1
  ) {
    heading.textContent = 0;
  }
});
