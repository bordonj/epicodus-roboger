let roboger = (numInput) => {
  let num = parseFloat(numInput);
  let robogerArr = [];
  // let numArr = [];
  for (let i = 0; i <= num; i++) {
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
  console.log('robogerArr', robogerArr);
}