//22 th assignment (4th may )(intro to oops ).js


// question 1 

class shape{
    lenght;
    breadth;
    height;
    constructor(lenght,breadth,height){
        this.lenght  = length
        this.bredth  = breadth
        this.height = height 
    }
    area(lenght,breadth,height){
        return lenght*breadth*height
    }
}

var k = new shape()
console.log(k.area(5,6,7))



// question 2 

class shape{
    #lenght;
    #breadth;
    #height;
    // constructor(lenght,breadth,height){
    //     this.#lenght  = length
    //     this.#breadth  = breadth
    //     this.#height = height 
    // }
    set_lenght(lenght){
        this.#lenght = lenght
    }
    set_breadth(breadth){
        this.#breadth = breadth
    }
    set_height(height){
        this.#height = height
    }
    
    get_lenght(){
        return this.#lenght
    }
    get_breadth(){
        return this.#breadth
    }
    get_height(){
        return this.#height
    }


    
    // #area(){
    //     return get_lenght*get_breadth*get_height
    // }
    get_area(){
      return this.get_lenght()*this.get_breadth()*this.get_height()
    }

}
var k = new shape()
k.set_lenght(7)
k.set_breadth(6)
k.set_height(8)
console.log(k.get_area())



//question 3 


class shape{
    #lenght;
    #breadth;
    #height;
    // constructor(lenght,breadth,height){
    //     this.#lenght  = length
    //     this.#breadth  = breadth
    //     this.#height = height 
    // }
    set_lenght(lenght){
        this.#lenght = lenght
    }
    set_breadth(breadth){
        this.#breadth = breadth
    }
    set_height(height){
        this.#height = height
    }
    
    get_lenght(){
        return this.#lenght
    }
    get_breadth(){
        return this.#breadth
    }
    get_height(){
        return this.#height
    }


    
    // #area(){
    //     return get_lenght*get_breadth*get_height
    // }
    get_area(){
      return this.get_lenght()*this.get_breadth()*this.get_height()
    }

}


class cube extends shape{
    constructor(lenght,breadth,height){
        super()
        this.set_lenght(lenght)
        this.set_breadth(breadth)
        this.set_height(height)
    }

}
class circle extends shape{
    constructor(radius){
        super()
        this.set_lenght(radius)
    }
    get_area(){
        return 3.14*this.get_lenght()*this.get_lenght()   }

}


var k = new cube(1,2,3)
console.log(k.get_area())

var k1 = new circle(2)
console.log(k1.get_area())






