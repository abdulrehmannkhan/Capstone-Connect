import React from 'react'
import MainSideBar from './MainSideBar'
import NavBar from './NavBar'
import GanttChart from './GanttChart';
import GanttChart2 from './GanttChart2';
import GanttChart3 from './GanttChart3';
import dots from './assets/icons8-dots-30.png'

function ProjectInner() {

    return (
        <div>
            <NavBar />
            <MainSideBar />
            <div className='mainmargins'>
                <div className="projInerMain">
                    <div className="container">
                        <div className="row pi1">
                            <h3>Project Details</h3>
                            <h2>Sample Project Name</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aliquam harum veniam libero, non, quibusdam nam quas vitae eos quo explicabo numquam ratione molestiae possimus.</p>
                        </div>
                        <div className="row pi2">
                            <div className="col-4">
                                <GanttChart2 />

                            </div>
                            <div className="col-4">
                                <GanttChart />
                            </div>
                            <div className="col-4">
                                <GanttChart3 />
                            </div>
                        </div>
                        <div className="row pi3">
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
                </div>
            </div>
        </div>
    )
}

export default ProjectInner
