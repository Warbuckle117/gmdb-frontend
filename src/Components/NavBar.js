import '../App.css';

function NavBar(props) {
    return (
        <div id="nav-bar">
            <ul>
                <li>
                   <a href="http://localhost:3000/"> GMDB</a>
                </li>
                <li>
                <a href="http://localhost:3000/"> Home</a>
                </li>
                <li>
                <a href="http://localhost:3000/"> Login</a>
                </li>
                <li>
                <button>Search</button>
                </li>
                <li>
                <input id="nav-bar" type="text" placeholder="enter search here"></input>
                </li>
            </ul>
        </div>
    )
}



export default NavBar