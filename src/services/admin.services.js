import axios from "axios";

const getAllCategories = async () => {
    try {
        const { data } = await axios.get(
            "https://fooddeliveryapp.onrender.com/api/getAllCategory"
        );
        return data;
    } catch (error) {
        return { error };
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

const addProduct = async (formData) => {
    console.log(formData)
    try {
        return await axios.post("https://fooddeliveryapp.onrender.com/api/addProduct", formData)
    } catch (error) {
        console.log(error)
        return error
    }
}

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

// const deliveryBoyRegister = async () =>{
//     const deliveryBoyDetails = {
//             "firstName":"khalil",
//             "lastName":"pathan",
//             "email":"pkhak@gmail.com",
//             "mobile":"123478",
//             "password":"admin13@",
//             "deviceToken":"eZ8HqKz3Qm-r9qGd-v-oD7:APA91bHUdB8aYmlPXKoET6hr10MqwUZoftaoMTnRSg-bP-mdNEhROPv3oYgTkItElN47ziXOyjhWRxdYd-VO9yTrdQeTQCNx4Jrp24dojkaa3_CfvCv2cOo3gzBcMPCcmVq2BrV8PxsD"
//     }
//     try {
//         const result = await axios.post("https://fooddeliveryapp.onrender.com/api/delivery/register", deliveryBoyDetails);
//         console.log(result);
//         return result
//     } catch (error) {
//         return error
//     }
// }

export let adminServices = {
    getAllProducts: getAllProducts,
    getAllCategories: getAllCategories,
    loginAPICall: loginAPICall,
    addCategory: addCategory,
    getAllProducts: getAllProducts,
    addProduct: addProduct,
    // deliveryBoyRegister:deliveryBoyRegister
};

