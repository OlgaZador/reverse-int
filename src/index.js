module.exports = function reverse (n) {
  
let str = n.toString();

let str_reverse = str. split("").reverse().join("");

let number_reverse = parseInt(str_reverse);

return number_reverse;

}
