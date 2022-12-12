import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Feedback() {
    const texareaStyle = ["!w-[60vw]", "!h-[40vw]", "rounded", "p-1", "bg-neutral-200", "border-solid", "mb-4", "max-w-[600px]",
                        "min-w-[250px]", "max-h-[300px]", "min-h-[150px]","border-2", "border-amber-400", "caret-amber-400", 
                        "focus:outline-0", "focus:text-amber-400", "focus:bg-neutral-600", "focus:placeholder-neutral-600"].join(" ");
    
    function submitFeedback() {
        if (document.getElementById("feedback").value.length === 0) {
            document.getElementById("feedback").style.borderColor = "red";
            document.getElementById("feedback").placeholder = "*Input can't be blank.";
        }
        else {
            const sendInfo = async() => {
                try {
                    await axios.post("http://localhost:8800/api/feedback/", {feedback : document.getElementById("feedback").value});
                }
                catch(err) {
                    console.log(err);
                }
            };
            sendInfo();
    
            document.getElementById("feedback").style.borderColor = "#fbbf24";
            document.getElementById("feedback").value = "";
            document.getElementById("feedback").placeholder = "Enter Feedback Here";

            document.getElementById("ty").style.display = "inherit";

            setTimeout(() => {  document.getElementById("ty").style.display = "none"; }, 5000);
        }
    };

    return (
        <>
            <nav className="w-full fixed top-0 h-[50px] bg-neutral-900">
                <div className="w-fit">
                    <Link to="/">
                        <img className="w-[30px] h-[30px] m-2" src={require("../images/icons/backIcon.png")} alt="go back icon"/>
                    </Link>
                </div>
            </nav>

            <div className="w-fit h-fit m-auto flex justify-center">
                <div>
                    <p className="mt-5 mb-2 text-amber-400 textShadow sm:text-sm"><b>Feedback: (750 Characters Max)</b></p>
                    <textarea id="feedback" className={texareaStyle} type="text" maxLength="750" placeholder="Enter Feedback Here" name="fback"></textarea>
                    <button className="block m-auto p-2 rounded sm:text-xs border border-amber-400 bg-amber-400 hover:bg-neutral-800 hover:text-amber-400 hover:" 
                            onClick={submitFeedback}>
                        <b>Submit Feedback</b>
                    </button>
                    <p id="ty" className="hidden w-fit ml-auto mr-auto mt-10 text-xl sm:text-sm text-[#00ff3c]"><b>Thank You For Your Feedback.</b></p>
                </div>
            </div>
        </>
    );
};