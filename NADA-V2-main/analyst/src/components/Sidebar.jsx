import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import DVMSIcon from "../DVMS.png"; // Correct relative path
import DashboardIcon from "../Dashboard.png"; // Correct relative path
import CasesIcon from "../Cases.png"; // Correct relative path
import DataBaseIcon from "../DataBase.png"; // Correct relative path
import InvestigatorPanelIcon from "../Investigation.png"; // Correct relative path

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 160, // Reduced width
        padding: 1,
        backgroundColor: "#F4F6F8",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: 3,
          fontWeight: "bold",
          color: "#007bff",
          display: "flex",
          alignItems: "center",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        <img
          src={DVMSIcon}
          alt="DVMS Icon"
          style={{ marginRight: 8, width: 28, height: 28 }}
        />
        DVMS
      </Typography>

      {[ 
        { path: "/", icon: DashboardIcon, label: "Dashboard" },
        { path: "/cases", icon: CasesIcon, label: "Cases" },
        { path: "/data-base", icon: DataBaseIcon, label: "Data Base" },
        { path: "/athlete-information", icon: CasesIcon, label: "Athlete Information" },
        {
          path: "/investigator-panel",
          icon: InvestigatorPanelIcon,
          label: "Analyst Panel",
        },
      ].map(({ path, icon, label }) => (
        <NavLink
          key={path}
          to={path}
          style={({ isActive }) => ({
            display: "flex",
            alignItems: "center",
            padding: "10px 12px",
            textDecoration: "none",
            fontSize: "14px",
            color: isActive ? "#007bff" : "#333",
            fontFamily: "'Roboto', sans-serif",
            borderRadius: 6,
            backgroundColor: isActive ? "#E8F0FE" : "transparent",
            marginBottom: 6,
          })}
        >
          <img
            src={icon}
            alt={`${label} Icon`}
            style={{ marginRight: 12, width: 20, height: 20 }}
          />
          {label}
        </NavLink>
      ))}
    </Box>
  );
};

export default Sidebar;
