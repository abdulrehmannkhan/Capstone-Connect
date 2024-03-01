import React from 'react'
import MainSideBar from './MainSideBar'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

function AdminQueries() {
    return (
        <div>
            <NavBar />
            <MainSideBar />
            <div className='mainmargins'>
                <div className="container">
                    <div className="row">
                        <div className="prevProjectMain Adminquery">
                            <h2>List Of Queries</h2>
                            <input id="search" type="text" class="form-control" placeholder="Search By Query or Query Name ......" />
                            <br />
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>QUERY  NUMBER</th>
                                        <th>QUERY NAME</th>
                                        <th>DESCRIPTION</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>001</td>
                                        <td>Project Alpha</td>
                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                                        <td><Link to='/QueryResponse'><button>Response</button></Link></td>
                                    </tr>
                                    <tr>
                                        <td>002</td>
                                        <td>Project Beta</td>
                                        <td>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td><td><Link to='/QueryResponse'><button>Response</button></Link></td>
                                    </tr>
                                    <tr>
                                        <td>003</td>
                                        <td>Project Gamma</td>
                                        <td>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</td>
                                        <td><Link to='/QueryResponse'><button>Response</button></Link></td>
                                    </tr>
                                    <tr>
                                        <td>004</td>
                                        <td>Project Delta</td>
                                        <td>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</td><td><Link to='/QueryResponse'><button>Response</button></Link></td>
                                    </tr>
                                    <tr>
                                        <td>005</td>
                                        <td>Project Epsilon</td>
                                        <td>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</td><td><Link to='/QueryResponse'><button>Response</button></Link></td>
                                    </tr>
                                    <tr>
                                        <td>006</td>
                                        <td>Project Zeta</td>
                                        <td>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td><td><Link to='/QueryResponse'><button>Response</button></Link></td>
                                    </tr>
                                    <tr>
                                        <td>007</td>
                                        <td>Project Eta</td>
                                        <td>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</td><td><Link to='/QueryResponse'><button>Response</button></Link></td>
                                    </tr>
                                    <tr>
                                        <td>008</td>
                                        <td>Project Theta</td>
                                        <td>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</td><td><Link to='/QueryResponse'><button>Response</button></Link></td>
                                    </tr>
                                    <tr>
                                        <td>009</td>
                                        <td>Project Iota</td>
                                        <td>Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td><td><Link to='/QueryResponse'><button>Response</button></Link></td>
                                    </tr>
                                    <tr>
                                        <td>010</td>
                                        <td>Project Kappa</td>
                                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td><td><Link to='/QueryResponse'><button>Response</button></Link></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminQueries
