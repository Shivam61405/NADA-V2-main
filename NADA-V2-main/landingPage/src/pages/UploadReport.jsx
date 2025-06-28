import React, { useState } from 'react';
import { Box, Typography } from "@mui/material";
import { Button } from "../components/ui/button";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const containerStyle = {
  maxWidth: '600px',
  minHeight: '50vh',
  margin: 'auto',
};

export default function UploadReport() {
  const navigate = useNavigate();
  const [files, setFiles] = useState({
    abp: null,
    report: null,
    bloodTest: null,
    urineTest: null,
  });
 
  const handleFileChange = (e) => {
    setFiles({
      ...files,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleUpload = async () => {
    const token = localStorage.getItem('token');
    const formData = new FormData();

    // Append all files to formData
    Object.keys(files).forEach((key) => {
      if (files[key]) {
        formData.append(key, files[key]);
      }
    });

    try {
      const res = await axios.post('http://localhost:5001/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      // Reset form
   
    setFiles(null);
    
   
      console.log('Files uploaded successfully:', res.data);
      navigate('/home'); // Redirect after successful upload
    } catch (err) {
      console.error('Failed to upload files:', err.message);
    }
    
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: 2 }}>
        <Box
          sx={{
            padding: 2,
            backgroundColor: "white",
            borderRadius: 1,
            boxShadow: 1,
            ...containerStyle,
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={2} textAlign="center">
            Upload Report
          </Typography>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium">ABP</h4>
              <input
                type="file"
                name="abp"
                className="w-full border rounded p-2"
                onChange={handleFileChange}
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Report</h4>
              <input
                type="file"
                name="report"
                className="w-full border rounded p-2"
                onChange={handleFileChange}
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Blood Test</h4>
              <input
                type="file"
                name="bloodTest"
                className="w-full border rounded p-2"
                onChange={handleFileChange}
              />
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Urine Test</h4>
              <input
                type="file"
                name="urineTest"
                className="w-full border rounded p-2"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <Button onClick={handleUpload} className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4">
            Upload
          </Button>
        </Box>
      </Box>
    </div>
  );
}
