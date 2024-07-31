// needs work on
// 1) items - links
// 2) 

import { useState } from "react";

const Navbar = ({ logo, items }) => {
    const font30 = {
        fontSize: '30px'
    };

    const hours = [
        { day: 'Sunday', hours: '11:00 - 18:00' },
        { day: 'Monday', hours: 'Closed' },
        { day: 'Tuesday', hours: '11:00 - 18:00' },
        { day: 'Wednesday', hours: '11:00 - 18:00' },
        { day: 'Thursday', hours: '11:00 - 18:00' },
        { day: 'Friday', hours: '11:00 - 18:00' },
        { day: 'Saturday', hours: '11:00 - 18:00' }
    ]
    const [navItems, setItems] = useState(items.map(item => ({ ...item })))

    return (
        <section className="mb-4">
            <nav className="z-3 navbar navbar-expand-md top-0 w-100 overlay p-1 bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="60" className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="fas fa-bars "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {navItems.map((item) => {
                                return (
                                    <li key={item.name} className="nav-item px-1">
                                        <a className="nav-link" aria-current="page" href={item.url}>{item.name}</a>
                                    </li>)
                            })}
                            <li className="nav-item px-1 dropdown p-1">
                                <a className="nav-link dropdown-toggle py-1" href="#">Hours</a>
                                <ul className="dropdown-menu overlay p-2 end-0">
                                    {hours.map((day) => {
                                        return (
                                            <li key={day.day} className=" d-flex text-nowrap justify-content-between">
                                                <div>
                                                    <span className="">{day.day}</span>
                                                </div>
                                                <div>
                                                    <span className="">{day.hours}</span>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                            {/* <li className="nav-item btn bg-a ms-0 me-2 p-0">
                            <a role="button" className="nav-link " href="#">Store</a>
                        </li>*/}
                            <div className="d-flex">
                                <li className="nav-item">
                                    <a className="nav-link mx-1" href="https://www.facebook.com/yourbusiness" target="_blank" rel='noreferrer'>
                                        <i className="fab fa-facebook" style={font30}></i>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-1" href="https://www.instagram.com/yourbusiness" target="_blank" rel='noreferrer'>
                                        <i className="fab fa-instagram" style={font30}></i>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar;