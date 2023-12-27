import axios from "axios";
// const baseUrl = "http://localhost:3002";  
const baseUrl = "https://madaninodejs.ojaspbn.in";
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
  const token = JSON.parse(localStorage.getItem("token"));

  try {
    return await axios.post(`${baseUrl}/api/addProduct`, formData ,{
      headers: { Authorization: token },
    });
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
    console.log(error);
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
const DashboardList = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    const result = await axios.get(`${baseUrl}/api/getDashboardData`, {
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

const pendingOrderList = async (status) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    const result = await axios.get(
      `${baseUrl}/api/admin/orders?status=${status}`,
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
const getDeleveryDailyList = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    const result = await axios.get(
      `${baseUrl}/api/getDeleveryDailyList?id=${id}`,
      { headers: { Authorization: token } }
    );
    return result;
  } catch (error) {
    return error;
  }
};
const getUserForDelete = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);
    const result = await axios.get(
      `${baseUrl}/api/getUserForDelete`,
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
const deleteUser = async (id) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const result = await axios.get(
      `${baseUrl}/api/user/delete?id=${id}`,
      { headers: { Authorization: token } }
    );
    return result;
  } catch (error) {
    return error;
  }
};


export let adminServices = {
  getAllProducts: getAllProducts,
  getAllCategories: getAllCategories,
  loginAPICall: loginAPICall,
  addCategory: addCategory,
  addProduct: addProduct,
  deliveryBoyList: deliveryBoyList,
  completedOrderList: completedOrderList,
  cancelledOrderList: cancelledOrderList,
  pendingOrderList: pendingOrderList,
  updateProduct,
  deleteCategory,
  deleteDelevryBoy,
  deleteProduct,
  dailyOrderList,
  getDeleveryDailyList,
  DashboardList,
  getUserForDelete,
  deleteUser
};
