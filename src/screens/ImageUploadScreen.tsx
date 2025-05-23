import {useState} from 'react';
import AuthButton from "../components/authButton.tsx";

const ImageUploadScreen = () => {

    const [image, setImage] = useState <File|null>(null);

    const handleUpload = () => {
      console.log(image);
    }
    return (
        <div className='Relative'>
            <div  className='w-full h-full flex flex-col justify-center items-center  gap-10 py-10 mt-[200px]'>
                <div className='w-1/2 h-[200px] p-5 px-20 flex flex-row flex-wrap gap-x-10 border-2 justify-between items-center bg-blue-200'>
                    <h2 className='text-2xl font-bold font-sans'>Upload Image</h2>
                    <input
                        type = "file"
                        onChange = {(e) => setImage(e.target.files? e.target.files[0]: null)}
                        className='w-1/2 h-1/4 p-5 px-20  gap-x-10 border-2  bg-violet-400 hover:bg-violet-200 rounded-full'
                    />
                    <AuthButton
                        type = "button"
                        onClick={handleUpload}
                        disabled = {false}
                        loading = {false}
                        variant = "secondary"
                        colour = "green"
                    >Upload</AuthButton>

                </div>
            </div>
        </div>


    )
}
export default ImageUploadScreen
