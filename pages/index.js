
export default function Home() {
  return (
    <div>
      <div className="h-10 w-[500px] rounded-full bg-gradient-to-r from-[#FFD1E4]  via-[#BEE1F1] to-[#8AFBD1] py-1 px-[5px]">
          <input className="flex text-zinc-800 h-full w-full items-center justify-center rounded-full px-4 focus:outline-none  focus:ring-[#9fccf1] focus:ring-2" placeholder="Search..."/>
      </div>
      <div className="flex ">
        <div className="w-1/3 h-[500px] mx-2 p-1  items-center justify-center  ">
          <div className="flex h-[360px] w-[360px] items-center mx-auto mt-9 justify-center bg-slate-600 rounded-full drop-shadow-lg">
            {/* <img src="../public/assets/img/profile.jpg" className="w-60 h-60" /> */}
          </div>
          <span className="flex items-center mx-auto justify-center mt-2 text-center text-[30px] font-semibold">Muhammad Sayidul Ikhsan Ulya</span>
          <span className="flex items-center mx-auto justify-center mt-1  text-[24px] font-extralight">@UlyaSepuhSlipkol</span>
        </div>
        <div className=" w-2/3 h-5 mx-2 p-2 ">
          <span className="mt-11 flex text-[40px] font-semibold">About Me</span>
          <span className="mt-3 flex text-[24px] font-light">Haii.. How are you , My Name is Ulya , iam a Graphic Designer , Iam Proffesional so lets Collaborate and contact me from  Socials ... Thank You So Much for your attention dont forget to check my Portofolio Website Below __UwU__</span>
          <button className='flex bg-[#B1B2FF] text-[24px] mt-7 rounded-full p-2 px-8 font-bold text-white' type="submit">Visit my Portofolio</button>
          <span className="mt-8 flex text-[40px] font-semibold">Social Media</span>
        </div>
      </div>
      <div className="h-auto mt-3 w-[650px] rounded-lg bg-gradient-to-r from-[hsl(335,100%,91%)]  via-[#BEE1F1] to-[#8AFBD1] p-[12px]">
          <div className=" bg-white mb-4 text-zinc-800 h-full w-full items-center justify-center rounded-lg py-4  px-20">
            <h1 className="flex text-[48px] text-2xl font-black justify-center items-center text-black pt-14 pb-14">Login</h1>
            <span className="flex text-[20px] font-normal  justify-start  text-black mb-4"> Username</span>
            <div className="h-10 w-full rounded-full bg-gradient-to-r from-[#FFD1E4]  via-[#BEE1F1] to-[#8AFBD1] py-1 px-[5px]">
              <input className="flex text-zinc-800 bg-gray-100 h-full w-full items-center justify-center rounded-full px-4 focus:outline-none  focus:ring-[#9fccf1] focus:ring-2" />
            </div>
            <span className="flex text-[20px] font-normal  justify-start pt-6 text-black mb-4"> Password</span>
            <div className="h-10 w-full rounded-full bg-gradient-to-r from-[#FFD1E4]  via-[#BEE1F1] to-[#8AFBD1] py-1 px-[5px]">
              <input className="flex text-zinc-800 bg-gray-100 h-full w-full items-center justify-center rounded-full px-4 focus:outline-none  focus:ring-[#9fccf1] focus:ring-2" />
            </div>
            <span className="flex text-[20px] font-normal  justify-center pt-16 text-black mb-4"> Dont have account ? <a href="" className="text-sky-500"> Sign Up</a></span>
            <div className="sign-up-btn justify-center mt-7 mb-20 flex ">
              <button className='bg-[#7DC3E3] drop-shadow-md rounded-full w-[200px] h-[60px] p-2 px-4 font-semibold text-[24px] text-white justify-center' type="submit">Login</button>
            </div>
          </div>      
      </div>
      {/* <div class="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
        <div class="h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div class="flex h-full w-full items-center justify-center bg-gray-800 back">
            <h1 class="text-2xl font-black text-white">Login</h1>
          </div>
        </div>
      </div> */}
    </div>
    // {/* <div className=" w-[500px]  h-2 p-1 bg-gradient-to-r from-[#FFD1E4]  via-[#BEE1F1] to-[#8AFBD1] rounded-full">
    //   <input className="w-full block rounded-full mx-0 h-auto p-2 relative" placeholder="Search..."/>
    // </div> */}
    
  )
}
