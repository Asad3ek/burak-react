import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
    const authMember = true
    return (
        <div className="home-navbar">
            <Container className="home-container">
                <Stack className="menu" >
                    <Box>
                        <NavLink to="/">
                            <img className="brand-logo" src="/icons/burak.svg" alt="Burak Logo" />
                        </NavLink>
                    </Box>

                    <Stack className="links">

                        <Box className={"hover-line"}>
                            <NavLink to="/" activeClassName={"underline"} > Home </NavLink>
                        </Box>

                        <Box className={"hover-line"}>
                            <NavLink to="/products" activeClassName={"underline"} >Products</NavLink>
                        </Box>

                        {authMember ? (
                            <Box className={"hover-line"}>
                                <NavLink to="/orders" activeClassName={"underline"} >Orders</NavLink>
                            </Box>
                        ) : null}

                        {authMember ? (
                            <Box className={"hover-line"}>
                                <NavLink to="/member-page" activeClassName={"underline"} >My Page</NavLink>
                            </Box>
                        ) : null}

                        <Box className={"hover-line"}>
                            <NavLink to="/help" activeClassName={"underline"} >Help</NavLink>
                        </Box>

                        {!authMember ? (
                            <Box>
                                <Button className="login-button" variant="contained">Login</Button>
                            </Box>
                        ) : (
                            <img
                                className="user-avatar"
                                src={"/icons/default-user.svg"}
                                aria-haspopup={"true"} />
                        )}

                    </Stack>
                </Stack>

                <div className="navbar-container" >
                    <div className="header-frame">
                        <div className="main-txt">
                            World's Most Delicious Cousine
                        </div>
                        <div className="wel-txt">
                            The Choice, not just a choice
                        </div>
                        <div className="service-txt">
                            24 hours service
                        </div>
                        <div className="signup-contain">
                            <button className="signup-button">SIGN UP</button>
                        </div>
                    </div>

                    <div className="logo-frame">
                        <div className="logo-img"></div>
                    </div>
                </div>
            </Container>
        </div>
    );
}