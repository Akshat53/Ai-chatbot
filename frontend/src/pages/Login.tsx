import { Box, Typography } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";

const Login = () => {
  return (
    <Box width={"100%"} height={"100%"} display="flex" flex={1}>
      <Box padding={8} mt={8} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src="bot.png" alt="bot" style={{ width: "400px" }} />
      </Box>
      <Box
        display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        ml={"auto"}
        mt={16}
      >
        <form className="login-form">
          <Box
            display={"flex"}
            sx={{ flexDirection: "column", justifyContent: "center" }}
          >
            <Typography
              variant="h4"
              textAlign={"center"}
              padding={2}
              fontWeight={600}
            >
              Login
            </Typography>
            <CustomizedInput name="email" type="email" label="email"/>
            <CustomizedInput name="password" type="password" label="password"/>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
