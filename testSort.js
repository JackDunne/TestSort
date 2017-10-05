const Sort = require('./Sort.js');

function main(){
  let bigList = [];
  for(let x = 0;x<100000;x++){
    bigList[x] = Math.random();
  }
  let list1 = Sort.selection(bigList);
  let list2 = Sort.insertion(bigList);

}
main();
