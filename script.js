
// example of how setters and getters work
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


// getter example && setter example
document.addEventListener("DOMContentLoaded", function(){
let user = {
    name: "John",
    lastName: "Wick",

    get fullName() {
        return ` My name is ${this.name} ${this.lastName}`;
    },

    set fullName(value){
        [this.name, this.lastName] = value.split(" ");
    }

};

/* setter example*/  user.fullName = "Jay Leno";

let info = document.getElementById('info');

info.textContent = user.fullName;

});





