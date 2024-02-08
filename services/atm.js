import axios from ".";

export const checkPin = async (data) => {


    try {
        const res = await axios.post(`/api/v1/admin/product/create`,data)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    } 
}

export const getMyAtms = async () => { 

    try {
        const res = await axios.get(`/api/v1/atm`)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    }


}


export const getOneAtm = async (atmId) => {


    try {
        const res = await axios.get(`/api/v1/atm/${atmId}`)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    }


}

export const getAtmWithdrawals = async (atmId) => {


    try {
        const res = await axios.get(`/api/v1/withdrawal/withdraw/${atmId}`)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    }


}
 
 