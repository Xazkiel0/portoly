
export default function Home() {
  return (
    <div>
      <div className="h-10 w-[500px] rounded-full bg-gradient-to-r from-[#FFD1E4]  via-[#BEE1F1] to-[#8AFBD1] py-1 px-[5px]">
          <input className="flex text-zinc-800 h-full w-full items-center justify-center rounded-full px-4 focus:outline-none  focus:ring-[#9fccf1] focus:ring-2" placeholder="Search..."/>
      </div>
      <div className="flex">
        <div className="w-1/3 h-[500px] mx-2 p-2  items-center justify-center  ">
          <div className="flex h-[360px] w-[360px] items-center mx-auto mt-14 justify-center bg-slate-600 rounded-full drop-shadow-lg">
            {/* <img src="../public/assets/img/profile.jpg" className="w-60 h-60" /> */}
          </div>
          <span className="flex items-center mx-auto justify-center mt-2  text-[30px] font-semibold">Muhammad Sayidul Ikhsan</span>
          <span className="flex items-center mx-auto justify-center mt-1  text-[24px] font-extralight">@UlyaSepuhSlipkol</span>
        </div>
        <div className=" w-2/3 h-5 mx-2 p-2 ">
          <span className="mt-11 flex text-[40px] font-semibold">About Me</span>
          <span className="mt-3 flex text-[24px] font-light">Haii.. How are you , My Name is Ulya , iam a Graphic Designer , Iam Proffesional so lets Collaborate and contact me from  Socials ... Thank You So Much for your attention dont forget to check my Portofolio Website Below __UwU__</span>
          <button className='flex bg-[#B1B2FF] text-[24px] mt-7 rounded-full p-2 px-8 font-bold text-white' type="submit">Visit my Portofolio</button>
          <span className="mt-8 flex text-[40px] font-semibold">Social Media</span>
        </div>
      </div>
    </div>
    // {/* <div className=" w-[500px]  h-2 p-1 bg-gradient-to-r from-[#FFD1E4]  via-[#BEE1F1] to-[#8AFBD1] rounded-full">
    //   <input className="w-full block rounded-full mx-0 h-auto p-2 relative" placeholder="Search..."/>
    // </div> */}
    
  )
}
