function minToFront(arr) {
    var lowest = arr[0];
    var lowestIndex = 0;
    
    for (var i=0; i<arr.length; i++) {
         if (arr[i]<lowest) {
            lowest = arr[i];
            lowestIndex = i;
         }
    }
arr.splice(lowestIndex, 1);
arr.unshift(lowest);

return arr;
}

console.log(minToFront([5,2,1,4,3]));
