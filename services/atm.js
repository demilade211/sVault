import axios from ".";

export const checkPin = async (atmId,data) => {


    try {
        const res = await axios.post(`/api/v1/atm/check/${atmId}`,data)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    } 
}

export const getNameMessage = async (atmId) => {


    try {
        const res = await axios.get(`/api/v1/atm/check/${atmId}`)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    } 
}

export const getBanks = async () => { 

    try {
        const res = await axios.get(`/api/v1/withdrawal/list/bank`)

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

export const getAccDet = async (data) => { 

    try {
        const res = await axios.post(`/api/v1/withdrawal/account`,data)

        const { success, message } = res.data
        return res.data 

    } catch (error) {
        return error;

    }


}

export const withdraw = async (atmId,data) => { 

    try {
        const res = await axios.post(`api/v1/withdrawal/withdraw/${atmId}`,data)

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
 
 