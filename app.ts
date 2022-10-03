// String Exercise
// 1. Write a ts program to find length of a string.
// var n:string = "hello pakistan";
// console.log(n.length);

// 2. Write a ts program to copy one string to another string.     pending
// 3. Write a ts program to concatenate two strings.
// var stri1:string = "hello";
// var stri2:string = "world";

// var c:string = stri1.concat(stri2)
// console.log(c);

// 4. Write a ts program to compare two strings.
// var c:string = "hello world pakistan";
// var d:string = "hello universe";
                                                  //need to understand
// var n:string = c.localeCompare("lokin for");
// console.log(n);


// 5. Write a ts program to convert lowercase string to uppercase.
// var x:string = "this is in lower case";
// var y:string = x.toLocaleLowerCase();
// console.log("this is in upper case", y);

// 6. Write a ts program to convert uppercase string to lowercase.
// var x:string="THIS STRING WAS IN UPPER CASE";
// var y:string = x.toUpperCase()
// console.log("converting upper case to lower case,", y);

// 7. Write a ts program to toggle case of each character of a string.

// var x:string = "aBcDeF";
// var y:string = "";

 
//     for(var i =0; i < x.length; i++){

    
//         if (x[i].toUpperCase() == x[i]){
//             // console.log(x.toLowerCase);
//             y +=x[i].toLowerCase();
//         }
//           if (x[i].toLowerCase() == x[i]) {
//               y += x[i].toUpperCase();          
//         }
//     }

        
//         console.log(y);
        
        
        
        
   

// 8. Write a ts program to find total number of alphabets, digits or special character in a string.

// var x:string = "i know the alphabet and counting from 11,2,3,2"

// for( var i=0; i<= x.length; i++){                                 PENDING
//     if( x[i] == x. )
// }

// 9. Write a ts program to count total number of vowels and consonants in a string.

// var x:string = "abcdefghijklmnopqrstuvwxyz";
// var y:string ="";
// var z:string = "";
// for(var i=0; i< x.length; i++){
//     if(x[i] == "a" ||x[i] == "e" ||x[i] == "i" || x[i] == "o" || x[i] == "u" ){
//         y +=x[i];
//     }
//      else if (x[i] != "a" ||x[i] != "e" ||x[i] != "i" || x[i] != "o" || x[i] != "u" ){
//         z +=x[i];          
     
// }
// }
// console.log(`The number of vovels in this line are ${y.length} ${y}`);
// console.log(`The number of consonants in this line are ${z.length} ${z}`);



// 10. Write a ts program to count total number of words in a string.

// var z:number =0


// var aa = (y:string):number =>{
//     for (var i = 0; i< y.length; i++){   
//         if(y[i] == " "){
//             z ++;
    
//         }
    
//     }
//     return(z+1)
//    // console.log(`total word sin the sentence ar ${z+1}`);
// }
// console.log(aa("hello for he"));




// // 11. Write a ts program to find reverse of a string.

// var m:string = "abccba";
// var n:string ="";
// var o:string =""

// for(var i = m.length-1; i >= 0; i--){
//     //console.log(i);
//      n+=m[i]
// }

// //console.log(n);


// // 12. Write a ts program to check whether a string is palindrome or not.


// for(var i=0; i< m.length;i++){
//     o+=m[i]

// }
// if(n === o){
//     console.log("its a palindrome");
    
// }
// else{
//     console.log("its not a palindrome");
    
// }


// 13. Write a ts program to reverse order of words in a given string

// var n:string = "hey bro"
// var x:string = ""                       pending

// console.log(n);



// 14. Write a ts program to find first occurrence of a character in a given string.
// var n:string = "hello world";
// var s:string = "h"

// for(var i =0; i < n.length; i++){
//     if(n[i] == s){
//         console.log(`this is the first occurance of ${s} its on` , [i],);
//         break
//    }
    
// }
//console.log(s);


// 15. Write a ts program to find last occurrence of a character in a given string.

// var n:string ="hello world";
// var s:string = "d";

// for(var i=n.length; i>=0;i--){
//     if(n[i] == s ){
//         console.log(`this is last occurance of ${s} and its index is ${i}`);
//         break
        
//     }
// }


// 16. Write a ts program to search all occurrences of a character in given string.
// var n:string = "heyp coder whats up";
// var x = "p"

// for(var i=0; i<n.length; i++){
//     if(n[i] == x){
//         console.log(`these are all occurances of ${x} on the index number is ${i} `);
        
//     }
// }


// 17. Write a ts program to count occurrences of a character in given string.
// var n:string = "hello wooooooeeeeerld";
// var x:string = "e";
// var sum:number = 0;
// for(var i=0; i<n.length;i++){
//     if(n[i]==x){
//         sum++;
//     }
    
// }
// console.log(sum);


// 18. Write a ts program to find highest frequency character in a string.
// var n:string = "hello world";

// var d:number = 0;

// for(var i=0; i<n.length; i++){
//     if(n[i] == n[i]){
//         d++;
//         if(d > i){
//             console.log("this is the greatest number ", d );
            
//         }
//             //    console.log("this is the greatest number ", d );
 
        

//     }
// }
// console.log(d);

 



// 19. Write a ts program to find lowest frequency character in a string.
// 20. Write a ts program to count frequency of each character in a string.

// 21. Write a ts program to remove first occurrence of a character from string.
// var n:string = "hello world";
// var x:string = "o"
// for(var i=0; i<n.length; i++){
//     if(n[i] == x){
        
