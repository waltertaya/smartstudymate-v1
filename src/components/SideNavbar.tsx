"use client";
import { FileList } from "./FileList";

export function SideNavbar() {
  return (
    <nav className="flex flex-col h-screen overflow-hidden py-5 w-full text-base text-center text-black rounded-lg bg-zinc-300 max-md:mt-6">
      <h2 className="self-center">Add new documents</h2>
      <div className="flex flex-col items-start px-3.5 mt-4 w-full flex-1 overflow-hidden">
        <UploadArea />
        {/* Scrollable FileList */}
        <div className="overflow-auto flex-1 w-full">
          <FileList />
        </div>
        <QuickLinks />
        <button className="px-16 py-7 mt-6 max-w-full text-black whitespace-nowrap bg-indigo-500 rounded-xl w-[247px] max-md:px-5 max-md:ml-2.5">
          Generate
        </button>
      </div>
    </nav>
  );
}

function UploadArea() {
  return (
    <div className="flex flex-col self-stretch pt-8 pr-5 pb-14 pl-2.5 bg-gray-300 rounded-lg">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2b70a844ec2e4555fa810415dfb7a9f02f42815c2ae38159eb1c61c4e071bd4?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
        className="object-contain self-center w-6 aspect-square"
        alt="Upload icon"
      />
      <p className="mt-10">
        Drag & Drop or <span className="text-[#2437B5]">Choose file</span> to
        upload
        <br />
        pdf, docx
      </p>
    </div>
  );
}

function QuickLinks() {

  return (
    <div className="relative flex gap-2.5 mt-48 max-md:mt-10 max-md:ml-1">
      <nav className="self-end mt-44 whitespace-nowrap max-md:mt-10">
        <div className="flex gap-3 max-md:mr-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7370696750763a3b397eabda249c758239cafe8e2351c7e3a5bad16d56351dfe?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
            className="object-contain shrink-0 aspect-[1.04] w-[23px]"
            alt="Quizzes icon"
          />
          <span className="my-auto">Quizzes</span>
        </div>
        <div className="flex gap-2.5 mt-5">
          <button
            className="flex gap-2.5 items-center"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e85690d64bb830738eebd03a02d3462639a941e718156acc745740f116b523b4?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
              className="object-contain shrink-0 aspect-square w-[23px]"
              alt="Settings icon"
            />
            <span className="my-auto">Settings</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
