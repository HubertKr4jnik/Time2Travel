import './navbar.css'

function Navbar()
{
    return(
        <nav>
            <div id="logo-container">
            <img src="src\assets\logo.svg" alt="logo" />
            <h1>Time2Travel</h1>
            </div>
            <div id="nav-select-group">
                <div id="select-container">
                    <select name="" id="">
                        <option value="">Select trip</option>
                    </select>
                    <input type="button" value="..." />
                </div>
            </div>
            <div id="login-container">
            <a href="#" id="login-button">Log-in</a>
            </div>
        </nav>
    )
}
export default Navbar;