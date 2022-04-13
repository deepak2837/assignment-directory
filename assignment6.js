// assignment 6 for date 28
// assignment no. 1 
// Program to demonstrate Object destructuring in nested objects





// as in normal we can do it like this 
const user = {
    ab: 34,
    name: 'deepak',
    ab1: 35
};
const { name } = user;
console.log(name); //prints: Fred



// we can assign the property to different name 
const user1 = {
    ab: 34,
    name: 'deepak',
    ab1: 35
};
const { name:anothername } = user1;
console.log(anothername); //prints: Fred





// nested rest destructing of object can be done like this 
const object = {
    "let": "me",
    "start": "a",
    "project": "which",
    "has": "differnent",
    "names": {name1:"demo1",name2:"demo2",name3:"demo3"}
}
const { names: { name1,...name2 } } = object
console.log(name2)



//we can assign and nest the value of object this too by object destructring 
const user = {
    index: 1,
    name: 'deepak1',
    age: 2
};
const { education: { school: { name = 'deepak' } = {} } = {} } = user;
console.log(name); //prints: Dunno




// we can do it like this also 

const user = {
    index: 01,
    name: 'deepak',
    age: 2
};
const { education: { school: { name}} = {school:{name:"deepak2"}} }= user;}
console.log(name); 














// assignment no. 2 
// Program to clone the object and change the property and then iterate the array of objects using inbuilt
// functions and to console the object property and frame a meaning full sentence."

 const user = {                    //parent object 
    index: 01,
    name: 'deepak',
    age: 2
};

const newuser = new Object(user)   //cloning the parent object 
newuser.name = "new deepak"      ///changing the property of parent object 
newuser.age = "32"
console.log(newuser)

for (let i in newuser) {               //iterating the array of objects using inbulit function for loop to print key and value pair  
    console.log(i,newuser[i])
}

Object.entries(user).forEach(([key, value]) => {
    console.log(`my name is ${newuser.name} and my age is  ${newuser.age}`) // printing the object properties in meaningnful sentences 
});



