import React, { useState } from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
// import axios from 'axios';
export default function SignIn() {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    role: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleLogin = async (event) => {
    event.preventDefault();
  
    const { userId, password, role } = formData;
  
    if (!userId || !password || !role) {
      alert("All fields are required.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5001/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, password, role }),
      });
  
      const data = await response.json();
      // console.log(data).then(console.log("error")).catch(console.log("not possible"));
      if (response.ok) {
        // Check roles and redirect accordingly
        if (data.roles.includes("analyst")) {
          window.location.href = "http://localhost:4001/";
        } 
        else if (data.roles.includes("laboratories")) {
          window.location.href = "http://localhost:3000/lab";
        }
        else if (data.roles.includes("investigator")) {
          window.location.href = "http://localhost:4002/";
        } 
        else if (data.roles.includes("administrator")) {
          window.location.href = "http://localhost:4000/";
        } else {
          // If no matching role is found, redirect to sign-in
          window.location.href = "http://localhost:3000/signin";
        }
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Enter your Id and password to Sign In
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              id="userId"
              placeholder="Enter User-Id"
              value={formData.userId}
              onChange={(e) =>
                setFormData({ ...formData, userId: e.target.value })
              }
              required
            />
            <div className="password-input">
              <input
                id="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                className="input-field"
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className="toggle-visibility"
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>
            <Select
              value={formData.role}
              onValueChange={(value) =>
                setFormData({ ...formData, role: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="investigator">Investigator</SelectItem>
                <SelectItem value="administrator">Administrator</SelectItem>
                <SelectItem value="laboratories">Laboratories</SelectItem>
                <SelectItem value="analyst">Analyst</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit" className="w-full" bgcolor="darkblue">
              SIGN IN
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}


