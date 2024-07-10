import './page-welcome.css'

function PageWelcome()
{
    return(
        <div id="welcome-page" className="page">
            <div id="welcome-page-content">
                <img id="profile-pic" src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'/>
                <h1><span>Welcome</span>, John Doe!</h1>
                <p>Plan your first trip using the button below or click on the ... above to see other features</p>
                <input type="button" value="Let's go" id="new-trip-render-btn" />
            </div>
        </div>
    )
}
export default PageWelcome;