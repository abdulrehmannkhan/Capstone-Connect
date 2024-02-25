import React from 'react'
import MainSideBar from './MainSideBar'
import NavBar from './NavBar'

function StudentDashboard() {
    return (
        <div>
            <NavBar />
            <MainSideBar />
            <div className='mainmargins'>
                <h2>student dashboard</h2>
            </div>
        </div>
    )
}

export default StudentDashboard
