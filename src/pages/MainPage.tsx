import {
  Box,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate()

  return <Box
    sx={{
      width: '1200px',
      m: '0 auto'
    }}
  >
    <Button
      onClick={() => navigate('/shopping-cart')}
    >
      ShoppingCart
    </Button>
  </Box>
};

export default MainPage;