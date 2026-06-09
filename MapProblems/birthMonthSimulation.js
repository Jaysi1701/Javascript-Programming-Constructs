let birthMonthMap = new Map();

for(let i=1;i<=12;i++){
    birthMonthMap.set(i,[]);
}

for(let person=1;person<=50;person++){

    let month =
        Math.floor(Math.random()*12)+1;

    birthMonthMap
        .get(month)
        .push(person);
}

for(let [month,persons]
    of birthMonthMap){

    console.log(
        "Month " +
        month +
        " : "
    );

    console.log(persons);

    console.log(
        "----------------"
    );
}