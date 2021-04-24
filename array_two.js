var array = [1,2,3,7,9,1,7,3,4,5,6,666,666,666,666,666,666];
var newArrayRemove=[];

for(var j = 1; j <= (array.length-1); j++)
{
       newArrayRemove[j]=array[j];
}

  for (var i = 0; i <=(newArrayRemove.length); i++) {
    for (var j = 1; j <=(newArrayRemove.length-1); j++){
            if(newArrayRemove[i]==(newArrayRemove[j])){
                newArrayRemove.splice(i,1);
         }
    }
  }

for (var y=0; y<=(newArrayRemove.length-1); y++) {
    console.log(newArrayRemove[y]);
}


for (var i = 1; i <=(newArrayRemove.length-1); i++) {
    let cont=0;
    for (var j = 0; j <=(array.length-1); j++){
            if(newArrayRemove[i]==(array[j])){
                cont++;
         }
    }
    console.log("El elemento "+newArrayRemove[i]+" se repite "+cont+" veces");
  }
  
  
  