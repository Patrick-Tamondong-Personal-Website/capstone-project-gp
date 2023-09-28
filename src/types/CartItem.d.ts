//import { CartItem } from "@prisma/client"
export type CartItemType = {
    id:number,           //int
    //productId:number,   //int
    productName:string, //string
    imageUrl?:string,    //string
    price:number,       //int
    //cartId:number,   //int
    quantity?:number,     //int
    //promotionId:string,   //timestamp
};
