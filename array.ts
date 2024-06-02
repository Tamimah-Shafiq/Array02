//Assignment 1: Building Your Friend List
//Learning Objective: Practice working with objects and arrays in TypeScript to create a data
//structure.
//Task: Create a program that manages a simple friend list.
//1. Define an object named people containing an empty array called friends.
//2. Create three separate objects, each representing a friend, with properties like firstName,
//lastName, and optionally id.
//3. Add these friend objects to the friends array within the people object.
//4. Output the entire people object to the console, displaying your information and your
//friend list.

let people = {
    Friends:[] as {firstName:string; lastname:string; id?:number;} []
};
let friend01 = {
    firstname:"Bakhtawer",
    lastname:"Zulfiqar",
    id:1029
};
let friend02 = {
    firstname:"Aina",
    lastname:"Muqqadas",
    id:1030
};
let  friend03 = {
    firstname:"Laiba",
    lastname:"Mukhtar",
    id:1031
};
console.log(people,friend01,friend02,friend03,"People");