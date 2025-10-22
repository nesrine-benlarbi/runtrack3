function workDay(date) {
    const daysOff = [
        "1-1",
        "8-5",
        "25-12",
    ]
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    let dayMonth = day + "-" + month;
    let dayWeek = date.getDay();
    if (daysOff.includes(dayMonth)){
        return date + "c'est un jours férié";
    }else if(dayWeek === 6 || dayWeek === 0){
        return  "c'est le week-end";
    }else{
        return  "je BOSS"
    }

    
}
console.log(workDay(new Date(2025,5,3)));
