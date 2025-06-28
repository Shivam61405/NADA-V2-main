import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
// import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import errorHandler  from "./src/utils/errorHandler.js";
// const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const dotenv = require('dotenv');
// const express = require('express');
// const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');

/** CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// Use the error handler as the last middleware
app.use(errorHandler);

//---------------------------------------------------------------------------
// app.use(cors({
//     origin: ['http://localhost:3000//homepage', 'http://localhost:3001//admin', 'http://localhost:3002//investigator'],
//     credentials: true,
// }));

//------------------------------------------------------------------------------
// const authRoutes = require('./src/routes/authRoutes');
// const connectDB = require('./config/database');
// const investigationRoutes = require('./src/routes/investigationRoutes');
// const whistleblowerRoutes = require('./routes/whistleblowerRoutes');

import authRoutes from "./src/routes/authRoutes.js";
import connectDB from "./config/database.js";
import investigationRoutes from "./src/routes/investigationRoutes.js";
import whistleblowerRoutes from "./src/routes/whistleblowerRoutes.js";
import caseRoutes from "./src/routes/caseRoutes.js";
import analyticsRoutes from "./src/routes/analyticsRoutes.js"
import reports from "./src/routes/reports.js"
import signin from "./src/routes/signin.js"
import lab from "./src/routes/lab.js"
// import fileupload from './src/routes/fileUpload.js'
import ath from './src/routes/athletes.js'


import {authenticateToken} from './src/middleware/authenticateToken.js';
import { authorizeRole } from './src/middleware/authorizeRole.js';
import { ROLES } from './models/roles.js';


//------------------------------------------------------------------------------

// const caseRoutes = require('./src/routes/caseRoutes');
// const analyticsRoutes = require('./src/routes/analyticsRoutes');

//----------------------------------------------------------------------------

connectDB();



// // Login route
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;
//     const user = users.find((u) => u.username === username);

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//         return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
//         expiresIn: '1h',
//     });
//     res.json({ token });
// });
app.use('/api',signin)
app.use('/api',ath)

/** ROUTES */
// Admin route
app.get('/admin', authenticateToken, authorizeRole([ROLES.ADMIN]), (req, res) => {
    res.send('Welcome Admin');
});

// User route
app.get('/user', authenticateToken, authorizeRole([ROLES.USER]), (req, res) => {
    res.send('Welcome User'); });
app.use("/auth", authRoutes);
app.use("/investigations", investigationRoutes);
app.use("/whistleblowers", whistleblowerRoutes);
app.use("/cases", caseRoutes);
app.use('/analytics', analyticsRoutes);
app.use("/api",reports);
app.use('/api',lab);

// app.use("/files",fileLists)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//----------------------------------------------------------------------------


