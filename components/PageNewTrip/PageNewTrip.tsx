import './page-new-trip.css'

function PageNewTrip()
{
    return(
        <div id="new-trip-page" className="page">
            <div id="new-trip-page-content">
                <h1>New trip</h1>
                <input type="text" name="" id="" placeholder="Name"/>
                <input type="number" name="" id="" placeholder="Number of days"/>
                <p>Start date</p><input type="date" name="" id="" placeholder='test'/>
                <p>End date</p><input type="date" name="" id="" />
                <input type="button" value="Create" id="new-trip-create-btn" />
            </div>
        </div>
    )
}
export default PageNewTrip;