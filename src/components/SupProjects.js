import React from 'react'
import MainSideBar from './MainSideBar';
import NavBar from './NavBar';
import dots from './assets/icons8-dots-30.png'

function SupProjects() {
    return (
        <div>
            <NavBar />
            <MainSideBar />
            <div className='mainmargins'>
                <div className="conatiner">
                    <div className="row">
                        <div className="supProjectMain">
                            <h2>Projects</h2>
                            <div className="stdDashSec2">
                                <div className="col-4">
                                    <div className="todo">
                                        <div className="head">
                                            <h5>Not Started</h5>
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
                                            <h5>OnGoing</h5>
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

export default SupProjects
