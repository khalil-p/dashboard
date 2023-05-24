import axios from "axios";

const getAllCategories = async () => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_FOOD_APP_API_1
        );
        return data;
    } catch (error) {
        return { error };
    }
};

const addCategory = async (formData) => {
    try {
        return await axios.post(
            process.env.REACT_APP_FOOD_APP_API_2,
            formData,
        );
    } catch (error) {
        console.log(error)
        return error;
    }
};

const getAllProducts = async () => {
    try {
        const { data } = await axios.get(process.env.REACT_APP_FOOD_APP_API_3)
        console.log(data);
        return data
    } catch (error) {
        return error
    }
}

const addProduct = async (formData) => {
    console.log(formData)
    try {
        return await axios.post(process.env.REACT_APP_FOOD_APP_API_4, formData)
    } catch (error) {
        console.log(error)
        return error
    }
}

const loginAPICall = async (item) => {
    try {
        const result = await axios.post(process.env.REACT_APP_FOOD_APP_GATEWAY_API,
            item
        );
        return result
    } catch (error) {
        return error;
    }
};

export let adminServices = {
    getAllProducts: getAllProducts,
    getAllCategories: getAllCategories,
    loginAPICall: loginAPICall,
    addCategory: addCategory,
    getAllProducts: getAllProducts,
    addProduct: addProduct
};

