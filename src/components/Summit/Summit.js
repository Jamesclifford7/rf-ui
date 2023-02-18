import React from 'react'; 
import './Summit.scss'
import MountainLogo from '../images/MountainLogo.png'
import PersonLogo from '../images/PersonLogo.png'
import Arrow from '../images/logic-arrow.png'
import Circle from '../images/add-circle-outline.png'
import Computer from '../images/computer.png'
import NavBar from '../NavBar/NavBar'

export default function Summit() {
    return (
        <div className='summit-container'>
            <NavBar />
            <div className='summit-content'>
                <section className='header'>
                    <div className='left'>
                        <div className='image'>
                            <img src={MountainLogo} alt='mountain logo' />
                        </div>
                        <div>
                            <h1>RainFocus Summit</h1>
                            <p>December 15th</p>
                            <p>Lehi, Utah</p>
                        </div>
                    </div>
                    <div className='right'>
                        <button>Edit event</button>
                    </div>
                </section>
                <section className='event-setup'>
                    <h2>Event setup guide</h2>
                    <p>See the available list of modules below. We suggest that you start with the attendee module.</p>
                    <hr />
                </section>
                <section className='attendee'>
                    <div className='attendee-header'>
                        <img src={PersonLogo} alt='person logo' />
                        <h3>Attendee</h3>
                    </div>
                    <div className='step-1'>
                        <div className='top'>
                            <h4>Step 1: </h4>
                            <p>Base settings.</p>
                        </div>
                        <div className='bottom'>
                            <div className='setting'>
                                <h4>General</h4>
                                <p>Define Attendee types & attributes</p>
                            </div>
                            <div className='setting'>
                                <h4>Title</h4>
                                <p>Description that explains the value goes here. Description that explains the value goes here.</p>
                            </div>
                            <div className='setting'>
                                <h4>Title</h4>
                                <p>Description that explains the value goes here. Description that explains the value goes here.</p>
                            </div>
                        </div>
                    </div>
                    <div className='step-2'>
                        <div className='top'>
                            <h4>Step 2: </h4>
                            <p>Build registration workflows.</p>
                        </div>
                        <div className='bottom'>
                            <div className='setting'>
                                <div className='setting-header'>
                                    <img src={Arrow} alt='arrow icon' />
                                    <h4>Attendee Registration</h4>
                                </div>
                                <p>Start by creating a general registration workflow</p>
                            </div>
                            <div className='setting'>
                                <div className='setting-header'>
                                    <img src={Arrow} alt='arrow icon' />
                                    <h4>Attendee Registration</h4>
                                </div>
                                <p>Start by creating a general registration workflow</p>
                            </div>
                            <div className='setting'>
                                <div className='setting-header'>
                                    <img src={Arrow} alt='arrow icon' />
                                    <h4>Attendee Registration</h4>
                                </div>
                                <p>Start by creating a general registration workflow</p>
                            </div>
                            <div className='setting add'>
                                <img src={Circle} alt='circle icon' />
                                <p>Add Registration Workflow</p>
                            </div>
                        </div>
                    </div>
                    <div className='step-3'>
                        <div className='top'>
                            <h4>Step 3: </h4>
                            <p>Design post-registration experiences.</p>
                        </div>
                        <div className='bottom'>
                            <div className='experience'>
                                <div className='experience-header'>
                                    <img src={Computer} alt='computer icon' />
                                    <h4>Attendee Registration</h4>
                                </div>
                                <p>Start by creating a general registration workflow</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

