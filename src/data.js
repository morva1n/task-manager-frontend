import axios from "axios"


export const getTasks = async ()=> {
    try {
        const response = await axios.get(
            "http://localhost:4444/tasks"
        );

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const text1 = 'edededed'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

export const addTask = async()=>{
    try{
        const response = await axios.post(
            "http://localhost:4444/tasks",
            {name: text1}
        );

        return response.data;


    } catch(error){
        console.error(error)
    }
}

const text2 = 'gggg'
const id = 5;

export const changeTask = async()=>{
    try{
        const response = await axios.patch(
            `http://localhost:4444/tasks/${id}`,
            {name: text2}
        );
        return response.data;
    } catch(error){
        console.log(error)
    }
}

const id2 = 17;

export const deleteTask = async() =>{
    try{
        const response = await axios.delete(
            `http://localhost:4444/tasks/${id2}`
        );
    } catch(error){
        console.log(error)
    }
}





