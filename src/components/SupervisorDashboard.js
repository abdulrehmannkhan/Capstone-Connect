import React from 'react'
import MainSideBar from './MainSideBar'
import NavBar from './NavBar'
import BannerImg from './assets/review_placeholder.png'
import ProjectCard from './ProjectCard';



function SupervisorDashboard() {

    return (
        <div>
            <NavBar />
            <MainSideBar />
            <div className='mainmargins'>
                <div className="supDashMain">
                    <div className="container">
                        <div className="row">
                            <div className="banner">
                                <div className="bannertxt">
                                    <h2>Welcome back, Jon Snow!</h2>
                                    <p>Always stay updated in your student portal</p>
                                </div>
                                <div className="bannerimg">
                                    <img src={BannerImg} alt="BannerHeroImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">

                        <div className="row">
                            <div className="projOvr">
                                <h2>Projects Overview</h2>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6">
                                            <ProjectCard
                                                projectName="Sample Project 1"
                                                projectLead="John Doe"
                                                description="A brief description of the project."
                                                progress={50}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <ProjectCard
                                                projectName="Sample Project 2"
                                                projectLead="John Doe"
                                                description="A brief description of the project."
                                                progress={70}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <ProjectCard
                                                projectName="Sample Project 3"
                                                projectLead="John Doe"
                                                description="A brief description of the project."
                                                progress={30}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <ProjectCard
                                                projectName="Sample Project 4"
                                                projectLead="John Doe"
                                                description="A brief description of the project."
                                                progress={60}
                                            />
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

export default SupervisorDashboard
