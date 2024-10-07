import React from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

function SignIn() {
  return (
    <Box
      sx={{
        minHeight: "100vh", // Full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5", // Light background color
        padding: 2,
      }}
    >
      <Paper elevation={6} sx={{ padding: 4, maxWidth: 400, width: "100%", borderRadius: 4 }}>
        {/* Page Title */}
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", mb: 3 }}>
          Sign In
        </Typography>

        {/* Email Input */}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          sx={{ mb: 2 }}
        />

        {/* Password Input */}
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          sx={{ mb: 3 }}
        />

        {/* Sign In Button */}
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            padding: "10px",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Sign In
        </Button>

        {/* Extra Links: Forgot Password, Sign Up */}
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
            Forgot your password? <a href="#" style={{ color: "#1976d2", textDecoration: "none" }}>Reset here</a>
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Don't have an account? <a href="#" style={{ color: "#1976d2", textDecoration: "none" }}>Sign up</a>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default SignIn;
