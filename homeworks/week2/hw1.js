// hw1：印出星星
// 給定 n（1<=n<=30），依照規律「印出」正確圖形

function printStars(n) {
  var stars = "";
  for(var i=0; i<n; i++){
    stars = stars + "*";
  }
  console.log(stars);
}

printStars(1);
printStars(3);
printStars(5);
printStars(6);
