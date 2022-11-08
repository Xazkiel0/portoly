import Logo from '../public/assets/svg/Logo.svg';

const Navbar = () => {
    return (
        // <nav>
        <div className="flex border mx-2 my-3">
            <div className="basis-1/2 items-center flex space-x-2  [&>*>span]:text-slates-100">
                <div className="flex flex-row items-center space-x-2 p-2">
                    <Logo className="w-8" />
                    <div className="text-logo">
                        <span className='text-xl -mt-1'>PortoLy</span>
                    </div>
                </div>
                <div className="p-2 border-b-2 border-[#B1B2FF] border-">
                    <span className='after:block after:h-2 after:w-4 after:absolute after:bg-pink-200 after:bottom-0 after:right-0'>Home</span>
                </div>
        
                <div className="p-2 border">
                    <span>Explore</span>
                </div>
                <div className="p-2 border">
                    <span>Projects</span>
                </div>
            </div>
            <div className="basis-1/2 flex justify-end p-3">
                <div className="sign-up-btn">
                    <button className='bg-[#B1B2FF] rounded-full p-2 px-4 font-bold text-white' type="submit">Sign Up</button>
                </div>
            </div>
        </div>
        // </nav>
    );
}

export default Navbar;