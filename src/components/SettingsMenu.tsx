export function SettingsMenu() {
  return (
    <aside className="flex flex-col items-start px-3.5 pt-6 pb-11 rounded-xl bg-stone-400">
      <div className="flex gap-5 justify-between self-stretch">
        <span className="my-auto">Dark mode</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1babefd92f5b8df639fb3cd1059a9b5304756d3bdbce4bfe018ef957f776b5fd?placeholderIfAbsent=true&apiKey=6fbd76ec4a2a4e9aa6a26f47562625c1"
          className="object-contain shrink-0 w-8 aspect-square"
          alt="Dark mode toggle"
        />
      </div>
      <button className="mt-5">Font settings</button>
      <button className="mt-6">Contrast</button>
      <button className="mt-7">Notebook</button>
      <button className="mt-7">Profile</button>
    </aside>
  );
}
