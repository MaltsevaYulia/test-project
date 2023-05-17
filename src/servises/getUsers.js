import axios from "axios";

// const API_KEY = "854bf457e823d26894ff8657add868b2";
axios.defaults.baseURL = "https://6457ba0d1a4c152cf988e1a5.mockapi.io";

export const getUsers =async () => {
    
    try {
        const respons = await axios.get("/users"); 
        console.log("🚀 ~ getUsers ~ respons.data:", respons.data);
       
        return respons.data
    } catch (error) {
        
    }
};
