import Image from "next/image";
import pic1 from "../app/public/pic1.png";
import pic2 from "../app/public/pic2.png";
import pic3 from "../app/public/pic3.png";
import pic4 from "../app/public/pic4.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <section className="mx-auto h-full bg-[#faf5f5] ">
      <div className="max-w-7xl flex justify-center lg:items-center mx-auto lg:flex-row px-4 sm:px-6 md:px-8 xl:px-4">
        <div className="w-[1030px] h-[308px] mx-auto flex justify-between items-center mt-20 ">
          <div className="w-[521px] h-[305px]  flex flex-col gap-4 ">
            <h1 className=" font-black text-[42px] leading-[61px]">
              Hi, I am John, Creative Technologist
            </h1>
            <p className="w-[496px] h-[66] text-[16px] font-normal leading-[23.5px]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button
              className="w-[205px] h-[50px]  bg-[#F98585] text-[18px] font-medium rounded-[2px] leading-[26.44px] drop-shadow-[0_0px_3px_rgba(117,195,16,0.24)];
">
              Download Resume
            </button>
          </div>

          <div className="w-[298px] h-[308px]">
            <Image src={pic1} alt="" width={292} height={299} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl flex justify-between lg:items-center mx-auto h-[100vh] lg:flex-row px-4 sm:px-6 md:px-8 xl:px-4">
        <div className=" h-[502px] w-full mx-auto flex justify-center gap-8 items-center bg-[#f4e2e2]">
          <div className="flex flex-col gap-4">
            <h1 className="text-[22px] font-normal text-[#000]">Resent Post</h1>
            <div className="w-[483px] h-[356px]  flex flex-col gap-4  bg-white  px-8">
              <h1 className="text-[26px] font-bold mt-8">
                Making a design system from scratch
              </h1>
              <div className="w-[301.28px] h-[48.12px]  flex gap-8 items-center">
                <h1 className="text-[18px] font-normal text-[#000]">
                  12 Feb 2020
                </h1>
                <h1 className="h-[17.5px] text-[#000]">|</h1>
                <h1 className="text-[18px] font-normal">Design , Pattern</h1>
              </div>
              <div className="w-[391px] h-[129.7px]">
                <p className="text-[16px] font-normal leading-[23.5px] text-justify">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-end">
            <a href="" className="text-[22px] font-medium text-[#F98585]">
              view all
            </a>
            <div className="w-[483px] h-[356px]  flex flex-col gap-4 bg-white px-8">
              <h1 className="text-[26px] font-bold mt-8">
                Making a design system from scratch
              </h1>
              <div className="w-[301.28px] h-[48.12px]  flex gap-8 items-center">
                <h1 className="text-[18px] font-normal text-[#000]">
                  12 Feb 2020
                </h1>
                <h1 className="h-[17.5px] text-[#000]">|</h1>
                <h1 className="text-[18px] font-normal">Design , Pattern</h1>
              </div>
              <div className="w-[391px] h-[129.7px]">
                <p className="text-[16px] font-normal leading-[23.5px] text-justify">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl flex justify-between lg:items-center mx-auto h-full lg:flex-row px-4 sm:px-6 md:px-8 xl:px-4">
        <div className="flex flex-col justify-center mx-auto gap-2">
        <h1 className="text-[22px] font-medium leading-[33.31px] ml-12 ">Featured works</h1>
        <div className="w-[991px] h-[934px]  mx-auto flex  flex-col">
          <div className=" mt-4 gap-8  flex justify-center items-center">
            <div className="h-[272.1px]">
              <Image src={pic2} alt="dashboard" width={246} height={180} />
            </div>
            <div className="w-[623px] h-[272.1px] flex flex-col gap-4">
              <h1 className="text-[30px] font-bold leading-[44.06px]">
                Designing Dashboards{" "}
              </h1>
              <div className="flex gap-8">
                <h1 className="text-[18px] font-bold leading-[26.44px] text-center w-[68px] h-[24px] rounded-full text-white bg-[#F98585]">
                  2020
                </h1>
                <h1 className="text-[20px] font-normal leading-[29.38px]">
                  Dashboard
                </h1>
              </div>
              <div className="w-[622px] h-[170px]">
                <p className="text-[18px] font-light leading-[26.44px]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
          <div>
          <div className=" mt-4 gap-8  flex justify-center items-center">
            <div className="h-[272.1px]">
              <Image src={pic4} alt="dashboard" width={246} height={180} />
            </div>
            <div className="w-[623px] h-[272.1px] flex flex-col gap-4">
              <h1 className="text-[30px] font-bold leading-[44.06px]">
                Designing Dashboards
              </h1>
              <div className="flex gap-8">
                <h1 className="text-[18px] font-bold leading-[26.44px] text-center w-[68px] h-[24px] rounded-full text-white bg-[#F98585]">
                  2020
                </h1>
                <h1 className="text-[20px] font-normal leading-[29.38px]">
                  Dashboard
                </h1>
              </div>
              <div className="w-[622px] h-[170px]">
                <p className="text-[18px] font-light leading-[26.44px]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
          </div>
          <div>
          <div className=" mt-4 gap-8  flex justify-center items-center">
            <div className="h-[272.1px]">
              <Image src={pic3} alt="dashboard" width={246} height={180} />
            </div>
            <div className="w-[623px] h-[272.1px] flex flex-col gap-4">
              <h1 className="text-[30px] font-bold leading-[44.06px]">
                Designing Dashboards
              </h1>
              <div className="flex gap-8">
                <h1 className="text-[18px] font-bold leading-[26.44px] text-center w-[68px] h-[24px] rounded-full text-white bg-[#F98585]">
                  2020
                </h1>
                <h1 className="text-[20px] font-normal leading-[29.38px]">
                  Dashboard
                </h1>
              </div>
              <div className="w-[622px] h-[170px]">
                <p className="text-[18px] font-light leading-[26.44px]">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>

        
      </div>
      <div className="max-w-7xl flex justify-center lg:items-center mx-auto h-[243px] lg:flex-row px-4 sm:px-6 md:px-8 xl:px-4">
        <div className="flex justify-center items-center flex-col gap-4">
        <div className="flex gap-8">
        <FaFacebookSquare  className="w-[30px] h-[30px] text-[#21243D] "/>
        <FaInstagram  className="w-[30px] h-[30px] text-[#21243D] "/>
        <FaTwitter className="w-[30px] h-[30px] text-[#21243D] "/>
        <FaLinkedin  className="w-[30px] h-[30px] text-[#21243D] "/>
        </div>
<p className="text-[22px] font-medium">Copyright ©2020 All rights reserved</p>
        </div>
        </div>
    </section>
  );
}
