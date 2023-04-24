function calculateAge(){

    var today = new Date();
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var birthDate = new Date(year,month,day);

    if(isNaN(birthDate.getTime())){
        alert("Please input valid dates");
        document.getElementById("age").innerHTML = "Please enter valid dates";
        return;
    }

    if(day>31 || day<1){
        alert("Please input valid dates");
        document.getElementById("age").innerHTML = "Please enter valid dates";
        return;
    }
    if(month>12 || month<1){
        alert("Please input valid dates");
        document.getElementById("age").innerHTML = "Please enter valid dates";
        return;
    }
    if(year>today.getFullYear() || year<1900){
        alert("Please input valid dates");
        document.getElementById("age").innerHTML = "Please enter valid dates";
        return;
    }


    var ageyear = today.getFullYear() - year;
    var agemonth = today.getMonth()+1 - month;
    var agedays =  today.getDate() - birthDate.getDate();

   
    console.log(ageyear,agemonth,agedays)

    console.log(today.getMonth());

    if(agemonth <0 || (agemonth ==0 && agedays <0)){
        ageyear = ageyear -1;
        agemonth+=12;
        if(agedays<0){
            var monthDays = new Date(today.getFullYear(),today.getMonth(),0).getDate();
            console.log(monthDays);
            agedays +=monthDays;
            agemonth-=1;
        }
    }

    var ageString = "Your age is";

    if(ageyear>0){
        ageString += " " + ageyear + " years";
    }
    if(agemonth >0){
        ageString += " " + agemonth + " months";
    }
    if(agedays >0){
        ageString += " " + agedays + " days";
    }

    

    document.getElementById("age").innerHTML = ageString;

}