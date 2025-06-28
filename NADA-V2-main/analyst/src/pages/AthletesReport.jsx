import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const AthletesReport = () => {
  const athletes = [
    { id: 'Aid#34', date: '12Dec,2023', name: 'Saurabh', location: 'Chandigarh', updates: 'Reports' },
    { id: 'Aid#35', date: '20Dec,2023', name: 'Ritika', location: 'Amritsar', updates: 'Connection' },
    { id: 'Aid#36', date: '23Dec,2023', name: 'Jatin', location: 'Jalandar', updates: 'Reports' },
    { id: 'Aid#37', date: '24Dec,2023', name: 'Manus', location: 'PathanKot', updates: 'Reports' },
    { id: 'Aid#38', date: '25Dec,2023', name: 'Shivam', location: 'Patiala', updates: 'Reports' },
    { id: 'Aid#39', date: '26Dec,2023', name: 'Pratihiba', location: 'Moga', updates: 'Achievements' },
    { id: 'Aid#40', date: '27Dec,2023', name: 'Monu', location: 'Mansa', updates: 'Reports' },
    { id: 'Aid#41', date: '29Dec,2023', name: 'Aryan', location: 'Firozpur', updates: 'Reports' },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Box>
          <Typography variant="h5" fontWeight="bold">Athlete Profile</Typography>
          <Typography variant="body1" color="green">Updation</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Athlete Id</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Updates</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {athletes.map((athlete, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img src="https://placehold.co/30x30" alt={`Profile picture of ${athlete.name}`} className="w-8 h-8 rounded-full mr-2" />
                  {athlete.id}
                </TableCell>
                <TableCell>{athlete.date}</TableCell>
                <TableCell>{athlete.name}</TableCell>
                <TableCell>{athlete.location}</TableCell>
                <TableCell>{athlete.updates}</TableCell>
                <TableCell>
                  <Button variant="contained" color="success">More</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AthletesReport;