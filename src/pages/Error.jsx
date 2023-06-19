import { useRouteError, Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
export default function Error() {
  const error = useRouteError();
  return (
    <div id='error-page'>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#7F56D9",
        }}
      >
        <Typography variant='h1' style={{ color: "white" }}>
          404
        </Typography>
        <Typography variant='h6' style={{ color: "white" }}>
          The page you’re looking for doesn’t exist.
        </Typography>
        <Link to='/'>
          <Button variant='contained'>Back Home</Button>
        </Link>

        {error.statusText || error.message}
      </Box>
    </div>
  );
}
