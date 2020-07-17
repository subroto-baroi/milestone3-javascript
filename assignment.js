// feetToMile

function feetToMile (feet){
    var mile = feet / 5280;
    return mile;

}
var result = feetToMile(10560);
console.log(result);



// woodCalculator

function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood  = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var woodResult = woodCalculator(10, 4, 3);
console.log(woodResult);


// brickCalculator


function brickCalculator(floor){
    console.log(floor);
    if (floor > 0 && floor <=10){
        var brick = 15*1000*floor;
        console.log(brick);
    }else if (floor > 10 && floor <=20 ){
        var brick = 12*1000*(floor-10)+150000;
        console.log(brick);
    }else if (floor > 20){
        var brick = 10*1000*(floor -20) + 150000 + 120000;
        console.log(brick);
    }

}
brickCalculator(10);
brickCalculator(20);
brickCalculator(30);
brickCalculator(40);




// tinyFriend


function tinyFriend(name){
    var smallest = name[0];
        if(name.length > 0){
          for (var i = 0; i <name.length; i++){
             if(typeof name[i] == 'string' && name[i].length < smallest.length)
            {
                 smallest = name[i];
            }
        }
        
    }
    return smallest;
}
var output = tinyFriend (['Shisir', 'Ripa', 'Nik', 'Shumaia', 'Babul']);
console.log(output);


