
// **********example of how setters and getters work*********
/*



let obj = {
    // getter
    get propName(){
        let obj = obj.propName;
    },

    // setter
    set propName(value){
        obj.propName = value;
    }
};
*/

/*
// *********getter example && setter example**************
document.addEventListener("DOMContentLoaded", function(){
let gameInfo = {
    name: "Doom 3",
    system: "PC",

    get fullInfo(){
        return `${this.name} is playable on ${this.system}`;
    },

    set fullInfo(value){
        gameInfo.fullInfo = value.split(" ");
    }
};

text = document.getElementById('info');

text.textContent = gameInfo.fullInfo;


});
*/


// *********CLASS EXAMPLE HERE BELOW**********

/*
document.addEventListener("DOMContentLoaded", function(){
class User{
    constructor(name){
        this.name = name;
    }

    sayHello(){
        alert(this.name);
    }
}

let user = new User("Johnny Bravo");


text = document.getElementById('info');

text.textContent = user.sayHello();

});
*/



// **********CLASS EXAMPLE 2 WITH SETTER/GETTER**********
/*
class User{
    constructor(name){
        // invokes the setter
        this.name = name;
    }

    // getter 
    get name(){
        return this._name;
    }

    // setter
    set name(value){
        if (value.length < 4){
            alert("name is too short");
            return;
        }
        this._name = value;
    }

}


let user = new User("Carmine");

alert(user.name);


user = new User(""); // error since name is too short

*/


// ************ BUTTON CLASS EXAMPLE*************
/*
class Button {
    constructor(value){
    this.value = value;
    }

    click = () => {
        alert(this.value);
    }
}

let button = new Button('Hello There');

setTimeout(() => button.click(), 1000);
*/