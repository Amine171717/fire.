// alert("its just the beginning")
// var x=5;
// var y=2;
// var z=x+y
// alert(z);
// var mystring="hello world";
// alert(mystring.length)

// var mystring="hello world";
// console.log(mystring.length)

// var firststring="i like";
// var secondstring="pizza";
// var completestring=firststring+secondstring;
// console.log(completestring)

// var mystring="hello";
// var secondstring="world";
// console.log(mystring.toLowerCase())
// console.log(secondstring.toLocaleUpperCase())

// var mystring="hello there, this is a split test";
// var parts=mystring.split(",");
// console.log(parts);

// var a=5;
// var b=2;
// var c=5;
// console.log (a==b);
// console.log (a==c);

// var i;
// for(i=0;i<10;i++);{
// console.log(i);
// }

// var i=0;
// while(i<10){
    // console.log(i);
    // i++;
// }

// var myArray=[1,2,3,4];
// var otherArray=["1","2","3"];
//  console.log(myArray);

// var myArray=[1,2,3,4];
//  console.log(myArray[3])//return4
 
// var myArray=[1,2,3,4];
// myArray.push(5);
// console.log(myArray);

// var myArray=[1,2,3,4,5];
//  myArray.pop();
// console.log(myArray);

// function mean(a,b,c){
    // return ((a+b+c)/3);
// }
// console.log(mean(3,5,7));

$(".but").hover(function(){
    $(this).css("opacity","0.5")
    $(this).find("button").show()
},function(){
    $(this).css("opacity","1")
    $(this).find("button").hide()

})
$(".but button").click(function(){
    $("#ex1").modal()
})




