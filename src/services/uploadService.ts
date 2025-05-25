import {FirebaseConfig} from "../config/firebase-config.ts";


export const uploadImage = async (file: File): Promise<string> => {
const formData = new FormData();
formData.append('image', file);

try {
    const response = await fetch(FirebaseConfig.getallFunctions().api, {
        method: 'POST',
        body: formData,

    });
    console.log("API URL:", FirebaseConfig.getallFunctions().api);
    console.log("Uploading file:", file.name, file.size);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;

  }catch (error) {
    return Promise.reject(error);
}

}