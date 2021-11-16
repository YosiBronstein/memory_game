const cards = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "A" },
  { name: "B" },
  { name: "C" },
];

// function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;

//     while (currentIndex != 0) {

//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }

//     return array;
//   }

//   shuffle(cards);
//   console.log(cards);

function randRannge(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr){
    for(i=0;i<100;i++){
        let a1 = randRannge(0, arr.length)
        let a2 = randRannge(0, arr.length)
        if(a1 ==a2){
            i--;
            continue;
        }
        swap(arr, a1, a2)
    }
}
function main(){
    console.log(...cards);
    shuffle(cards);
    console.log(cards);
}
main();

function check(arr, i, j){
    return cards[i].name == cards[j].name
    }
console.log(check(0, 1));


