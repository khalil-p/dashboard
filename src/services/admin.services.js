import axios from "axios";
// fake api
const getAllProducts = async () => {
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return { error };
    }
};

const getAllCategories = async () => {
    try {
        const { data } = await axios.get(
            "https://fooddeliveryapp.onrender.com/api/getAllCategory"
        );
        // console.log(data);
        return data;
    } catch (error) {
        return { error };
    }
};

const loginAPICall = async (email, password) => {
    try {
        const res = await axios.post("https://reqres.in/api/login", {
            email,
            password,
        });
        // console.log(res);
        return res.data;
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

export let adminServices = {
    getAllProducts: getAllProducts,
    getAllCategories: getAllCategories,
    loginAPICall: loginAPICall,
    addCategory: addCategory,
};
