var array = [1,2,3,4,5,6,7];
var newArray=[];
var newArray_odd = [];
var newArray_even = [];
let index1=0,index2=0;

  for (var i = 0; i <= (array.length-1); i++) {
    let aux = array[i];
    if (aux%2==0)
    {
        newArray_odd[index1]= array[i];
        index1++;
    }
    else
    {
        newArray_even[index2]= array[i];
        index2++;
    }
    newArray[array.length - 1 - i] = aux;

  }
  for (var y=0; y<=(newArray.length-1); y++) {
     console.log(newArray[y]);
   }
   for (var y=0; y<=(newArray_odd.length-1); y++) {
    console.log(newArray_odd[y]);
  }
  for (var y=0; y<=(newArray_even.length-1); y++) {
    console.log(newArray_even[y]);
  }
