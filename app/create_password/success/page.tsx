import TickCircle from "@/components/icons/tickCircle"

const Success = () => {
    return (
        <div className='h-screen w-full flex flex-col items-center justify-center bg-white text-center'>
            <TickCircle/>
            <h2 className="text-[42px] mt-5">Password Reset Successful</h2>
            <p className="text-base mt-5">Your password has been updated. You can now log in with your new credentials.</p>
            <a href="#"><button className='primary-button py-4 px-12 rounded-[5px] font-[600] mt-20'>Login</button></a>
        </div>
    )
}

export default Success