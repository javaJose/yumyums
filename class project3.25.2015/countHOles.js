/**
 * Created by JF.Gallegos on 3/25/2015.
 */
//lookup table
var holes={
    0:1, 4:1, 6:1, 8:2, 9:1,
    A:1, B:2, D:1, O:1, P:1,
    Q:1, R:1, a:1, b:1, d:1,
    g:2, o:1, p:1, q:1

};

function countHoles(str){
    var total=0;
    // array of chars and letters
    var ggggg= str.split("");

    //loop
    for (i=0; i<ggggg.length; i++){
        var letter = ggggg[i];
        total += holes[letter]||0;
    }
    //comparison

//result
    return total;


}

