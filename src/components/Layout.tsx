import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Shreyas Bakare</Typography>
      </Toolbar>
    </AppBar>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {children}
    </Container>
    <Box component="footer" sx={{ py: 2, textAlign: "center", bgcolor: "#f5f5f5" }}>
      <Typography variant="body2">© {new Date().getFullYear()} Your Brand. All rights reserved.</Typography>
    </Box>
  </>
);

export default Layout;