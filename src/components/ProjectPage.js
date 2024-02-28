import React from 'react';
import MainSideBar from './MainSideBar'
import NavBar from './NavBar'

const ProjectPage = () => {

    const projectData = {
        projectId: '123',
        projectName: 'Sample Project',
        teamMembers: ['John Doe', 'Jane Doe', 'Alice'],
        supervisors: ['Supervisor A'],
        coSupervisors: ['Co-Supervisor X'],
        projectGrade: ['B+'],
        introduction: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum deleniti dolorum perspiciatis mollitia assumenda asperiores id eligendi quidem, recusandae impedit, ratione cumque molestias iure rerum voluptate, debitis saepe nisi sequi? Itaque sint et voluptates. Beatae fugiat totam laboriosam expedita eveniet, quam itaque blanditiis minus voluptas, ab repellendus sapiente id vero.',
        inspiration: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum atque cumque optio consequatur modi aspernatur molestias nam suscipit odit voluptatum, id vitae ipsum magni aut corporis dolores natus, nesciunt dicta, velit sed hic eos. Iste velit ducimus quo maiores...',
        // Add other project-related details as needed
    };

    const handleDownloadProposal = () => {
        console.log('Downloading project proposal...');
    };

    return (
        <div>
            <NavBar />
            <MainSideBar />
            <div className='mainmargins'>
                <div className="project-page">
                    <h2>Project Details</h2>
                    <div className="project-info">
                        <p>
                            <strong>Project ID:</strong> {projectData.projectId}
                        </p>
                        <p>
                            <strong>Project Name:</strong> {projectData.projectName}
                        </p>
                        <p>
                            <strong>Team Members:</strong> {projectData.teamMembers.join(', ')}
                        </p>
                        <p>
                            <strong>Supervisors:</strong> {projectData.supervisors.join(', ')}
                        </p>
                        <p>
                            <strong>Co-Supervisors:</strong> {projectData.coSupervisors.join(', ')}
                        </p>
                        <p>
                            <strong>Grade:</strong> {projectData.projectGrade.join(', ')}
                        </p>
                        <p>
                            <strong>Introduction:</strong> {projectData.introduction}
                        </p>
                        <p>
                            <strong>Inspiration:</strong> {projectData.inspiration}
                        </p>
                    </div>
                    <button onClick={handleDownloadProposal}>Download Project Proposal</button>
                </div>
            </div>
        </div>

    );
};

export default ProjectPage;
