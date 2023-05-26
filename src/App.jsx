import Container from "./components/Container";
import Counter from "./components/Counter";
import TitleAndSubtitle from "./components/TitleAndSubtitle";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import FiveDots from "./components/FiveDots";
import RowText from "./components/RowText";

// Icons
import { GiSwipeCard } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineWifi } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { RiFileList3Line } from "react-icons/ri";

function App() {
  return (
    <Container>
      <div className="w-[75%] h-[80vh] bg-white">
        <div className="flex justify-end">
          <div className="p-2 bg-gray-50">
            <FaTimes className="text-gray-600" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div className="col-span-2">
            <div className="p-4 pl-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-500 rounded-full">
                    <GiSwipeCard className="text-white" />
                  </div>
                  <div className="flex items-center text-lg">
                    <span className="font-bold">AceCoin</span>
                    <span className="text-sm text-gray-400">Pay</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Counter numOne={0} numTwo={1} />
                  <div className="">:</div>
                  <Counter numOne={1} numTwo={9} />
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <TitleAndSubtitle
                  title="Card Number"
                  subTitle="Enter the 16 digits card number on the card"
                />
                <div className="flex items-center gap-2 font-bold text-blue-500">
                  <BsPencilFill className="" />
                  <span>Edit</span>
                </div>
              </div>
              <div className="w-full mt-4 border rounded-md">
                <div className="flex items-center px-2">
                  <div className="flex items-center w-full">
                    <div className="w-8 h-8 pt-2">
                      <img src="images/card.png" alt="card" />
                    </div>
                    <TextInput placeholder="0000 - 0000 - 0000 - 0000" />
                  </div>
                  <RiCheckboxCircleFill size={20} className="text-blue-500" />
                </div>
              </div>
              <div className="mt-6">
                <div className="grid grid-cols-2">
                  <TitleAndSubtitle
                    title="CVV Number"
                    subTitle="Enter the 3 or 4 digits card number on the card"
                  />
                  <div className="w-full border rounded-md">
                    <div className="flex items-center px-2">
                      <TextInput
                        placeholder="376"
                        className="placeholder:text-center placeholder:font-bold"
                      />
                      <RxDashboard size={20} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="grid grid-cols-2">
                  <TitleAndSubtitle
                    title="Expire Date"
                    subTitle="Enter the expiration date on the card"
                  />
                  <div className="flex items-center gap-4">
                    <div className="w-full border rounded-md">
                      <div className="flex items-center px-2">
                        <TextInput
                          placeholder="09"
                          className="py-3 placeholder:text-center placeholder:font-bold"
                        />
                      </div>
                    </div>
                    <span>/</span>
                    <div className="w-full border-2 border-blue-600 rounded-md">
                      <div className="flex items-center px-2">
                        <TextInput
                          placeholder="22"
                          className="py-3 placeholder:text-center placeholder:font-bold"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="grid grid-cols-2">
                  <TitleAndSubtitle
                    title="Password"
                    subTitle="Enter your dynamic password"
                  />
                  <div className="w-full border rounded-md">
                    <div className="flex items-center px-2">
                      <TextInput
                        placeholder="......."
                        className="placeholder:font-bold placeholder:text-3xl"
                      />
                      <RxDashboard size={20} />
                    </div>
                  </div>
                </div>
              </div>
              <Button title="Pay" />
            </div>
          </div>
          <div className="w-full px-8 pt-2">
            <div className="relative flex flex-col items-center w-full">
              <div className="z-10 w-10 h-1 shadow-lg bg-customBlue shadow-customBlue" />
              <div className="w-[70%] z-30 flex flex-col justify-between p-3 from-white to-transparent bg-gradient-to-t h-60 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12">
                    <img src="images/sim.png" className="rotate-90" alt="sim" />
                  </div>
                  <AiOutlineWifi size={25} />
                </div>
                <div className="">
                  <div className="text-textlightGray">
                    <span className="font-semibold">Jonathan Micheal</span>
                    <div className="flex items-center space-x-4 font-bold">
                      <FiveDots />
                      <span>3456</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-semibold">09/22</span>
                    <div className="w-10 h-10">
                      <img src="images/card.png" alt="mastercard" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-full top-20">
                <div className=" w-full rounded-b-[-30px] rounded-t-2xl bg-lightGray h-[340px]">
                  <div className="relative flex flex-col justify-end h-full gap-2 p-4 pb-6 ">
                    <RowText leftText="Company" rightText="Apple">
                      <div className="p-1 rounded-full bg-numBg">
                        <AiFillApple className="text-xs text-white" />
                      </div>
                    </RowText>
                    <RowText leftText="Order Number" rightText="1234567" />
                    <RowText leftText="Product" rightText="MacBook Air" />
                    <RowText leftText="Vat (20%)" rightText="$100.00" />

                    <div className="absolute bottom-[-10px] right-[-18px] w-8 h-6 bg-white rounded-l-3xl" />
                    <div className="absolute bottom-[-10px] left-[-18px] w-8 h-6 bg-white rounded-r-3xl" />
                  </div>
                </div>
                <div className="bg-lightGray relative border border-t-2 h-[80px] px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-textGray">You have to pay</span>
                      <div className="flex items-center">
                        <span className="text-2xl text-numBg">556.</span>
                        <span className="text-numBg">99</span>
                        <span className="ml-2 text-lg font-bold text-textGray">
                          USD
                        </span>
                      </div>
                    </div>
                    <RiFileList3Line size={25} />
                  </div>
                  <div className="absolute top-[-10px] right-[-18px] w-8 h-6 bg-white rounded-l-3xl" />
                  <div className="absolute top-[-10px] left-[-18px] w-8 h-6 bg-white rounded-r-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
