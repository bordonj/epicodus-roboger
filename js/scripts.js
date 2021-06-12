// business logic
let roboger = (numInput) => {
  let robogerArr = [];
  for (let i = 0; i <= numInput; i++) {
    i = i.toString();
    if (i.includes(3)) {
      robogerArr.push("Won't you be my neighbor?");
    } else if (i.includes(2)) {
      robogerArr.push('Boop!')
    } else if (i.includes(1)) {
      robogerArr.push('Beep!')
    } else {
      robogerArr.push(i);
    }
  }
  return robogerArr;
}

// UI logic
$(document).ready(function() {
  $('form#numberInput').submit(function(e) {
    e.preventDefault();
    const clr = '';
    $('#robo, #user').text(clr);
    const userInput = parseInt($('input#numInput').val());

    let result = roboger(userInput);
    for (element of result) {
      if (element === "Won't you be my neighbor?") {
        $('#robo').append(`<li>${element}</li>`)
      } else if (element === 'Boop!') {
        $('#robo').append(`<li>${element}</li>`)
      } else if (element === 'Beep!') {
        $('#robo').append(`<li>${element}</li>`)
      } else {
        $('#user').append(`<li>${element}</li>`)
      }
    }
    $('.container').show();
  })
})
