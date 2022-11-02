String.prototype.palindrome = function() {
   var len = this.length-1;
   for (var i = 0; i <= len; i++) {
      if (this.charAt(i) !== this.charAt(len-i)) {
         return false;
      }//from  w w  w  .j  a va2 s  . c o m
      if (i === (len-i)) {
         return true;
      }
   }
   return true;
};

// 
// SUPER advanced way
//
String.prototype.palindromeAdv = function() {
   var r = this.split("").reverse().join("");
   return (r === this.valueOf());
}

var phrases = ["eve",
               "kayak",
               "mom",
               "wow",
               "noon",
               "Not a palindrome"];

for (var i = 0; i < phrases.length; i++) {
   var phrase = phrases[i];
   if (phrase.palindrome()) {
      console.log("'" + phrase + "' is a palindrome");
   } else {
      console.log("'" + phrase + "' is NOT a palindrome");
   }
}