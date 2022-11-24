/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

function longest(s1, s2) {
  result = "";
  for (var i = 0; i < s1.length; i++){
    if (!result.includes(s1.charAt(i))){
      result += s1.charAt(i);
    };
  };
  for (var i = 0; i < s2.length; i++){
    if (!result.includes(s2.charAt(i))){
      result += s2.charAt(i);
    };
  };
  var tmp = "0";
  var toReturn = "";
  var alphabetReversedOrder = "zyxwvutsrqponmlkjihgfedcba";
  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < result.length; j++){
      if (alphabetReversedOrder.indexOf(result.charAt(j)) > alphabetReversedOrder.indexOf(tmp) && !toReturn.includes(result.charAt(j))){
        tmp = result.charAt(j);
      };
    };
    toReturn += tmp;
    tmp = "0";
  };
  return toReturn;
};

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));