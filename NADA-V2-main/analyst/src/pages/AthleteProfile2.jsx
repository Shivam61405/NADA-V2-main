import React from "react";
import Header from "../components/Header";
import { Box, Typography, Grid, Button, Avatar } from "@mui/material";

const AthleteProfile2 = () => {
  return (
    <Box sx={{ backgroundColor: "#f0f2f5", minHeight: "100vh", padding: 2 }}>
      <Header title="Athlete Profile" subtitle="Manage your athlete's profile" />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ padding: 2, backgroundColor: "white", borderRadius: 1, boxShadow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                  <Avatar
                    alt="Profile of the athlete"
                    src="https://placehold.co/100x100"
                    sx={{ width: 100, height: 100, border: '4px solid white' }}
                  />
                </Box>
                <Typography variant="h6" fontWeight="bold">Platform Settings</Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="subtitle2" color="textSecondary">ACCOUNT ID:</Typography>
                  <Typography variant="body1" color="primary">Athlete Id: AID#45</Typography>
                  <Typography variant="body1" color="primary">Case Id: CID#23</Typography>
                  <Typography variant="body1" color="primary">Sample Id: SID#54</Typography>
                </Box>
                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="subtitle2" color="textSecondary">Achievements</Typography>
                  <Typography variant="body1" color="primary">National Gold Medalist</Typography>
                  <Typography variant="body1" color="primary">Consistent Podium Finisher</Typography>
                  <Typography variant="body1" color="primary">Record-Breaking Performance</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" fontWeight="bold">Profile Information</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2 }}>
                  Ankur Sharma is one of the promising young athletes known for his weight lifting skills.
                </Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="body1"><strong>Full Name:</strong> Ankur Sharma</Typography>
                  <Typography variant="body1" sx={{ marginTop: 2 }}><strong>DOB:</strong> 20 Nov 1998</Typography>
                  <Typography variant="body1" sx={{ marginTop: 2 }}><strong>Mobile:</strong> (44) 123 1234 123</Typography>
                  <Typography variant="body1" sx={{ marginTop: 2 }}><strong>Email:</strong> aleckthompson@gmail.com</Typography>
                  <Typography variant="body1" sx={{ marginTop: 2 }}><strong>Permanent Address:</strong> sector 10A, gurgaon</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                    <i className="fab fa-facebook text-blue-600"></i>
                    <i className="fab fa-twitter text-blue-600 ml-2"></i>
                    <i className="fab fa-instagram text-blue-600 ml-2"></i>
                  </Box>
                  <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>More</Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography variant="h6" fontWeight="bold">Athlete Connections</Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src="https://placehold.co/40x40" alt="Sophie B." />
                      <Typography variant="body1" sx={{ marginLeft: 2 }}>Sophie B.</Typography>
                    </Box>
                    <Typography variant="body2" color="primary">see more</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src="https://placehold.co/40x40" alt="Anne Marie" />
                      <Typography variant="body1" sx={{ marginLeft: 2 }}>Anne Marie</Typography>
                    </Box>
                    <Typography variant="body2" color="primary">see more</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src="https://placehold.co/40x40" alt="Ivanna" />
                      <Typography variant="body1" sx={{ marginLeft: 2 }}>Ivanna</Typography>
                    </Box>
                    <Typography variant="body2" color="primary">see more</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src="https://placehold.co/40x40" alt="Peterson" />
                      <Typography variant="body1" sx={{ marginLeft: 2 }}>Peterson</Typography>
                    </Box>
                    <Typography variant="body2" color="primary">see more</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src="https://placehold.co/40x40" alt="Nick Daniel" />
                      <Typography variant="body1" sx={{ marginLeft: 2 }}>Nick Daniel</Typography>
                    </Box>
                    <Typography variant="body2" color="primary">see more</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h6" fontWeight="bold">Test and Results</Typography>
              <Grid container spacing={2} sx={{ marginTop: 2 }}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ padding: 2, backgroundColor: "#f0f2f5", borderRadius: 1 }}>
                    <img src="https://placehold.co/300x200" alt="Sample Collection report" className="w-full h-32 object-cover rounded-lg"/>
                    <Typography variant="body1" fontWeight="bold" sx={{ marginTop: 2 }}>Sample Collection report</Typography>
                    <Typography variant="body2" color="textSecondary">SCR</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>Documenting athlete sample collection, handling and transportation.</Typography>
                    <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>VIEW REPORT</Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ padding: 2, backgroundColor: "#f0f2f5", borderRadius: 1 }}>
                    <img src="https://placehold.co/300x200" alt="Urine Test" className="w-full h-32 object-cover rounded-lg"/>
                    <Typography variant="body1" fontWeight="bold" sx={{ marginTop: 2 }}>Urine Test</Typography>
                    <Typography variant="body2" color="textSecondary">UTR</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>Analyzing athlete urine test report for prohibited substance.</Typography>
                    <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>VIEW REPORT</Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ padding: 2, backgroundColor: "#f0f2f5", borderRadius: 1 }}>
                    <img src="https://placehold.co/300x200" alt="Blood Test" className="w-full h-32 object-cover rounded-lg"/>
                    <Typography variant="body1" fontWeight="bold" sx={{ marginTop: 2 }}>Blood Test</Typography>
                    <Typography variant="body2" color="textSecondary">BTR</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>Analyzing athlete blood test report for EPO and other substance.</Typography>
                    <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>VIEW REPORT</Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AthleteProfile2;