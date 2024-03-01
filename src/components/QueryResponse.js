import React from 'react';
import MainSideBar from './MainSideBar';
import NavBar from './NavBar';

function QueryResponse() {
    return (
        <div>
            <NavBar />
            <MainSideBar />
            <div className='mainmargins'>
                <div className="QueryRespMain">
                    <h2>Query Response</h2>
                    <form >
                        <div class="row">
                            <div class="col">
                                <label>Query Number </label>
                                <p>001</p>
                            </div>
                            <div class="col">
                                <label>Query Title</label>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                            <div className="col"></div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label>Query Description</label>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quis libero laudantium, et eum tempore! Consequuntur magni architecto placeat eius. Maxime tenetur animi, ut optio quidem, repudiandae odit provident aut molestias repellendus sit minus suscipit!</p>
                            </div>
                            
                        </div>
                        
                        <div class="row">
                            <div class="col">
                                <label>Query Response</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Lorem ipsum dummy Text..."></textarea>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col">
                                <button type="submit"  >Reply</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default QueryResponse
