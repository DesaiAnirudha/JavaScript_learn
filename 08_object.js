const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//  console.log(JsUser.email)
//  console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(JsUser.lastLoginDays[0])
// console.log(mySym)




// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }
console.log("object 3=", obj3);

const obj6 = Object.assign({}, obj1, obj2, obj4)
console.log("object by using assign() ",obj6)

const obj5 = {...obj1, ...obj2,...obj4}
console.log(obj5);



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 12,
        email: "ijkdjkj@gmail.com"
    },
    {
        id: 78,
        email: "ueyuhjksnknch@gmail.com"
    },
]

console.log(users[0].email,users[2].id)
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
