import React, { useState } from 'react';
import MainSideBar from './MainSideBar';
import NavBar from './NavBar';


function SubmitProposal() {

    const [submissionStatus, setSubmissionStatus] = useState('pending');
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setSubmissionStatus('approved'); 
    };

    return (
        <div>
            
            <NavBar />
            <MainSideBar />
            <div className='mainmargins'>
                <div className="container">
                    <div className="submitProposalMain">
                        <div className="row">
                            <h2>Submit proposal</h2>
                        </div>
                        {submissionStatus === 'pending' ? (
                            <div className="row">
                                <form onSubmit={handleSubmit}>
                                    <div class="row">
                                        <div class="col">
                                            <label>Project Title </label>
                                            <input type="text" class="form-control" placeholder="Capstone" />
                                        </div>
                                        <div class="col">
                                            <label>Supervisor</label>
                                            <select id="inputState" class="form-control" >
                                                <option selected>Select Supervisor</option>
                                                <option>Ma'am Urooj</option>
                                                <option>Ma'am Yusra</option>
                                                <option>Ma'am Sohaan</option>
                                                <option>Sir Conrad</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <label>Team Lead</label>
                                            <input type="text" class="form-control" placeholder="Nirmal" />
                                        </div>
                                        <div class="col">
                                            <label>Member1  Name </label>
                                            <input type="text" class="form-control" placeholder="Lorem Ips" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <label>Member2  Name </label>
                                            <input type="text" class="form-control" placeholder="Lorem Ips" />
                                        </div>
                                        <div class="col">
                                            <label>Member3  Name </label>
                                            <input type="text" class="form-control" placeholder="Lorem Ips" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <label>Project Description</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Lorem ipsum dummy Text..."></textarea>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <label>Drop files or click to upload</label>
                                            <br />
                                            <input type="file" class="form-control-file" id="exampleFormControlFile1" placeholder='Drop files or click to upload'></input>
                                        </div>

                                    </div><div class="row">
                                        <div class="col">
                                            <button type="submit"  >Submit Proposal</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="row subStatus">
                                <div className="col">
                                    {/* <h3>Proposal Status: {submissionStatus}</h3> */}
                                    <h3>Proposal Status: <span>Pending</span></h3>
                                    
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubmitProposal;
