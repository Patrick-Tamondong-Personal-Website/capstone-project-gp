import { Request, Response } from 'express'

import { getItem, listItems, editItem, addItem, deleteItem } from '../models/shippingMethod.models'

export const getShippingMethod = (req:Request, res:Response) => {
    try {
        const resp = getItem(parseInt(req.params.id))
        res.status(200).json(resp)
        console.log(resp);
        
    } catch (err) {
        res.status(500).send(err)
    }
}

export const listShippingMethods = (_req:Request, res:Response) => {
    try {
        const resp = listItems()
        res.status(200).json(resp)
        console.log(resp);
    } catch (err) {
        res.status(500).send(err)
    }
}

export const editShippingMethod = (req:Request, res:Response) => {
    try {
        const resp = editItem(parseInt(req.params.id), req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const addShippingMethod = (req:Request, res:Response) => {
    try {
        const resp = addItem(req.body)
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteShippingMethod = (req:Request, res:Response) => {
    try {
        const resp = deleteItem(parseInt(req.params.id))
        res.status(200).json(resp)

    } catch (err) {
        res.status(500).send(err)
    }
}