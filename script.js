//your JS code here. If required.
let str=prompt("Enter a string:");
console.log(str);
let obj={};
for(let char of str){
	if(obj[char]) obj[char]++;
	else obj[char]=1;
}
console.log(obj);
let ans="";
for(let key in obj){
	if(obj[key]===1]) ans+=key;
}
if(ans==="")ans=`' '`;
alert(ans);