function vlue(){
let today=new Date();
console.log(today)

 
 let day=document.getElementById("day")
 let days=today.getDay();
 days=(days<10) ?'0'+days:days
 day.innerHTML=days;
 
 let date=document.getElementById("date")
 let dates=today.getDate();
 dates=(dates<10) ?'0'+dates:dates
 date.innerHTML=dates;
 
 
 let month=document.getElementById("month")
 let months=today.getMonth();
 months=(months<10) ?'0'+months:months
 month.innerHTML=months;
 
 
 let year=document.getElementById("year")
 let years=today.getFullYear();
 year.innerHTML=years;
 
 
 let hour=document.getElementById("hour")
 let hours=today.getHours();
 if(hours>12){
	 hours=hours-12;
 }
  hours=(hours<10) ?'0'+hours:hours
 hour.innerHTML=hours;
 
 
 
 let mint=document.getElementById("min")
 let mints=today.getMinutes();
 mint.innerHTML=mints;
 
 
 
 let sec=document.getElementById("sec")
 let secs=today.getSeconds();
 sec.innerHTML=secs;
 
 
let session=document.getElementById("session");
let sessions="AM";
   if(hour>12){
	   let sessions="PM";	
}
	session.innerHTML=sessions;
}
setInterval(vlue,10)