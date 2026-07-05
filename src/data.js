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

export const addTask = async(text)=>{
    try{
        const response = await axios.post(
            "http://localhost:4444/tasks",
            {name: text}
        );

        return response.data;


    } catch(error){
        console.error(error)
    }
}


export const changeTask = async(text ,id)=>{
    try{
        const response = await axios.patch(
            `http://localhost:4444/tasks/${id}`,
            {name: text}
        );
        return response.data;
    } catch(error){
        console.log(error)
    }
}


export const deleteTask = async(id) =>{
    try{
        const response = await axios.delete(
            `http://localhost:4444/tasks/${id}`
        );
    } catch(error){
        console.log(error)
    }
}





