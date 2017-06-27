var dict = ['I' : 1, 'V' : 5, 'X' : 10];
var first = dict[1];
var prev = first - 1;
var num = "III";
for(var i= 0; i < num.length; i++){
  if(first[num[i]] >= prev){
    first+= prev;
  }
}