//     }
// }
// 22. Write a ts program to remove last occurrence of a character from string.
// 23. Write a ts program to remove all occurrences of a character from string.
// 24. Write a ts program to remove all repeated characters from a given string.
// 25. Write a ts program to replace first occurrence of a character with another in a string.
// var a:string = "heoool world";
// var x:string = "o"
// var z:string = ""

// for(var i=0; i< a.length; i++){
//     if (a[i] == x){
//         z = a.replace(a[i],"l")
//         console.log(z);

//     }
// }

// 26. Write a ts program to replace last occurrence of a character with another in a string.
// var a:string = "helldo world";
// var x:string = "d"
// var z:string = ""

// for(var i=a.length-1; i >= 0; i--){
//     //console.log(i);
    
//     if (a[i] == x){
        
//          z = a.replace(a[i],"l")
//         // console.log(a[i]);
         
//        console.log(z);
//        break;
//      }
// }

// 27. Write a ts program to replace all occurrences of a character with another in a string.
// 28. Write a ts program to find first occurrence of a word in a given string.
// 29. Write a ts program to find last occurrence of a word in a given string.
// 30. Write a ts program to search all occurrences of a word in given string.
// 31. Write a ts program to count occurrences of a word in a given string.
// 32. Write a ts program to remove first occurrence of a word from string.
// 33. Write a ts program to remove last occurrence of a word in given string.
// 34. Write a ts program to remove all occurrence of a word in given string.
// 35. Write a ts program to trim leading white space characters from given string.
// 36. Write a ts program to trim trailing white space characters from given string.
// 37. Write a ts program to trim both leading and trailing white space characters from given string.
// 38. Write a ts program to remove all extra blank spaces from given string.

// conditional operators programming exercises

// 1. Write a ts program to find maximum between two numbers using conditional operator.
// var num:number = 1;
// var num2:number =5;

// var a = (num>num2)? "num1 is greater": "num2 is greater"
// console.log(a);


// 2. Write a ts program to find maximum between three numbers using conditional operator.
// var num:number = 8;
// var num2:number = 14;
// var num3:number = 15;
// var a = (num>num2&& num>num3)?"num1 is great":(num2>num&&num2>num3)?"num2 is greater":"num 3 is great"
// console.log(a);



// 3. Write a ts program to check whether a number is even or odd using conditional operator.
// var x = 9;
// var a = (x%2 ==0)?"its an even number":"its an odd number"
// console.log(a);

// 4. Write a ts program to check whether year is leap year or not using conditional operator.
// var yea:number = 2007;
// var x = (yea%4==0)?"its a leap year":"its not a leap year" 
// console.log(`${yea} ${x} `);

// 5. Write a ts program to check whether character is an alphabet or not using conditional operator.

// var x = "abc";
// var y = Number(x);
// var z = (y % y == 0)?"its a number ":"its a alphabet"
// console.log(`${x} ${z}`);


// List of switch case programming exercises

// 1. Write a ts program to print day of week name using switch case.
// var day:number = 0;

// switch(day){
//     case 1:{
//         console.log("its saturday");
//         break;
        

//     }
//     case 2:{
//         console.log("its sunday");
//         break;
//     }
//     case 3:{
//         console.log("its monday");
        
//     }
//     case 4:{
//         console.log("its tuesday");
        
//     }
//     case 5:{
//         console.log("its wednesday");
        
//     }
//     case 6:{
//         console.log("its thursday");
//          }
//     case 7:{
//         console.log("its friday");
        
//     }     
//     default:{
//         console.log("Enter a valid number");
        
//     }
// }

// 2. Write a ts program print total number of days in a month using switch case.

// 3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
// var alpha:string ="b";

// switch(alpha) {
//     case "a":
//     if(alpha == "a"){
//         console.log("its a vovel");
//         break;
    
//     }
//     case "e":
//     if(alpha == "e"){
//         console.log("its a vovel");
//         break;
    
// }
//     case "i":
//     if(alpha == "i"){
//         console.log("its a vovel");
//         break;
//     }
//     case "o":
//     if(alpha == "o"){
//         console.log("its a vovel");
//         break;
// }
// case "u":
//     if(alpha == "u"){
//         console.log("its a vovel");
//         break;
// }
// default:{
//     console.log("its a consonant");
    
// }
// }


// 4. Write a ts program to find maximum between two numbers using switch case.
// var num1:number = 8;
// var num2:number = 9;

// switch(num1){
//     case(num1):{
//         if(num1>num2){
//             console.log("num1 is greater then num1");
//             break;
            
//         }
//     }
//     default:{
//         console.log("num2 is greater then num1");
//         break;
        
//     }
// }
// 5. Write a ts program to check whether a number is even or odd using switch case.
// var num1:number = 5;

// switch(num1){
//     case(num1):{
//         if(num1 %2 ==0){
//             console.log("its an even number");
//             break;
            
//         }
//     }
//     default:{
//         console.log("its an odd number");
//         break;
//     }
// }
// 6. Write a ts program to check whether a number is positive, negative or zero using switch case.
// var num:number = 4;

// switch(num){
//     case(num):{
//         if(num>0){
//             console.log("its a positive number");
//             break;    
//         }
//     }
//     case(num):{
//         if(num==0){
//             console.log("its zero");
//             break;    
//         }
//     }
//     default:{
//         console.log("its a negative number");
//         break;
        
//     }
//     }
    
    

// 7. Write a ts program to find roots of a quadratic equation using switch case.
// 8. Write a ts program to create Simple Calculator using switch case.
var sum:number=0;
var num1:number = 0;
var num2:number = 0;
// var operator = + - * /

switch(sum){
    case + :{
        sum = num1 + num2
        console.log("sum");
        break;
        
    }
}
////////////////////


