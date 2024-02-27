import React, { useState } from 'react';
import MainSideBar from './MainSideBar';
import NavBar from './NavBar';

const AccordionItem = ({ projectNo, projectName, littleDescription, moreDescription, proposalDate }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const handleApprove = () => {
        // Handle approve logic
        console.log('Project Approved');
        alert('Project Approved');

    };

    const handleReject = () => {
        // Handle reject logic
        alert('Project Rejected');
    };

    return (
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <div className="accordion-header" onClick={toggleAccordion}>
                <h3 className='pNo'>{projectNo}</h3>
                <h3 className='pName'>{projectName}</h3>
                <p className='shortDescrp'>{littleDescription}</p>
                <p className='pDate'>{proposalDate}</p>
                <p className='pStatus'>Pending</p>
                <button className="accordion-arrow" onClick={toggleAccordion}>
                    {isOpen ? '-' : '+'}
                </button>
            </div>
            {isOpen && (
                
                <div className="accordion-content">

                    {/* <p>{`Pending Text: ${isPending ? 'Pending' : 'Not Pending'}`}</p> */}
                    <p>{moreDescription}</p>
                    <div className="accordion-buttons">
                        <button className='statusApv' onClick={handleApprove}>Approve</button>
                        <button className='statusRej' onClick={handleReject}>Reject</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const Tab = ({ label, isActive, onClick }) => {
    return (
        <div className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
            {label}
        </div>
    );
};

function Proposals() {

    const [activeTab, setActiveTab] = useState('Tab 1');

    const handleTabClick = (tabLabel) => {
        setActiveTab(tabLabel);
    };

    return (
        <div>
            <NavBar />
            <MainSideBar />
            <div className='mainmargins'>
                <div className='container'>
                    <div className="row">
                        <div className="ProposalsMaainn">
                            <h2>proposals</h2>
                            <div className="tabs-container">
                                <div className="tabs">
                                    <Tab label="Pending Proposals(3)" isActive={activeTab === 'Tab 1'} onClick={() => handleTabClick('Tab 1')} />
                                    <Tab label="Approved" className='app' isActive={activeTab === 'Tab 2'} onClick={() => handleTabClick('Tab 2')} />
                                    <Tab label="Rejected" className='rej' isActive={activeTab === 'Tab 3'} onClick={() => handleTabClick('Tab 3')} />
                                </div>
                                <div className="tab-content">
                                    {activeTab === 'Tab 1' && <div><div className="accordion">
                                        <AccordionItem
                                            projectNo="01"
                                            proposalDate="10 Nov 2023"
                                            projectName="Sample Project 1"
                                            littleDescription="A brief description of Sample Project 1."
                                            moreDescription="Detailed description of Sample Project 2 when accordion is open.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis minima numquam molestias eligendi labore saepe repellat tempora ut debitis commodi qui sunt nisi, cupiditate dolores ullam impedit pariatur quidem veniam!"
                                        />
                                        <AccordionItem
                                            projectNo="02"
                                            projectName="Sample Project 2"
                                            proposalDate="10 Nov 2023"
                                            littleDescription="A brief description of Sample Project 2."
                                            moreDescription="Detailed description of Sample Project 2 when accordion is open.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis minima numquam molestias eligendi labore saepe repellat tempora ut debitis commodi qui sunt nisi, cupiditate dolores ullam impedit pariatur quidem veniam!"
                                        />
                                    </div></div>}
                                    {activeTab === 'Tab 2' && <div>NOT Approved Yet</div>}
                                    {activeTab === 'Tab 3' && <div>NOT Rejected Yet</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proposals
