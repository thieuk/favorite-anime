import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="w-full h-[30px] fixed bottom-0 p-1 text-sm bg-neutral-900 text-amber-400 flex justify-center">
            <p>Last Updated: Nov 29, 2022</p>
            <Link to="/feedback">
                <h1 className="text-amber-400 ml-1 hover:underline">| Leave Feedback</h1>
            </Link>
        </footer>
    );
}