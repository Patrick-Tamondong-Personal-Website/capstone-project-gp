import supertest from 'supertest' // Import supertest
import server from '../../index' // Import the server object
const requestWithSupertest = supertest(server) // We will use this function to mock HTTP requests

describe('GET "/"', () => {
    test('GET "/" returns all products', async () => {
        const res = await requestWithSupertest.get('/products')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual([
            {     
                id: 0,        
                name: "Big Badda Boom",       
                price: 100000000000,      
                description: "Your target is hiding on a planet? No problem. Just, Blow the whole thing up", 
                image: "string",
                SKU:"X509k840",      
                categoryId: 100,
                rateId:{ 
                  rate: 4.5,    
                  count: 160982     
                },
                createdAt: date,  
                modifiedAt:"",  
                deletedAt:""  
             },
             {      
                id: 1,       
                name: "Galaxy Sizzler",      
                price: 8000000000000,     
                description: "Cook a whole galaxy and enjoy a buffet in mere hours",
                image: "string",
                SKU:"S29k4Y0",          
                categoryId:200, 
                ratingId:{     
                  rate: 4.7,     
                  count: 34098   
                },
                createdAt: date,  
                modifiedAt:"",  
                deletedAt:"" 
             },
             {      
                id: 2,         
                name: 'Quantum Space Destructor XS',        
                price: 5000000000,    
                description: 'Destroy the Space-Time Continuum in Quantum Level', 
                image: "string",      
                SKU:"X834VW6T0",          
                categoryId: 100,  
                ratingId:{          
                  rate: 4.2,      
                  count: 24982      
                },
                createdAt: date,   
                modifiedAt:"",  
                deletedAt:""
             },
        ])
    })
})

describe('GET "/:id"', () => {
    test('GET "/:id" returns given pet', async () => {
        const res = await requestWithSupertest.get('/products/1')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual(
            {      
                id: 1,       
                name: "Galaxy Sizzler",      
                price: 8000000000000,     
                description: "Cook a whole galaxy and enjoy a buffet in mere hours",
                image: "string",
                SKU:"S29k4Y0",          
                categoryId:200, 
                ratingId:{     
                  rate: 4.7,     
                  count: 34098   
                },
                createdAt: date,  
                modifiedAt:"",  
                deletedAt:"" 
             },
        )
    })
})

describe('PUT "/:id"', () => {
    test('PUT "/:id" updates products and returns it', async () => {
        const res = await requestWithSupertest.put('/products/1').send({      
            id: 1,       
            name: "Galaxy Sizzler",      
            price: 8000000000000,     
            description: "Cook a whole galaxy and enjoy a buffet in mere hours",
            image: "string",
            SKU:"S29k4Y0",          
            categoryId:250, 
            ratingId:{     
              rate: 4.6,     
              count: 37098   
            },
            createdAt: date,  
            modifiedAt:"",  
            deletedAt:"" 
         },)
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual({      
            id: 1,       
            name: "Galaxy Sizzler",      
            price: 8000000000000,     
            description: "Cook a whole galaxy and enjoy a buffet in mere hours",
            image: "string",
            SKU:"S29k4Y0",          
            categoryId:200, 
            ratingId:{     
              rate: 4.7,     
              count: 34098   
            },
            createdAt: date,  
            modifiedAt:"",  
            deletedAt:"" 
         },)
    })
})

describe('POST "/"', () => {
    test('POST "/" adds new product and returns the added item', async () => {
        const res = await requestWithSupertest.post('api/v1/products').send({      
            name: "Galaxy Sizzler",      
            price: 8000000000000,     
            description: "Cook a whole galaxy and enjoy a buffet in mere hours",
            image: "string",
            SKU:"S29k4Y0",          
            categoryId:200, 
            ratingId:{     
              rate: 4.7,     
              count: 34098   
            },
            createdAt: date,  
            modifiedAt:"",  
            deletedAt:"" 
         },)
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual({      
            id: 3,       
            name: "Galaxy Sizzler",      
            price: 8000000000000,     
            description: "Cook a whole galaxy and enjoy a buffet in mere hours",
            image: "string",
            SKU:"S29k4Y0",          
            categoryId:200, 
            ratingId:{     
              rate: 4.7,     
              count: 34098   
            },
            createdAt: date,  
            modifiedAt:"",  
            deletedAt:"" 
         },)
    })
})

describe('DELETE "/:id"', () => {
    test('DELETE "/:id" deletes given product and returns updated list', async () => {
        const res = await requestWithSupertest.delete('api/v1/products/2')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toEqual([
            {     
                id: 0,        
                name: "Big Badda Boom",       
                price: 100000000000,      
                description: "Your target is hiding on a planet? No problem. Just, Blow the whole thing up", 
                image: "string",
                SKU:"X509k840",      
                categoryId: 100,
                rateId:{ 
                  rate: 4.5,    
                  count: 160982     
                },
                createdAt: date,  
                modifiedAt:"",  
                deletedAt:""  
             },
             {      
                id: 1,       
                name: "Galaxy Sizzler",      
                price: 8000000000000,     
                description: "Cook a whole galaxy and enjoy a buffet in mere hours",
                image: "string",
                SKU:"S29k4Y0",          
                categoryId:200, 
                ratingId:{     
                  rate: 4.7,     
                  count: 34098   
                },
                createdAt: date,  
                modifiedAt:"",  
                deletedAt:"" 
             },
             {      
                id: 3,       
                name: "Galaxy Sizzler",      
                price: 8000000000000,     
                description: "Cook a whole galaxy and enjoy a buffet in mere hours",
                image: "string",
                SKU:"S29k4Y0",          
                categoryId:200, 
                ratingId:{     
                  rate: 4.7,     
                  count: 34098   
                },
                createdAt: date,  
                modifiedAt:"",  
                deletedAt:"" 
             }
        ])
    })
})