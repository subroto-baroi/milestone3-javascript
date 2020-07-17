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

// tinyFriend


function tinyFriend(name){
    let smallest = name[0];
        if(name.length > 0){
          for (let i = 0; i <name.length; i++){
             if(typeof name[i] === 'string' && name[i].length < smallest.length)
            {
                 smallest = name[i];
            }
        }
        
    }
    return smallest;
}
var output = tinyFriend (['Shisir', 'Ripa', 'Nik', 'Shumaia', 'Babul']);
console.log(output);
