import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(){
    return (      
        <div className="navbar bg-dark">
            <div className="container-fluid">
                <h1 className="navbar-brand text-light">Home</h1>
                <form className="d-flex" role="search">
                    <input className="form-control me-2 border border-3 border-warning" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </div>
    );
}

export default NavBar;