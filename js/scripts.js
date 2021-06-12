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
    $('#roboSays, #userSays').text(clr);
    $('.noInput').html(clr);
    const userInput = parseInt($('input#numInput').val());
    const userName = $('input#nameInput').val();

    let result = roboger(userInput);
    if (!Number(userInput)) {
      $('#robo, #user').hide();
      $('.noInput').show();
      if (!userName) {
        $('.noInput').html(`<h1>You should enter a number and a name!</h1>`)
      } else {
        $('.noInput').html(`<h1>You should enter a number, ${userName}!</h1>`)
      }
    } else {
      $('#robo, #user').show();
    }
    for (element of result) {
      if (element === "Won't you be my neighbor?") {
        $('#roboSays').prepend(`<li>Won't you be my neighbor, <span class='name'>${userName}?</span></li>`)
      } else if (element === 'Boop!') {
        $('#roboSays').append(`<li>${element}</li>`)
      } else if (element === 'Beep!') {
        $('#roboSays').append(`<li>${element}</li>`)
      } else {
        $('#userSays').append(`<li>${element}</li>`)
      }
    }
    $('.container').show();
  })
})
