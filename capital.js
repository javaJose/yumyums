/**
 * Created by JF.Gallegos on 3/24/2015.
 */
/*
 capitalizes first letter of a string

 'str': String
 returns 'String'
 */
function capitalizeFirstLetter(str){
    if(typeOf(str) !== 'string') return str;
    var firstLetter = str.charAt(0);
    var otherChars = str.subtr(1);

    return firstLetter.toUpperCase() + otherChars;
}
capitalizeFirstLetter("colorado"); //"Colorado"
