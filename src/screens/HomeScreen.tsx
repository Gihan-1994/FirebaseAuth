import AuthButton from "../components/authButton.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useServiceStore} from "../store/serviceStore.ts";


const HomeScreen = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState<string>('');
    const helloService = useServiceStore(state => state.hellofireworld);
    const triggerHelloService = async () => {
        try {
            const response = await helloService()
            setTitle(response);
            console.log("response", response);
        }catch (error) {
            throw new Error(` triggered Hello Service failed with error: ${error}`);
    }
    }
    useEffect(() => {
        triggerHelloService().then(r => r);
    }, [])
    return (
        <div className='Relative'>

        <div className='w-full flex flex-col justify-center items-center  gap-10 py-10'>
           <h1> {title}</h1>
            <div className='w-1/2 h-1/4 p-5 px-20 flex flex-row gap-x-10 border-2 justify-between items-center bg-blue-200'>
                <h2 className='text-2xl font-bold font-sans'>User Login</h2>
                <AuthButton
                    type = "button"
                    onClick={() => navigate('/AuthScreen')}
                    disabled = {false}
                    loading = {false}
                    variant = "primary"
                    >
                    Authentication
                </AuthButton>
            </div>
            <div className='w-1/2 h-1/4 p-5 px-20 flex flex-row gap-x-10 border-2 justify-between items-center bg-blue-200'>
                <h2 className='text-2xl font-bold font-sans'>Upload Image</h2>
                <AuthButton
                    type = "button"
                    onClick={() => navigate('/ImageUploadScreen')}
                    disabled = {false}
                    loading = {false}
                    variant = "primary"
                    >
                    Upload Image
                </AuthButton>
            </div>
            <div className='w-1/2 h-1/4 p-5 px-20 flex flex-row gap-x-10 border-2 justify-between items-center bg-blue-200'>
                <h2 className='text-2xl font-bold font-sans'>Write Text</h2>
                <AuthButton
                    type = "button"
                    onClick={() => navigate('/FireStoreWriteScreen')}
                    disabled = {false}
                    loading = {false}
                    variant = "primary"
                    >
                    Write to FireStore
                </AuthButton>
            </div>

        </div>
        </div>
    )
}
export default HomeScreen