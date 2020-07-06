// console.log(this === global);

// Object Rule
var objectName = {
    name : "Real",
    anotherObj : {
        name: "Ashiouzzaman",
        msg: function(){
            console.log("My name is " + this.name);
        }

    }

}

objectName.anotherObj.msg();