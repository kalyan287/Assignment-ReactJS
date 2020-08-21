//************************************************** VERY EASY **************************************************************
//Q1 Convert Minutes into Seconds
/*
function convertsec(n)
{
  n=n*60;
  console.log(n);
}
convertsec(5)
convertsec(3)
convertsec(2)

*/

//Q2 Divides Evenly
/*
a1=98;b1=2;
a2=40;b2=7;
a3=7;b3=40;

function diveven(a,b)
{
  if(a>=b){
    n=a%b
    if(n===0){
      console.log("True");
    }
    else{
      console.log("False")
    }
  }else{
    console.log("a less than b")
  }
}

diveven(a1,b1)
diveven(a2,b2)
diveven(a3,b3)

*/
//************************************************** EASY **************************************************************

//Q1 Count Instances of a Character in a String
/*
var a1="KalyAn";b1='a';
var a2="sai";b2='t';

function charcheck(str,b){
    count=0;
    var ch = str.toLowerCase();
    for(i=0;i<ch.length;i++){
        if(ch[i]===b){
            count=count+1;
        }else{
            continue;
        }
    }
console.log(count);
}
charcheck(a1,b1)
charcheck(a2,b2)

*/

//Q2.Add up the Numbers from a Single Number
/*

n=4
m=10102
function addup(a){
  if(a>0 && a<1001)
  {
    for(i=a-1;i>0;i--){
      a=a+i
    }
    console.log(a)
  }
}
addup(n)
addup(m)
addup(13)
addup(600)

*/

//Q3.Replace vowels with another character
/*
function repVowel(str){
  str=str.toLowerCase();
  var newstr = '';
  newstr = str.replace(/a/g,'1');
  newstr = newstr.replace(/e/g,'2');
  newstr = newstr.replace(/i/g,'3');
  newstr = newstr.replace(/o/g,'4');
  newstr = newstr.replace(/u/g,'5');


  return newstr;
}

console.log(repVowel('karachi'));
console.log(repVowel('chembur'));
console.log(repVowel('khandbari'));

*/

//************************************************** MEDIUM **************************************************************

//Q1.Reverse Words Starting with a Particular Letter
/*

function Revstr(str,char){
  str= str.toLowerCase();
  var array = str.split(' ');
  for(var i=0;i<array.length;i++){
      if(array[i].charAt(0)==char){
          array[i] = array[i].split("").reverse().join("");
      }
  }
  console.log(array.join(' '));
}
Revstr('word searches are super fun','s');
Revstr('First man to walk on the moon','m');
Revstr('peter piper picked pickled peppers','p');

*/

//Q2. Hitting the Jackpot

/*
function FindDups(array) {
  let a = [];
array.map(x=>{
  if(!a.includes(x))
  {

      a.push(x);
  }
 
})
    if(a.length>1)
    {
        return false;
    }
    else
    {
        return true;
    }
  
};

console.log( FindDups(["abc","abc","abc","abc"]));
console.log( FindDups(["@","@","@","@"]));
console.log( FindDups(["SS","SS","SS","SS"]));
console.log( FindDups(["&&","&","&&&","&&&&"]));
console.log( FindDups(["SS","SS","SS","Ss"]));

*/

//Q3. Remove Duplicates from an Array

/*

function removeDups(array) {
  let a = [];
array.map(x=>{
  if(!a.includes(x))
  {

      a.push(x);
  }
 
})
    return a;
  
};

console.log(removeDups(["1","0","1","0"]));
console.log(removeDups(["The","Big","cat"]));
console.log(removeDups(["John","taylor","John"]));

*/

//************************************************** HARD **************************************************************

//Q1. Get Real Type

/*

function Realtype(input)
  {
    var result = (Object.prototype.toString.call(input));
    console.log(result.substring(8).replace(']',''));

     
  }
  Realtype(1);
  Realtype("a");
  Realtype(null);
  Realtype([]);
  Realtype(true);
*/

//Q2. Numbers in Strings
/*

function NumInStr(input){
  let a = [];
  for(var i=0;i<input.length;i++)
  {
      let str = String(input[i]);

  for( let i = 0; i < str.length; i++){
      if(!isNaN(str.charAt(i))){
          if(str.charAt(i)!=" ")
          a.push(str);
          break;
      }
    }
  }
return a;
}
console.log(NumInStr(["1a","a","2b","b"]));
console.log(NumInStr(["abc","abc10"]));
console.log(NumInStr(["abc","ab10c","a10bc","bcd"]));
console.log(NumInStr(["this is test","test1"]));

*/
