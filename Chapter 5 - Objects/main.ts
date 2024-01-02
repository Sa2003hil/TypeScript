type Obj = {
    height: number;
    width: number;
    gender?: string;  // ? makes it optional so that it can be omitted if needed
    address:{
        city:string;
        state:string;
        country:string;
    }
};

const a: Obj = {
    height: 5,
    width: 6,
    gender:"male",
    address:{
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    
    }
}

// here we didn't added gender property it will not give error
const b:Obj={
    height:5,
    width:6,
    address:{
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    
    }

}

// class in Typescript

interface c{
    height:number,
    weight:number,
    gender:string
}

// interface supports inheritence and you cann add new property to instance of this type
interface newC extends c{
    BMI:string
}