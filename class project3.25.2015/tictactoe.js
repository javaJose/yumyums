var square= [
    true, true, true,
    true, true, true,
    true, true, true,
];
var combo= [
    [0,1,2], [2,1,0], [3,4,5], [5,4,3],
    [6,7,8], [8,7,6], [0,3,6], [6,3,0],
    [1,4,7], [7,4,1], [2,5,8], [8,5,2],
    [0,4,8], [8,4,0], [2,4,6], [6,4,2],
];

function check(square, combo){
    if(square[combo[0]] == square[combo[1]] &&
        square[combo[1]] == square[combo[2]]) return true;

    else return false;
}

combo.forEach(function(combo){
    console.log(combo, check(square, combo));
});
