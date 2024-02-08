import axios from ".";
import cookie from "js-cookie"
import catchErrors from "../utils/catchErrors"
 

export const initialize = async (data) => {
    try { 
        

        const res = await axios.post(`/api/v1/payment/`,data) 

        const { success, message,reference } = res.data

        return res.data

    } catch (error) { 
         return {success:false,message:catchErrors(error)}
    }
}

export const makeRecurringPayment = async (amount,email,authorization_code,atmInfo) => {
    try {

        const data = {
            amount,
            email,
            authorization_code,
            ...atmInfo
        } 

        const res = await axios.post(`/api/v1/payment/pay`,data)  

        return res.data

    } catch (error) { 
         return {success:false,message:catchErrors(error)}
    }
}