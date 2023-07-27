// завдання 1 - 2 - 3




const people = [
    {
        name: "Max",
        age: "14",
        eyeColor: "green",
        gender: "Чоловік",
        isActive:"Online",

},
{
    name: "Any",
    age: 18,
    eyeColor: "blue",
    gender: "Жінка",
    isActive:"Ofline",
},
{
    name: "Nastya",
    age: 25,
    eyeColor: "red",
    gender: "Жінка",
    isActive:"Ofline",
},
{
    name: "Sanya",
    age: 14,
    eyeColor: "orange",
    gender: "Чоловік",
    isActive:"Online",
},
]

const names = people.map(people => people.name);
console.log(names);

const eyes = people.map(people => people.eyeColor);
console.log(eyes);

const genderWooman = people.filter(people => people.gender === "Жінка");
console.log(genderWooman);

const genderMan = people.filter(people => people.gender === "Чоловік");
console.log(genderMan);


const Ofline = people.filter(people => people.isActive === "Ofline");
console.log(Ofline);


const Online = people.filter(people => people.isActive === "Online");
console.log(Online);













