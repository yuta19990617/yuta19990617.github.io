const date = new Date();
const nowday = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toLocaleDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    let colorday = (firstDayIndex + i) % 7;
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
        /* 土曜か日曜を判断する*/
        if(colorday === 0){
            days += `<div class="saturday">${i}</div>`;
        }else if(colorday === 1){
            days += `<div class="sunday">${i}</div>`;
        }else{
            days += `<div class="today">${i}</div>`;
        }
    } else {
        /* 土曜か日曜を判断する*/
        if(colorday === 0){
            days += `<div class="saturday">${i}</div>`;
        }else if(colorday === 1){
            days += `<div class="sunday">${i}</div>`;
        }else{
            days += `<div class="noneday">${i}</div>`;
        }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

const inputschedule = document.querySelector(".days");
inputschedule.addEventListener("click", (e) =>{
    const tage = e.target;
    const todo = window.prompt('todoを記入してね!!');
    tage.textContent += todo;
});

renderCalendar();