const countdown = ( )=> {
  const countDate = new Date("may 31, 2022 00:00:00").getTime()
  console.log(countDate);
  const now = new Date().getTime();
  const gap = countDate -now;
  console.log(gap);


  // // how it should work


  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  // calculating the time

  const textDay = Math.floor(gap / day)
  console.log(textDay);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.getElementById('set').innerHTML  = textDay;
  document.getElementById('set1').innerHTML  = textHour;
  document.getElementById('set2').innerHTML  = textMinute;
  document.getElementById('set3').innerHTML  = textSecond;

  setInterval(countdown, 1000);

  // document.getElementById('lasop4').innerHTML =current





   

};


countdown();