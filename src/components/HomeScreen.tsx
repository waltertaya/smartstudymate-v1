"use client";
import { SideNavbar } from "./SideNavbar";
import { MainContent } from "./MainContent";

export default function HomeScreen() {
  return (
    <main className="flex overflow-hidden flex-col px-5 pt-2.5 pb-5 bg-white">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[23%] max-md:ml-0 max-md:w-full">
            <SideNavbar />
          </div>
          <div className="ml-5 w-[77%] max-md:ml-0 max-md:w-full">
            <MainContent />
          </div>
        </div>
      </div>
    </main>
  );
}
