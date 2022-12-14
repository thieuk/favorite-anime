export default function AnimeOverlay() {
    return (
        <div id="overlay" className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-xl bg-zinc-700 transition-opacity duration-500 border-b-2 border-amber-300 cursor-pointer">
            <p className="font-bold">Click for More Info</p>
        </div>
    );
}