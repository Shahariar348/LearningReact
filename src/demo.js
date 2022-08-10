function myFunc(theObject) {
    theObject.brand = "Toyota";
  }
  
  /*
   * Declare variable 'mycar';
   * create and initialize a new Object;
   * assign reference to it to 'mycar'
   */
  const mycar = {
    brand: "Honda",
    model: "Accord",
    year: 1998
  };
  
  /* Logs 'Honda' */
  console.log(mycar.brand);
  
  /* Pass object reference to the function */
  myFunc(mycar);
  
  /*
   * Logs 'Toyota' as the value of the 'brand' property
   * of the object, as changed to by the function.
   */
  console.log(mycar.brand);