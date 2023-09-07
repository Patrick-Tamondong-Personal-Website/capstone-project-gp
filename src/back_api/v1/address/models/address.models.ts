import client from "@lib/client";
import { Address } from "@prisma/client";


const getItem = async (id:number) => {
    
    const item = await client.address.findUnique({
        where: {
            id: id
        }
    })
    
    return item;
}

const addItem = async () => {
    return
}

const updateItem = async (id:number, ) => {
    return
}

const deleteItem = async (id:number) => {
    const item = await client.address.delete({
        where: {
            id: id
        }
    })
    return item;
}





export { getItem }