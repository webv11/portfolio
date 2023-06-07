import { BottomNavigation, Tab, Typography , Box} from "@mui/material";

const Footer = () => {
    return(
        <Box>
        <BottomNavigation  sx = {{background : "black" , color : "white"}}>
            <Typography>
                <Tab label="made with ❤ by vaibhavi"></Tab>
            </Typography>
        </BottomNavigation>
        </Box>
    );
}

export default Footer;