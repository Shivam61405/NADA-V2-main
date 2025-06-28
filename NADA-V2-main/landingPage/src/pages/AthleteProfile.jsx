import React, { useState } from 'react';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Box, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  maxWidth: '800px',
  minHeight: '80vh',
  margin: 'auto',
  backgroundColor: "white",
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  padding: '16px',
  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out', 
};

const inputStyle = {
  backgroundColor: "white", // Ensures input fields are always visible
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '8px',
  width: '100%',
  boxSizing: 'border-box',
};

const photoPreviewStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginTop: '8px',
};

export default function AthleteProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    athleteId: '',
    athleteName: '',
    state: '',
    email: '',
    dob: '',
    presentAddress: '',
    permanentAddress: '',
    city: '',
    debutDate: '',
    pinCode: '',
    profilePhoto: null,
  });

  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
      setPhotoPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    navigate('/lab/upload');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: 2 }}>
        <Box sx={containerStyle}>
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Athlete Profile
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Profile Photo</label>
                <input
                  type="file"
                  name="profilePhoto"
                  accept="image/*"
                  onChange={handleChange}
                  className="mt-1 block w-full border rounded p-2"
                  style={inputStyle}
                />
                {photoPreview && (
                  <img
                    src={photoPreview}
                    alt="Profile Preview"
                    style={photoPreviewStyle}
                  />
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Athlete ID</label>
                <Input
                  name="athleteId"
                  className="mt-1 block w-full"
                  value={formData.athleteId}
                  onChange={handleChange}
                  placeholder="Enter Athlete ID"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Athlete Name</label>
                <Input
                  name="athleteName"
                  className="mt-1 block w-full"
                  value={formData.athleteName}
                  onChange={handleChange}
                  placeholder="Enter Athlete Name"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <Input
                  name="state"
                  className="mt-1 block w-full"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter State"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <Input
                  name="email"
                  className="mt-1 block w-full"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <Input
                  name="dob"
                  className="mt-1 block w-full"
                  value={formData.dob}
                  onChange={handleChange}
                  placeholder="Enter Date of Birth"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Present Address</label>
                <Input
                  name="presentAddress"
                  className="mt-1 block w-full"
                  value={formData.presentAddress}
                  onChange={handleChange}
                  placeholder="Enter Present Address"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Permanent Address</label>
                <Input
                  name="permanentAddress"
                  className="mt-1 block w-full"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  placeholder="Enter Permanent Address"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <Input
                  name="city"
                  className="mt-1 block w-full"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter City"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Debut Date</label>
                <Input
                  name="debutDate"
                  className="mt-1 block w-full"
                  value={formData.debutDate}
                  onChange={handleChange}
                  placeholder="Enter Debut Date"
                  style={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Pin Code</label>
                <Input
                  name="pinCode"
                  className="mt-1 block w-full"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="Enter Pin Code"
                  style={inputStyle}
                />
              </div>
            </div>
            <div className="mt-6 text-right">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-lg">
                Submit
              </Button>
            </div>
          </form>
        </Box>
      </Box>
    </div>
  );
}
