export default interface Product{      //SQL
    id:number,          //int
    name:string         //varchar
    price:number,       //decimal
    description:string, //text
    image:string,       //varchar
    SKU:string          //varchar 
    categoryId:number   //int
    ratingId:{          //int
      rate:number,      //int
      count:number      //int
    }
    createdAt:string   //timestamp
    modifiedAt:string  //timestamp
    deletedAt:string   //timestamp
 }