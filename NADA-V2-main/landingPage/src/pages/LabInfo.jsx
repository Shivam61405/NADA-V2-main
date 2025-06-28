import React , { useState }from 'react';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const containerStyle = {
  maxWidth: "600px",
  minHeight: "50vh",
  margin: "auto",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  padding: "16px",
  transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
};

const inputStyle = {
  backgroundColor: "white",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "8px",
  width: "100%",
  boxSizing: "border-box",
};

export default function LabInfo() {
  const navigate = useNavigate();

  // State for form inputs
  const [labId, setLabId] = useState("");
  const [labName, setLabName] = useState("");
  const [address, setAddress] = useState("");

  const handleNext = async () => {
    // Validate inputs
    if (!labId || !labName || !address) {
      alert("Please fill out all fields.");
      return;
    }

    // Create payload
    const labInfo = {
      labId,
      labName,
      address,
    };
    
    try {
      // Send data to backend
      const response = await axios.post("http://localhost:5001/api/labinfo", labInfo);
      console.log("Lab info submitted successfully:", response.data);

      // Navigate to the next page
      navigate("/lab/athlete");
    } catch (error) {
      console.error("Error submitting lab info:", error);
      alert("Failed to submit lab information. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: 2 }}>
        <Box sx={containerStyle}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Lab Information
          </Typography>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Lab ID</label>
              <Input
                placeholder="Enter Lab ID"
                value={labId}
                onChange={(e) => setLabId(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Lab Name</label>
              <Input
                placeholder="Enter Lab Name"
                value={labName}
                onChange={(e) => setLabName(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Address</label>
              <Input
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={inputStyle}
              />
            </div>
            <Button onClick={handleNext} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Next
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  );
}