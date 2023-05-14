import axios from "axios";


const getAllCategories = async () => {
    try {
        const { data } = await axios.get(
            'https://fooddeliveryapp.onrender.com/api/getAllCategory'
        );
        return data;
    } catch (error) {
        return { error };
    }
};


const loginAPICall = async (item) => {
    try {
        const result = await axios.post("https://fooddeliveryapp.onrender.com/api/admin/login",
            item
        );
        return result
    } catch (error) {
        return error;
    }
};

const addCategory = async (formData) => {
    try {
        return await axios.post(
            "https://fooddeliveryapp.onrender.com/api/addCategory",
            formData,
        );
    } catch (error) {
        console.log(error)
        return error;
    }
};

const getAllProducts = async () => {
    try {
        const { data } = await axios.get("https://fooddeliveryapp.onrender.com/api/getAllProducts")
        console.log(data);
        return data
    } catch (error) {
        return error
    }
}




export let adminServices = {
    getAllProducts: getAllProducts,
    getAllCategories: getAllCategories,
    loginAPICall: loginAPICall,
    addCategory: addCategory,
    getAllProducts: getAllProducts
};

