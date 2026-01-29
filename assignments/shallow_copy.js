const user = {
    id: 101,
    name: "Ravi",
    preferences: {
    theme: "dark",
    language: "en"
    }
};
//Create a shallow copy of user
userCopy={...user};
//name in the copied object
userCopy.name="Manoghna";
//preferences.theme in the copied object
userCopy.preferences.theme="light";
console.log(user);
console.log(userCopy);
