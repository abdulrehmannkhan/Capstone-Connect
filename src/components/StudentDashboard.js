import React from 'react'
import MainSideBar from './MainSideBar'
import NavBar from './NavBar'
import BannerImg from './assets/Group 39890.png'
import dots from './assets/icons8-dots-30.png'
import TeamMembers from './assets/Frame 48.png'
import Supervisors from './assets/Frame 49.png'

function StudentDashboard() {
    return (
        <div>
            <NavBar />
            <MainSideBar />
            <div className='mainmargins'>
                <div className="stdDashMain">
                    <div className="banner">
                        <div className="container">
                            <div className="row">
                                <div className="bannertxt">
                                    <p className='curDate'>September 4,  2023</p>
                                    <h2>Welcome back, John!</h2>
                                    <p>Always stay updated in your student portal</p>
                                </div>
                                <div className="bannerimg">
                                    <img src={BannerImg} alt="BannerHeroImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dahboardContent">
                        <div className="container">
                            <div className="row">
                                <div className="col-9">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="latTask">
                                                <div className="txt">
                                                    <h4>Latest  Task</h4>
                                                    {/* <button>More...</button> */}
                                                </div>
                                                <div className="TaskProgress">
                                                    <ul>
                                                        <li>
                                                            <div className="taskName">
                                                                <span>Task5&nbsp;&nbsp; - </span>&nbsp;&nbsp;&nbsp; HTML
                                                            </div>
                                                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                <div className="progress-bar bg-success" style={{ width: '25%' }}>25%</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="taskName">
                                                                <span>Task4&nbsp;&nbsp; - </span>&nbsp;&nbsp;&nbsp; Routing
                                                            </div>
                                                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                <div className="progress-bar bg-warning" style={{ width: '60%' }}>60%</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="taskName">
                                                                <span>Task3&nbsp;&nbsp; - </span>&nbsp;&nbsp;&nbsp; Identifier
                                                            </div>
                                                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                <div className="progress-bar bg-danger" style={{ width: '20%' }}>20%</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="taskName">
                                                                <span>Task8&nbsp;&nbsp; - </span>&nbsp;&nbsp;&nbsp; CSS
                                                            </div>
                                                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                <div className="progress-bar bg-success" style={{ width: '60%' }}>60%</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="taskName">
                                                                <span>Task4&nbsp;&nbsp; - </span>&nbsp;&nbsp;&nbsp; Scripting
                                                            </div>
                                                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                <div className="progress-bar bg-danger" style={{ width: '70%' }}>70%</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="taskName">
                                                                <span>Task9&nbsp;&nbsp; - </span>&nbsp;&nbsp;&nbsp; RoadMap
                                                            </div>
                                                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                                <div className="progress-bar bg-warning" style={{ width: '30%' }}>30%</div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="timeSpentMain">
                                                <div className="txt">
                                                    <h4>Time Spent</h4>
                                                    {/* <button>More...</button> */}
                                                </div>
                                                <div className="verticalbarsMain">
                                                    <div class="barcontainer">
                                                        <h5>Mon</h5>
                                                        <div class="bar" style={{ height: '30%' }}>
                                                        </div>
                                                    </div>
                                                    <div class="barcontainer">
                                                        <h5>Tue</h5>
                                                        <div class="bar" style={{ height: '70%' }}>
                                                        </div>
                                                    </div>
                                                    <div class="barcontainer">
                                                        <h5>Wed</h5>
                                                        <div class="bar" style={{ height: '50%' }}>
                                                        </div>
                                                    </div>
                                                    <div class="barcontainer">
                                                        <h5>Thu</h5>
                                                        <div class="bar" style={{ height: '30%' }}>
                                                        </div>
                                                    </div>
                                                    <div class="barcontainer">
                                                        <h5>Fri</h5>
                                                        <div class="bar" style={{ height: '70%' }}>
                                                        </div>
                                                    </div>
                                                    <div class="barcontainer">
                                                        <h5>Sat</h5>
                                                        <div class="bar" style={{ height: '50%' }}>
                                                        </div>
                                                    </div>
                                                    <div class="barcontainer">
                                                        <h5>Sun</h5>
                                                        <div class="bar" style={{ height: '50%' }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="stdDashSec2">
                                            <div className="col-4">
                                                <div className="todo">
                                                    <div className="head">
                                                        <h5>to do</h5>
                                                        <button>+</button>
                                                    </div>
                                                    <div className="card">
                                                        <div className="uppersec">
                                                            <p className="task"> task1 </p>
                                                            <button><img src={dots} alt="" /></button>
                                                        </div>
                                                        <h4>Overall Process of full product for first version</h4>
                                                        <p className="dscrpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum, delectus incidunt repellat libero doloribus!</p>
                                                    </div>
                                                    <div className="card">
                                                        <div className="uppersec">
                                                            <p className="task"> task1 </p>
                                                            <button><img src={dots} alt="" /></button>
                                                        </div>
                                                        <h4>Overall Process of full product for first version</h4>
                                                        <p className="dscrpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum, delectus incidunt repellat libero doloribus!</p>
                                                    </div>
                                                    <div className="card">
                                                        <div className="uppersec">
                                                            <p className="task"> task1 </p>
                                                            <button><img src={dots} alt="" /></button>
                                                        </div>
                                                        <h4>Overall Process of full product for first version</h4>
                                                        <p className="dscrpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum, delectus incidunt repellat libero doloribus!</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="todo pending">
                                                    <div className="head">
                                                        <h5>In progress</h5>
                                                        <button>+</button>
                                                    </div>
                                                    
                                                    <div className="card">
                                                        <div className="uppersec">
                                                            <p className="task"> task1 </p>
                                                            <button><img src={dots} alt="" /></button>
                                                        </div>
                                                        <h4>Overall Process of full product for first version</h4>
                                                        <p className="dscrpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum, delectus incidunt repellat libero doloribus!</p>
                                                    </div>
                                                    <div className="card">
                                                        <div className="uppersec">
                                                            <p className="task"> task1 </p>
                                                            <button><img src={dots} alt="" /></button>
                                                        </div>
                                                        <h4>Overall Process of full product for first version</h4>
                                                        <p className="dscrpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum, delectus incidunt repellat libero doloribus!</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="todo cmpleted">
                                                    <div className="head">
                                                        <h5>Completed</h5>
                                                        <button>+</button>
                                                    </div>
                                                    <div className="card">
                                                        <div className="uppersec">
                                                            <p className="task"> task1 </p>
                                                            <button><img src={dots} alt="" /></button>
                                                        </div>
                                                        <h4>Overall Process of full product for first version</h4>
                                                        <p className="dscrpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatum, delectus incidunt repellat libero doloribus!</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="teamMembersSec">
                                        <h3>Team Members</h3>
                                        <img src={TeamMembers} alt="" />
                                    </div>
                                    <div className="SuepervisorsSec">
                                        <h3>Supervisors</h3>
                                        <img src={Supervisors} alt="" />
                                    </div>
                                    <div className="SuepervisorFeedback">
                                        <h3>Supervisor  Feedback</h3>
                                        <div className="feebbackMain">
                                            <div className="feed1">
                                                <h4>Prelim payment due</h4>
                                                <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <button>See More</button>
                                            </div>
                                            <div className="feed1">
                                                <h4>Exam schedule</h4>
                                                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate liber</p>
                                                <button>See More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDashboard
