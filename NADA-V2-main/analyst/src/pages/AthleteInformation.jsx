import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

const AthleteInformation = () => {
  const athleteData = [
    {
      sl: "01.",
      name: "Saurabh Parmar",
      date: "27 Feb,2024",
      sport: "Swimming",
      id: "AID#12",
      link: "/athlete-details/saurabh-parmar",
    },
    {
      sl: "02.",
      name: "Ritika Singh",
      date: "17 Feb,2024",
      sport: "Gymnastics",
      id: "AID#23",
      link: "/athlete-details/ritika-singh",
    },
    {
      sl: "03.",
      name: "Jatin",
      date: "9 Feb,2024",
      sport: "Wrestling",
      id: "AID#43",
      link: "/athlete-details/jatin",
    },
    {
      sl: "04.",
      name: "Chhavi",
      date: "27 May,2024",
      sport: "Boxing",
      id: "AID#32",
      link: "/athlete-details/chhavi",
    },
    {
      sl: "05.",
      name: "Manus",
      date: "8 June,2024",
      sport: "Tennis",
      id: "AID#54",
      link: "/athlete-details/manus",
    },
    {
      sl: "06.",
      name: "Aryan Nara",
      date: "25 Nov,2024",
      sport: "Cycling",
      id: "AID#76",
      link: "/athlete-details/aryan-nara",
    },
    {
      sl: "07.",
      name: "Shivam Sharma",
      date: "27 Oct,2024",
      sport: "Marathon",
      id: "AID#98",
      link: "/athlete-details/shivam-sharma",
    },
    {
      sl: "08.",
      name: "Mohit Thakur",
      date: "4 June,2024",
      sport: "Weight Lifter",
      id: "AID#09",
      link: "/athlete-details/mohit-thakur",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(athleteData);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const result = athleteData.filter(
      (athlete) =>
        athlete.name.toLowerCase().includes(lowercasedQuery) ||
        athlete.date.toLowerCase().includes(lowercasedQuery) ||
        athlete.sport.toLowerCase().includes(lowercasedQuery) ||
        athlete.id.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredData(result);
  }, [searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <Box sx={{ backgroundColor: "#F0F4F8", minHeight: "100vh" }}>
      <Header title="Athlete Information" subtitle="Access Athletes Profiles" />
      <Box sx={{ padding: 2, borderRadius: 1 }}>
        <Paper sx={{ padding: 2, borderRadius: 2 }}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Grid item xs={12} md={6} lg={4}>
              <TextField
                sx={{ maxWidth: "100%" }}
                fullWidth
                variant="outlined"
                size="small"
                placeholder="Search by Name, Date, Sport, or ID"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {searchQuery && (
                        <IconButton onClick={handleClearSearch}>
                          <ClearIcon />
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mt={2}>
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="bold">
                Athlete Information
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ padding: 2, borderRadius: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={1}>
                    <Typography>SL No</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>Athlete Name</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>Date</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>Sports</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>Athlete ID</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>View More</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {filteredData.map((athlete, index) => (
              <Grid item xs={12} key={index}>
                <Paper sx={{ padding: 2, borderRadius: 2 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={1}>
                      <Typography>{athlete.sl}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{athlete.name}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{athlete.date}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{athlete.sport}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography>{athlete.id}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() =>
                          (window.location.href = "/athlete-profile2")
                        }
                      >
                        See
                      </Button>
                      ;
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default AthleteInformation;
