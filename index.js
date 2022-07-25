//function


function feedPatsy() {
    console.log('Give Patsy two eggs and Kibble');
}

function feedLola() {
    console.log('Give Lola three eggs and Kibble');

}
//solution


dogFood(() => console.log('Eat up girl!'));

function dogBreakfast(dogs) {
    let cupsOfFood;

    if (dogs === patsy) {
        cupsOfFood = "1 cup";
    } else if (dogs === lola) {
        cupsOfFood = "2 cups";
    } else {
        cupsOfFood = "No Kibble for you";
    }}
    
    feedLola(dogs);
    
  