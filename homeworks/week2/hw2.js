// hw2：首字母大寫
// 給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。

function capitalize(str) {
  var newString = "";

  if (str.charCodeAt(0)>=65 && str.charCodeAt(0)<=122) {
    if(str.charCodeAt(0)>=97 && str.charCodeAt(0)<=122) {
      var exchanged = String.fromCharCode(str.charCodeAt(0));
      var following = str.slice(1);
      newString = exchanged + following;

      return(newString);
    } else {
      return(str);
    }
  } else {
    return(str);
  }
};

console.log(capitalize('hello'));
console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));
