// Date(Year, Moth, date hour minute, seconds, ms)
const date  = new Date();
console.log(date)

const date1  = new Date("2024-01-02T12:00:00Z");
console.log(date1)

const date2  = new Date(1700000000000);
console.log(date2)


console.log("---------- Example 2 ----------")
const date3 = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const dayOfTWeek= date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(dayOfTWeek);

console.log("---------- Example 3 ----------")

const date4 = new Date();
date4.setFullYear(2024)
date4.setMonth(0)
date4.setDate(1)
date4.setHours(2)
date4.setMinutes(3)
date4.setSeconds(4)
console.log(date4)

console.log("---------- Example 4 ----------")

const dateA = new Date("2023-12-31")
const dateB = new Date("2024-01-01")
if(dateB > dateA){
    console.log("HAPPY NEW YEAR!")
}



