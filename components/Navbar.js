import Logo from '../public/assets/svg/Logo.svg';

const Navbar = () => {
    return (
        // <nav>
        <div className="flex mx-2 my-3">
            <div className="basis-1/2 items-center font-semibold flex space-x-2  [&>*>span]:text-slates-100">
                <div className="flex flex-row items-center space-x-2 p-2">
                    <Logo className="w-8" />
                    <div className="text-logo">
                        <span className="text-xl font-semibold -mt-1">PortoLy</span>
                    </div>
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