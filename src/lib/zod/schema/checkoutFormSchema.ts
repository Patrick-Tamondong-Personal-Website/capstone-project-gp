import { z } from "zod";
// import { 
//     AddressModel, 
//     PaymentDetailModel, 
//     PaymentMethodModel, 
//     ShippingDetailModel,
//     ShippingMethodModel,
//     PaymentOptionModel 
// } from "../models";

// enum PaymentType {
//     CASH = "CASH",
//     DEBIT = "DEBIT", 
//     CREDIT = "CREDIT",
//     BITCOIN = "BITCOIN",
//     PAYPAL = "PAYPAL",
//     AFFIRM = "AFFIRM"
// }

// const checkoutModel2 = 
//     z
//     .object({
//         ...AddressModel.shape,
//         ...PaymentDetailModel.shape,
//         ...PaymentMethodModel.shape,
//         ...ShippingDetailModel.shape,
//         ...ShippingMethodModel.shape,
//         ...PaymentOptionModel.shape
//     });

const checkoutModel = 
    z
    .object({
        street: z.string(),
        unit: z.string(),
        city: z.string(),
        zipcode: z.string(),
        state: z.string(),
        country: z.string(),
        planet: z.string().optional(),
        solarSystem: z.string().optional(),
        galaxy: z.string().optional(),
        localGroup: z.string().optional(),
        localCluster: z.string().optional(),
        universe: z.string().optional(),

        paymentType: z.enum(['CASH', 'DEBIT', 'CREDIT', 'BITCOIN', 'PAYPAL', 'AFFIRM']),
        cardDetails: z.object({
            cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
            expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, "Invalid expiration date format MM/YY or MM/YYYY"),
            cvv: z.string().length(3, "CVV must be 3 digits"),
            cardholderName: z.string().nonempty("Name on card can't be empty"),
        }).optional(),
    }).refine(
        data => data.paymentType !== 'CREDIT' || (data.paymentType === 'CREDIT' && data.cardDetails != null),
        {
            message: 'Card details are required',
            path: ['cardDetails'],
        }
    );

export {  checkoutModel };
