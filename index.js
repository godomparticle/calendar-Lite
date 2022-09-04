const monthEl= document.getElementById("month");
const dayEl= document.getElementById("day");
const dateEl= document.getElementById("date");
const yearEl= document.getElementById("year");
const date=new Date();
const month=date.toLocaleString("en",{month:"long"
});;
monthEl.innerText=month;
const day=date.toLocaleString("en",{
    weekday:"long"
});
dayEl.innerText=day;
const datee=date.getDate();
dateEl.innerText=datee;
const year=date.getFullYear();
yearEl.innerText=year;
function zoomDate(){
    dateEl.style.fontSize="6rem";
    dateEl.style.transition=".3s";
}
function normalDate(){
    dateEl.style.fontSize="";
    
}

function zoomDay(){
    dayEl.style.fontSize="1.8rem";
    dayEl.style.transition=".3s"
}
function normalDay(){
    dayEl.style.fontSize="";
    
    
}
function zoomYear(){
    yearEl.style.fontSize="2rem";
    yearEl.style.transition=".3s"
}
function normalMonth(){
    yearEl.style.fontSize="";
   
    
}

