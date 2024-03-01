import React from 'react'
import MainSideBar from './MainSideBar'
import NavBar from './NavBar'
import DocumentList from './DocumentList'



function AdminDocs() {
    return (
        <div>
            <NavBar />
            <MainSideBar />
            <div className='mainmargins'>
                <div className="AdminDocsMain">
                    <DocumentList />
                </div>
            </div>
        </div>
    )
}

export default AdminDocs
