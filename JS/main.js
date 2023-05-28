// function go(name,age){
//     if(age < 18) alert(name + '!');
//     else{
//         alert(name);
//     }
// }
// var arr =  [1,2,'Orange','Banana',go];
// arr[4]('John',17);

arr.forEach(function(value, index){
    console.log(value);
});

var fruits = ['Apple','Banana','Orange'];
fruits.shift();
var orange = fruits.pop();

for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}