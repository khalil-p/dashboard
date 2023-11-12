import axios from "axios";
const baseUrl = "http://localhost:3002";
// const baseUrl = "https://madni-food-app.vercel.app";
const getAllCategories = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));

    const { data } = await axios.get(
      `${baseUrl}/api/getAllCategory`,

      { headers: { Authorization: token } }
    );
    return data;
  } catch (error) {
    return { error };
  }
};

const addCategory = async (formData) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));

    return await axios.post(`${baseUrl}/api/addCategory`, formData, {
      headers: { Authorization: token },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAllProducts = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/getAllProducts`);
    return data;
  } catch (error) {
    return error;
  }
};

const addProduct = async (formData) => {
  console.log(formData);
  try {
    return await axios.post(`${baseUrl}/api/addProduct`, formData);
  } catch (error) {
    console.log(error);
    return error;
  }
};
const updateProduct = async (formData) => {
  const token = JSON.parse(localStorage.getItem("token"));
  // /api/admin/removeBoy
  try {
    return await axios.put(`${baseUrl}/api/updateProductById`, formData, {
      headers: { Authorization: token },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

const loginAPICall = async (item) => {
  try {
    const result = await axios.post(`${baseUrl}/api/admin/login`, item);
    return result;
  } catch (error) {
    return error;
  }
};

const deliveryBoyList = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    const result = await axios.get(`${baseUrl}/api/deleveryBoys`, {
      headers: { Authorization: token },
    });
    return result;
  } catch (error) {
    return error;
  }
};

const completedOrderList = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    const result = await axios.get(
      `${baseUrl}/api/admin/orders?status=Completed`,
      { headers: { Authorization: token } }
    );
    return result;
  } catch (error) {
    return error;
  }
};

const cancelledOrderList = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    const result = await axios.get(
      `${baseUrl}/api/admin/orders?status=Cancelled`,
      { headers: { Authorization: token } }
    );
    return result;
  } catch (error) {
    return error;
  }
};

const pendingOrderList = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    const result = await axios.get(
      `${baseUrl}/api/admin/orders?status=Pending`,
      { headers: { Authorization: token } }
    );
    return result;
  } catch (error) {
    return error;
  }
};
const dailyOrderList = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    const result = await axios.get(
      `${baseUrl}/api/getOrderDailyList`,
      { headers: { Authorization: token } }
    );
    return result;
  } catch (error) {
    return error;
  }
};
const deleteCategory = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const result = await axios.put(
      `${baseUrl}/api/removecategory?id=${id}`,
      {},
      { headers: { Authorization: token } }
    );
    return result;
  } catch (error) {
    return error;
  }
};
const deleteProduct = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const result = await axios.put(
      `${baseUrl}/api/removeProduct?id=${id}`,
      {},
      { headers: { Authorization: token } }
    );
    return result;
  } catch (error) {
    return error;
  }
};
const deleteDelevryBoy = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const result = await axios.put(
      `${baseUrl}/api/admin/removeBoy?id=${id}`,
      {},
      { headers: { Authorization: token } }
    );
    return result;
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
//         const result = await axios.post("${baseUrl}/api/delivery/register", deliveryBoyDetails);
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
  deliveryBoyList: deliveryBoyList,
  completedOrderList: completedOrderList,
  cancelledOrderList: cancelledOrderList,
  pendingOrderList: pendingOrderList,
  updateProduct,
  deleteCategory,
  deleteDelevryBoy,
  deleteProduct,
  dailyOrderList
};
