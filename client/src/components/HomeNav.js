export default function HomeNav(){
    const inputStyle = ["rounded", "p-1", "placeholder-neutral-600", "bg-white border-solid", "border-2", 
                        "border-amber-400", "caret-amber-400", "focus:outline-0", "focus:text-amber-400", 
                        "focus:bg-neutral-700", "focus:placeholder-amber-300"].join(" ");

    return (
        <div className="bg-neutral-900 fixed top-0 z-50 w-full h-[50px]">
            <h1 className="text-amber-400 absolute left-0 m-2">Home</h1>
            <form className="absolute right-10 m-2">
                <input className={inputStyle} type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <img src={require("../images/icons/searchIcon.png")} alt="search icon" className="absolute w-[35px] h-[35px] right-0 m-2" />
        </div>
    );
}