/*
At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
*/

function alphanumeric(string:string){
    return /^[0-9a-z]+$/i.test(string);
}