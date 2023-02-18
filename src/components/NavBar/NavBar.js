import React from 'react'; 
import './NavBar.scss'
import RainFocusLogo from '../images/RainFocusLogo.png'
import MountainLogo from '../images/MountainLogo.png'
import UserIcon from '../images/UserIcon.png'
import Search from '../images/Search.png'
import TabIcon from '../images/TabIcon.png'
import TabIconPurple from '../images/TabIconPurple.png'

export default function NavBar() {
    return (
        <nav>
            <section className='left'>
                <div className='links'>
                    <img src={RainFocusLogo} alt='rainfocus logo' />
                    <img src={MountainLogo} alt='mountain logo' />
                </div>
                <div className='user'>
                    <img src={UserIcon} alt='user icon' />
                </div>
            </section>
            <section className='right'>
                <div className='nav-header'>
                    <h5>RainFocus Summit</h5>
                    <p>Lehi, Utah • December 15th</p>
                    <div className='search-container'>
                        <div className='search-icon'>
                            <img src={Search} alt='search icon' />
                        </div>
                        <input type='search' defaultValue='Search'/>
                    </div>
                </div>
                <div className='tabs'>
                    <div className='tab'>
                        <img src={TabIcon} alt='tab icon' />
                        <h5>Guide</h5>
                    </div>
                    <div className='tab active'>
                        <img src={TabIconPurple} alt='tab icon' />
                        <h5>Attendees</h5>
                    </div>
                    <div className='dropdown-item'>
                        <h5>Attendee types</h5>
                    </div>
                    <div className='dropdown-item'>
                        <h5>Packages</h5>
                    </div>
                    <div className='dropdown-item'>
                        <h5>Reg codes</h5>
                    </div>
                    <div className='dropdown-item'>
                        <h5>Discounts</h5>
                    </div>
                    <div className='tab'>
                        <img src={TabIcon} alt='tab icon' />
                        <h5>Content</h5>
                    </div>
                    <div className='tab'>
                        <img src={TabIcon} alt='tab icon' />
                        <h5>Exhibitors</h5>
                    </div>
                </div>
            </section>
        </nav>
    )
}