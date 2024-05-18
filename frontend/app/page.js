import React from "react";
import Image from "next/image";
import LevelContainer from "@/app/components/LevelContainer";
import record_icon from "@/icons/record_icon.svg";
import pause_icon from "@/icons/pause_icon.svg";
import skip_icon from "@/icons/skip_icon.svg";
import HeaderDescriptionContainer from "@/app/components/Header&DescriptionContainer";

const page = () => {
  return (
    <div>
      <div className="flex h-60 py-2">
        <div className="w-5/12 flex">
          <LevelContainer />
          <div className="flex flex-col justify-between px-2">
            <button className="btn bg-black text-white hover:bg-slate-400">
              <Image src={record_icon} />
              Record
            </button>
            <button className="btn bg-black text-white hover:bg-slate-400">
              <Image src={pause_icon} />
              Pause
            </button>
            <button className="btn bg-black text-white hover:bg-slate-400">
              <Image src={skip_icon} />
              Skip
            </button>
            <button className="btn border-4 border-red-600 bg-black text-white hover:bg-slate-400 p-2">
              Submit
            </button>
          </div>
        </div>

        <div className="w-7/12 bg-slate-300 rounded-md"></div>
      </div>

      <div>
        <HeaderDescriptionContainer />
      </div>
      <div className="py-4">
        <button className="btn bg-black text-white hover:bg-slate-400">
          Tags
        </button>
        <button className="ml-4 btn bg-black text-white hover:bg-slate-400">
          MD
        </button>
      </div>

      <div className="bg-slate-300 w-full h-64 rounded-md"></div>
    </div>
  );
};

export default page;
