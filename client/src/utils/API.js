import axios from "axios";

export default {
    
    getCustomers: () => {
    return axios.get("/api/customers")
}


};