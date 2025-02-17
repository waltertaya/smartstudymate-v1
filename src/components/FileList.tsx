export function FileList() {
  return (
    <>
      <div className="flex gap-2.5 mt-6">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a2134894f558641a03450944c5451b9df782cd3fde28f2eca19e839b2d59db7?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
          className="object-contain shrink-0 aspect-square w-[30px]"
          alt="PDF file"
        />
        <span className="my-auto basis-auto">
          Research Methodology notes.pdf
        </span>
      </div>
      <div className="flex gap-2.5 self-stretch mt-5 max-md:mr-0.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a2134894f558641a03450944c5451b9df782cd3fde28f2eca19e839b2d59db7?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
          className="object-contain shrink-0 aspect-square w-[30px]"
          alt="DOCX file"
        />
        <span className="grow shrink my-auto w-[241px]">
          Research Methodology notes.docx
        </span>
      </div>
      <div className="flex gap-2.5 mt-5 max-md:ml-1.5">
        <div className="flex shrink-0 bg-white rounded-lg h-[25px] w-[25px]" />
        <span className="my-auto basis-auto">
          compiler construction notes.pdf
        </span>
      </div>
      <div className="flex gap-2 mt-5 max-md:ml-0.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a2134894f558641a03450944c5451b9df782cd3fde28f2eca19e839b2d59db7?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
          className="object-contain shrink-0 aspect-square w-[30px]"
          alt="PDF file"
        />
        <span className="my-auto basis-auto">
          Research practice questions.pdf
        </span>
      </div>
    </>
  );
}
