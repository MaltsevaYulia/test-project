import axios from "axios";

axios.defaults.baseURL = "https://6457ba0d1a4c152cf988e1a5.mockapi.io";

export const getUsers =async () => {
    
    try {
        const respons = await axios.get("/users"); 
        return respons.data
    } catch (error) {
        
    }
};
