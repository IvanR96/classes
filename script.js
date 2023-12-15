
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

/*
// getter example && setter example
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