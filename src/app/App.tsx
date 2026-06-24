import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function App() {
  return <Container maxWidth="sm"> 
    <Stack direction={"column"}>
     <Box sx={{my:4}}>
      <Typography variant="h4" component={ "h4" }>
        Welcome to React with TypeScript and MUI
      </Typography>
     </Box>
     <Button variant="outlined">
        Delete
      </Button>
      <Button variant="contained" >
        Send
      </Button>
    </Stack>
  </Container>
}

export default App;





