export function ChatBot() {
  return (
    <aside className="flex flex-col px-5 pt-80 pb-5 mx-auto w-full text-black bg-white rounded-lg max-md:pt-24 max-md:pr-5 max-md:mt-10">
      <p className="self-center text-base text-center">
        Ask questions based on the materials uploaded for clarification
      </p>
      <div className="flex gap-3 mt-96 text-sm max-md:mt-10">
        <input
          type="text"
          placeholder="start typing..."
          className="grow px-6 py-8 rounded-lg bg-zinc-300 w-fit max-md:px-5"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/39e0d32ab4ef9339e6bda09cf871036c9c50352bc416502e53bb873a8b9a2917?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
          className="object-contain shrink-0 my-auto w-8 aspect-[1.23]"
          alt="Send message"
        />
      </div>
    </aside>
  );
}
