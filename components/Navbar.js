import Logo from '../public/assets/svg/Logo.svg';



const Navbar = () => {
    return (
        // <nav>
        <div className="flex mt-0 mx-auto mb-3 top-0 shadow-md fixed z-20  w-full backdrop-blur-3xl">
            <div className="basis-1/2 items-center font-semibold flex space-x-2  [&>*>span]:text-slates-100 ml-3">
                <div className="flex flex-row items-center space-x-2 p-2">
                    <Logo className="w-10" />
                    <div className="text-logo">
                        <span className='text-[30px] font-medium  '>PortoLy</span>
                    </div>
                </div>
                <div className="px-10  ">
                    <span className='underlineNav text-[20px] font-medium my-auto  '>Home</span>
                    {/* <div className='bg-[#B1B2FF] w-6 h-[3px] flex mx-auto rounded'></div> */}
                </div>
        
                <div className="px-10 ">
                    <span className='text-[20px] font-medium  '>Explore</span>
                </div>
                <div className="px-10 ">
                    <span className='text-[20px] font-medium  '>Projects</span>
                </div>
                {/* <div className=" h-10 w-[500px] rounded-full bg-gradient-to-r from-[#FFD1E4]  via-[#BEE1F1] to-[#8AFBD1] py-1 px-[5px]">
                    <input className="flex text-zinc-800 h-full w-full items-center justify-center   placeholder:font-thin rounded-full px-4 focus:outline-none  focus:ring-[#9fccf1] focus:ring-2" placeholder="Search..."/>
                </div> */}
            </div>
            <div className="basis-1/2 flex justify-end p-3 mr-3">
                <div className="sign-up-btn">
                    <button className='bg-[#B1B2FF] rounded-full p-2 px-4 font-bold text-white' type="submit">Sign Up</button>
                </div>
            </div>
        </div>
        // </nav>
    );
}
// <div className="basis-1/2 flex justify-end p-3">
//     <div className="sign-up-btn">
//         <button className='bg-[#B1B2FF] rounded-full p-2 px-4 font-bold text-white' type="submit">Sign Up</button>
//     </div>
// </div>

export default Navbar;