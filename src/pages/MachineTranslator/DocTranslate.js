import React, { useState } from 'react';
import axios from 'axios';

function DocTranslate() {
    const [status, setStatus] = useState('');
    const [response, setResponse] = useState(null);
    const [downloadLink, setDownloadLink] = useState(null);

    const handleUpload = async (event) => {
        event.preventDefault();
        
        const fileInput = event.target.elements.file;
        const file = fileInput.files[0];
        
        if (!file) {
            alert("Please select a file.");
            return;
        }
        
        const formData = new FormData();
        formData.append('file', file);

        setStatus("Uploading and translating your document...");

        try {

            let extension = '';
            switch(file.type) {
                case 'application/pdf':
                    extension = 'pdf';
                    break;
                case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                    extension = 'docx'; // DOCX file
                    break;
                case 'application/msword':
                    extension = 'doc';
                    break;
                case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
                    extension = 'pptx';
                    break;
                case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
                    extension = 'xlsx';
                    break;
                default:
                    extension = 'txt'; // Fallback for unsupported types
            }

            formData.append("source_lang", "en")
            formData.append("target_lang", "ko")
            console.log("formdata", formData)
            const response = await axios.post("http://127.0.0.1:8000/machineTranslate/translate-doc", formData);
            const contentDisposition = response.headers['content-disposition'];
            let filename = 'translated_file.xlsx'; // Default filename
            
            if (contentDisposition) {
                const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
                if (matches != null && matches[1]) {
                    filename = matches[1].replace(/['"]/g, ''); // Remove quotes if present
                }
            }
            const blob = new Blob([response.data], { type: file.type });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            console.log("url",url)
            a.download = filename; // Set the desired file name
            document.body.appendChild(a);
            a.click(); // Trigger the download
            a.remove(); // Clean up
            window.URL.revokeObjectURL(url); // Release the blob 
            
            setStatus("Translation completed!");
        } catch (error) {
            setStatus("Error: " + error.message);
        }
    };

    return (
        <div>
            <h1>Translate Your Document</h1>
            
            <form onSubmit={handleUpload}>
                <label htmlFor="file">Choose a file (PDF, DOCX, PPTX, or XLSX):</label>
                <input type="file" id="file" name="file" accept=".pdf,.doc,.docx,.pptx,.xlsx" required />
                <button type="submit">Upload & Translate</button>
            </form>

            <div>{status}</div>
            
            {downloadLink && (
                <a href={downloadLink.url} download={downloadLink.name} style={{ display: 'block', marginTop: '10px' }}>
                    Download Translated Document
                </a>
            )}
            {/* <div>
                <h2>Response from Backend:</h2>
                <p>{JSON.stringify(response)}</p>
            </div> */}
        </div>
    );
}

export default DocTranslate;
