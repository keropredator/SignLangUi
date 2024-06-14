// eslint-disable-next-line no-unused-vars
import React from "react";
import { Grid, TextField, Button, Box, Typography } from "@mui/material";
import contactImage from "./contact.jpeg";

const contactFormStyle = {
  padding: "20px",
  backgroundColor: "#F4F7ED",
  borderRadius: "10px",
  boxShadow: "0 3px 5px 2px rgba(255, 255, 255, .5)",
};

const inputStyle = {
  marginBottom: "20px",
  backgroundColor: "#fff",
  borderRadius: "5px",
};

const btnStyle = {
  backgroundColor: "#00bfff", // Adjusted to match the button color in the image
  color: "#fff",
  fontWeight: "bold",
  borderRadius: "10px",
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: "#00a3cc", // Slightly darker shade for hover effect
  },
};

const ContactUs = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ padding: "40px" }}
    >
      <Grid item xs={12} md={6}>
        <Box sx={contactFormStyle}>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ fontFamily: "monospace", color: "#08457E" }}
          >
            Contact Us
          </Typography>
          <form>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Name"
              sx={inputStyle}
              InputProps={{
                style: { fontFamily: "monospace" },
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Email"
              sx={inputStyle}
              InputProps={{
                style: { fontFamily: "monospace" },
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Message"
              multiline
              rows={4}
              sx={inputStyle}
              InputProps={{
                style: { fontFamily: "monospace" },
              }}
            />
            <Box textAlign="center">
              <Button type="submit" sx={btnStyle}>
                Send Message
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} display={{ xs: "none", md: "block" }}>
        <img
          src={contactImage} // Update with your actual image path
          alt="Contact Us Illustration"
          style={{ maxWidth: "100%", borderRadius: "10px" }}
        />
      </Grid>
    </Grid>
  );
};

export default ContactUs;
