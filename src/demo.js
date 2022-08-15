class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present(emoji,text) {
    return  emoji+text+emoji;
  }
  
  
  show(text)
  {
    return text
  }

}

class Model extends Car {
  constructor(brand, mod) {
     super(brand);
    this.model = mod;
  }
  show() {
    let textdecurator=this.present(" 🚓 ","I have a car,It's Awesome Car")
    return super.show(textdecurator)
  } 
}

let myCar = new Model("Ford", "Mustang");

console.log(myCar.show())

//🚓"I have a car,It's Awesome Car"