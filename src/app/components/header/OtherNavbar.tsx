import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { cardItem } from "../../../lib/types/search";

interface OtherNavbarProps {
    cardItems: cardItem[]
    onAdd: (item: cardItem) => void
    onRemove: (item: cardItem) => void
    onDelete: (item: cardItem) => void
    onDeleteAll: () => void
    setSignUpOpen: (isOpen: boolean) => void
    setLoginOpen: (isOpen: boolean) => void
}

export default function OtherNavbar(props: OtherNavbarProps) {

    const { cardItems, onAdd, onRemove, onDelete, onDeleteAll, setSignUpOpen, setLoginOpen } = props;
    const authMember = null;

    return <div className="other-navbar">
        <Container className="navbar-container">
            <Stack className="menu" >
                <Box>
                    <NavLink to="/">
                        <img className="brand-logo" src="/icons/burak.svg" alt="Burak Logo" />
                    </NavLink>
                </Box>

                <Stack className="links">

                    <Box className={"hover-line"}>
                        <NavLink to="/"> Home </NavLink>
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
                    <Basket
                        cardItems={cardItems}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        onDelete={onDelete}
                        onDeleteAll={onDeleteAll}
                    />
                    {!authMember ? (
                        <Box>
                            <Button
                                className="login-button"
                                variant="contained"
                                onClick={() => setLoginOpen(true)}
                            >
                                Login</Button>
                        </Box>
                    ) : (
                        <img
                            className="user-avatar"
                            src={"/icons/default-user.svg"}
                            aria-haspopup={"true"} />
                    )}

                </Stack>
            </Stack>
        </Container>
    </div>;
}