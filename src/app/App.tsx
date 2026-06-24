import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";

function App() {
  return <Container sx={{background : "Orange" }}>
    <Stack direction={"column"}>
     <Box sx={{my:4}}>
      <Typography variant="h4" component={ "h4" }>
        Welcome to React with TypeScript and MUI
      </Typography>
     </Box>
     <Box> 
     <Button variant="outlined">
        Delete
      </Button>
      <RippleBadge badgeContent={4}>
        <Button variant="contained" > Send </Button>
      </RippleBadge>
      </Box>
    </Stack>
  </Container>
}

export default App;





