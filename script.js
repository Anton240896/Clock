const arrDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Seterday",
  ];
  
  const namesOfMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  

  const elem = {
    day: document.querySelector(".date-day"),
    date: document.querySelector(".date"),
    month: document.querySelector(".date-month"),
    year: document.querySelector(".date-year"),
    digitalClock: document.querySelector(".digital-clock"),
    secondsArrow: document.querySelector(".clock-seconds__arrow"),
    minutesArrow: document.querySelector(".clock-minutes__arrow"),
    hoursArrow: document.querySelector(".clock-hours__arrow"),
  };
  

  setInterval(() => {
    const currentTime = new Date();
  
    const current = {
      day: arrDay[currentTime.getDay()],
      date: currentTime.getDate(),
      month: namesOfMonth[currentTime.getMonth()],
      year: currentTime.getFullYear(),
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      milli: currentTime.getMilliseconds(),
    };
  
    elem.day.textContent = current.day;
    elem.date.textContent = current.date;
    elem.month.textContent = current.month;
    elem.year.textContent = current.year;
    
  
    elem.digitalClock.textContent = `Kiyv time-${formatTime(
      current.hours
    )} : ${formatTime(current.minutes)} : ${formatTime(current.seconds)}`;
  
    const secondsDeg = (360 / 60) * current.seconds; 
    const minutesDeg = (360 / 60) * current.minutes;
    const hoursDeg =
      (360 / 12) * current.hours + (360 / 12 / 60) * current.minutes;
  
    elem.secondsArrow.style.transform = `rotate(${secondsDeg}deg)`;
    elem.minutesArrow.style.transform = `rotate(${minutesDeg}deg)`;
    elem.hoursArrow.style.transform = `rotate(${hoursDeg}deg)`;
  }, 1000);
  
  
  
  function formatTime(value) {
    return value.toString().padStart(2, "0");
  }