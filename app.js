let user = {
    name: "Marilyn",
    age: 42,
    eyeColor: "hazel",

  };
  
  user.sayHi = function() {
    alert(`Hello, ${this.name}!`);
  };
  
  user.sayHi();

  let arr = ["I", "Go", "Home"];

    delete arr[0];

    alert( arr );