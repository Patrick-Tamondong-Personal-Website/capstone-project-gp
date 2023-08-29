import db from '../../../../db/dummydb'
import Product from '../../../../types/Product.type'
export const getItem = (id:number) => {
    try {
        const product = db?.products?.filter(product => product?.id === id)[0]
        return product
    } catch (err) {
        console.log('Error', err)
    }
}

export const listItems = () => {
    try {
        return db?.products
    } catch (err) {
        console.log('Error', err)
    }
}

export const editItem = (id:number, data:Product) => {
    try {
        const index = db.products.findIndex(product => product.id === id)

        if (index === -1) throw new Error('Product not found')
        else {
            db.products[index] = data
            return db.products[index]
        }        
    } catch (err) {
        console.log('Error', err)
    }
}

export const addItem = (data: any) => {
    try {  
        const newProduct = { id: db.products.length + 1, ...data }
        db.products.push(newProduct)
        return newProduct

    } catch (err) {
        console.log('Error', err)
    }
}

export const deleteItem = (id:number) => {
    try {
        // delete item from db
        const index = db.products.findIndex(product => product.id === id)

        if (index === -1) throw new Error('Product not found')
        else {
            db.products.splice(index, 1)
            return db.products
        }
    } catch (error) {
        
    }
}