import { ChatBot } from "./ChatBot";
import { Summary } from "./Summary";

export function MainContent() {
  return (
    <section className="flex flex-col py-4 pr-4 pl-9 mx-auto w-full rounded-lg bg-zinc-300 max-md:pl-5 max-md:mt-6 max-md:max-w-full">
      <button className="self-end mr-7 text-base text-center text-black max-md:mr-2.5">
        Download summary
      </button>
      <div className="mt-5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[37%] max-md:ml-0 max-md:w-full">
            <ChatBot />
          </div>
          <div className="ml-5 w-[63%] max-md:ml-0 max-md:w-full">
            <Summary />
          </div>
        </div>
      </div>
    </section>
  );
}
