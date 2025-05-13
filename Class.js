        
//         document.writeln("Constuctor with parameters")
//         document.writeln("<br>")
// class student{
//     constructor(name,id){
//         this.name=name;
//         this.id=id;
//     }
//     school(){
//         document.writeln("Student Name is : "+this.name);
//         document.writeln("<br>")
//         document.writeln("Student RollNum is : "+this.id)
//     }
// }
// const std=new student("Shiva",1)
// std.school();//o/p: shiva,1


//         document.writeln("<br>")
//         document.writeln("__________________________________")
//         document.writeln("<br>")
//         document.writeln("CONSTRUCTOR WITH SIMPLE LOGIC")
//         document.writeln("<br>")


// class rectangel{
//     constructor(length,width,area){
//         this.length=length;
//         this.width=width;
//         this.area=width*length;
//     }
// showArea(){
//     document.writeln("Area of rectangle is "+this.area)
// }
// }
// const ar=new rectangel(5,3);
// ar.showArea();


//         document.writeln("<br>")
//         document.writeln("__________________________________")
//         document.writeln("<br>")
//         document.writeln("constructor with condition check")
//         document.writeln("<br>")


// class account{
//     constructor (owner,balance){
//         this.owner=owner;
//         if(balance<0){
//             this.balance=0;
//         }else{
//             this.balance=balance;
//         }
//     }
//     showDetails(){
//         document.writeln("Owner is : "+this.owner);
//         document.writeln("<br>")
//         document.writeln("Owner balance is : "+this.balance);
//     }
//     }
// const details=new account("shiva",500-44)
// details.showDetails();





// document.writeln("<br>")
//         document.writeln("__________________________________")
//         document.writeln("<br>")
//         document.writeln("Start with Async, await functions")
//         document.writeln("<br>")

// function delay(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Delay time Completed ")
//         },5000)
//     });
// }

// async function runTask() {
//     document.writeln("Starting..!........");
//      document.writeln("<br>")
//     const result=await delay();
//     document.writeln(result);
//      document.writeln("<br>")
//     document.writeln("Finished......");
// }
// runTask();




// function fetchUser(isError){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(isError){
//                 reject("Filed to fetch User")
//             }else{
//                 resolve("User data loaded.......");
//             }
//         },1000);
//     });

// }
// async function loadUser(){
//     try{
//         const user=await fetchUser(false);
//         document.writeln(user);
//     }catch(error){
//         document.writeln("Error: ", error);
//     }
// }
// loadUser();





// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(Response=> {
//     if(!Response.ok){
//         throw new error("Could not fetch resource");
//     }
//     return Response.json();
// })

// .then(data=> console.log(data))
// .catch(error=> console.log(error));

// fetchData();
// async function fetchData() {
//     try {
//         const PokeName= document.getElementById("PokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokeName}`);
        
//         if(!response.ok){
//             throw new error("could not find resource");
//         }const data=await response.json();
//         const pokemonSprite=data.sprites.front_default;
//         const imgElement=document.getElementById("pokemonSprite")
//         imgElement.src= pokemonSprite;
//         imgElement.style.display="block";
        
//     } catch (error) {
//         console.log(error);  
//     }
// }



// let s= document.getElementById("search")
// s.onkeypress = debounce

// let counter=0
// function debounce(){
//     setTimeout(wrap,3000)
    
// }
// function wrap(){
//     console.log("calling", counter++);
    
// }


// function Findduplicates(arr){
//     const duplicates= arr.filter((item, index)=> arr.indexOf(item) !==index)
//    return duplicates.filter((item,index,self)=>self.indexOf(item)===index)
// }
// let dupli=Findduplicates([4,5,3,2,4,5,3,8,1,6]);
// console.log(dupli);


// function dup(arr) {
//   const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
//   return duplicates.filter((item, index, self) => self.indexOf(item) === index);
// }

// let dupli = dup([4, 5, 3, 2, 4, 5, 3, 8, 1, 6]);
// console.log(dupli); // Output: [4, 5, 3]


// function dup(arr) {
//   const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
//   return duplicates.filter((item, index) => duplicates.indexOf(item) === index);
// }



// function Findduplicates(arr){
//     const duplicates=arr.filter((iterm, index)=>arr.indexOf(iterm)!==index)
//     return duplicates.filter((iterm, index, self)=>self.indexOf(iterm)===index);
// }
// let dup=Findduplicates([1,2,3,4,5,5,3,4,6]);
// console.log("Duplicate Array is : "+ dup);


// function reverseString(string){
//     let rev="";
//     for(let i=string.length-1;i>=0;i--){
//         rev +=string[i]
//     }
//     return rev;
// }
// console.log(reverseString("lala"));




function revString(str){
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev +=str[i];
    }
    return rev;
}
console.log("Reverse String is : "+ revString("avihs itnaguhtop"));





















































