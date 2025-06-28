import express from "express";
import multer from "multer";
import Lab from "../../models/lab.js"; // Ensure file extensions are specified if using ES modules
import path from 'path';
const router = express.Router();

// Example Multer configuration -- it is required jaisa ki memory m save karka mongo m save kara raha h
const storage = multer.memoryStorage(); // Store files in memory for simplicity
const upload = multer({ storage });

// Define your routes here
router.post(
  "/labinfo",
  // controller logic yeah p
  async (req, res) => {
    try {
      const { labId, labName, address, } = req.body;
    

      const newLab = new Lab({
        labId,
        labName,
        address
       
        
      
      });
  
      // Save the document in the database
      await newLab.save();

     
      res.status(201).json({ message: "Report uploaded successfully" });
    } catch (error) {
      console.error("Error saving report:", error);
      res.status(500).json({ error: "Failed to upload report" });
    }
  }
);

export default router;