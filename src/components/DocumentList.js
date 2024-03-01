// src/DocumentList.js
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DocumentList = () => {
    const [documents, setDocuments] = useState([
        { title: 'Meeting Agenda', name: 'Document1.pdf', size: 1024 },
        { title: 'Project Proposal', name: 'Document2.docx', size: 2048 },
        { title: 'Notes', name: 'Document3.txt', size: 512 },
        { title: 'Research Paper', name: 'Document4.pdf', size: 1536 },
        { title: 'Presentation Slides', name: 'Document5.pptx', size: 4096 },
        { title: 'Code Snippets', name: 'Document6.js', size: 256 },
    ]);
    const [selectedDocument, setSelectedDocument] = useState(null);

    const onDrop = (acceptedFiles) => {
        // Handle the uploaded files and update the state
        setDocuments([...documents, ...acceptedFiles.map(file => ({ title: `New Document`, name: file.name, size: file.size }))]);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'application/pdf', // Adjust the accepted file types as needed
    });

    const handleDocumentClick = (index) => {
        setSelectedDocument(index);
        // Add logic to handle document click (e.g., show update options)
    };

    // Styles for demonstration purposes
    const dropzoneStyle = {
        border: '2px dashed #ccc',
        borderRadius: '4px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
    };

    const listStyle = {
        listStyleType: 'none',
        padding: 0,
        marginTop: '20px',
    };

    const listItemStyle = {
        cursor: 'pointer',
        padding: '8px',
        borderBottom: '1px solid #ccc',
    };

    const selectedDocumentStyle = {
        marginTop: '20px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    const handleDownloadClick = (document) => {
        // Implement download logic (e.g., create a download link)
        const downloadLink = document.name; // Replace with your download link logic
        console.log(`Downloading ${downloadLink}`);
      };
    
      const handleViewClick = (document) => {
        // Implement view logic (e.g., open a new tab with the document)
        const viewLink = document.name; // Replace with your view link logic
        window.open(viewLink, '_blank');
      };

    return (
        <div>
            <h2>Document List</h2>
            <div {...getRootProps()} style={dropzoneStyle}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <ul style={listStyle}>
                {documents.map((document, index) => (
                    <li key={index} onClick={() => handleDocumentClick(index)} style={listItemStyle}>
                        {index === selectedDocument ? (
                            <strong>{document.title} - {document.name}</strong>
                        ) : (
                            `${document.title} - ${document.name} - ${document.size} KB`
                        )}
                    </li>
                ))}
            </ul>
            {selectedDocument !== null && (
                <div style={selectedDocumentStyle}>
                    <h2>Selected Document Details</h2>
                    <p>Title: {documents[selectedDocument].title}</p>
                    <p>Name: {documents[selectedDocument].name}</p>
                    <p>Size: {documents[selectedDocument].size} KB</p>
                    <button onClick={() => handleDownloadClick(documents[selectedDocument])}>Download</button>
                    <button onClick={() => handleViewClick(documents[selectedDocument])}>View</button>
                    {/* Add more details as needed */}
                </div>
            )}
            {/* Add additional components for updating documents as needed */}
        </div>
    );
};

export default DocumentList;
