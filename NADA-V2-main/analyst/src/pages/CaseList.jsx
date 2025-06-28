import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, InputAdornment, MenuItem, Select } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CaseList = () => {
  const cases = [
    { id: 'C#34', date: '12Dec,2023', athleteId: 'AID#01', status: 'In-Progress' },
    { id: 'C#35', date: '20Dec,2023', athleteId: 'AID#02', status: 'In-Progress' },
    { id: 'C#36', date: '23Dec,2023', athleteId: 'AID#03', status: 'In-Progress' },
    { id: 'C#37', date: '24Dec,2023', athleteId: 'AID#04', status: 'In-Progress' },
    { id: 'C#38', date: '25Dec,2023', athleteId: 'AID#05', status: 'In-Progress' },
    { id: 'C#39', date: '26Dec,2023', athleteId: 'AID#06', status: 'Finished' },
    { id: 'C#40', date: '27Dec,2023', athleteId: 'AID#07', status: 'Finished' },
    { id: 'C#41', date: '29Dec,2023', athleteId: 'AID#08', status: 'Finished' },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Box>
          <Typography variant="h5" fontWeight="bold">Case List</Typography>
          <Typography variant="body1" color="green">Active Cases</Typography>
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
          <Select
            defaultValue="Newest"
            variant="outlined"
            endAdornment={<ArrowDropDownIcon />}
          >
            <MenuItem value="Newest">Newest</MenuItem>
            <MenuItem value="Oldest">Oldest</MenuItem>
          </Select>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Case Id</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Athlete Id</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cases.map((caseItem, index) => (
              <TableRow key={index}>
                <TableCell>{caseItem.id}</TableCell>
                <TableCell>{caseItem.date}</TableCell>
                <TableCell>{caseItem.athleteId}</TableCell>
                <TableCell>{caseItem.status}</TableCell>
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

export default CaseList;