import axios from "axios";

export default {

    getCustomers: () => {
        return axios.get("/api/customers")
    },

    getCustomer: (id) => {
        return axios.get("/api/customers/" + id)
    },

    addCustomer: ( customerData ) => {
        return axios.post("/api/customers", {data: customerData})
    },

    updateCustomer: (id, customerData) => {
        return axios.put("/api/customers/" + id, customerData)
    }

};