import './Controls.css'

function Controls() {

    return (
        <div className="controls__content">

            <div className="controls__search">

                <div className="controls__svg"></div>
                <input type="text" className="controls__input" placeholder='Search for a country...' />

            </div>

            <div className="controls__filter">

                <button className="controls__filter-btn">Filter by Region</button>

                {/* <div className="controls__select-custom">
                    <div className="select-custom__current"></div>
                    <div className="select-custom__option">
                        <div className="select-custom__item">Africa</div>
                        <div className="select-custom__item">America</div>
                        <div className="select-custom__item">Asia</div>
                        <div className="select-custom__item">Europe</div>
                        <div className="select-custom__item">Oceania</div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default Controls