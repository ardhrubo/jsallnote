 var arr = [1,2,3,4,0,6,7,8,9] 

// var sum = arr.reduce(function(prev,curr){
//     return prev+curr
// },100)

// console.log(sum)



// var max = arr.reduce(function(prev,curr){
//  return Math.max(prev,curr)
// })

// console.log(max)



function myReduce(arr,cb,acc) {
 for (var i=0; i<arr.length; i++) {
    acc = cb(acc,arr[i])
 }

 return acc
}



var sum = myReduce(arr,function(prev,curr){
    return prev+curr
},0)

var max = myReduce(arr,function(prev,curr){
    return Math.max(prev,curr)
},0)

var min = myReduce(arr,function(prev,curr){
    return Math.min(prev,curr)
},arr[0])

console.log(sum,max,min)

