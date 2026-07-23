import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy/";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";


import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retriveTopUsers } from "./selector";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

/** REDUX SELECTOR **/

const topUsersRetriver = createSelector(
    retriveTopUsers,
    (topUsers) => ({ topUsers })
);

export default function ActiveUsers() {
    const { topUsers } = useSelector(topUsersRetriver)

    console.log("topUsers", topUsers);

    return (
        <div className="active-users-frame">
            <Container>
                <Stack className="main">
                    <Box className="category-title">Active Users</Box>
                    <Stack className="card-frame">
                        <CssVarsProvider>
                            {topUsers.length !== 0 ? (
                                topUsers.map((member: Member) => {
                                    const imagePath = `${serverApi}/${member.memberImage}`;
                                    return (
                                        <Card key={member._id} variant="outlined" className="card">
                                            <CardOverflow>
                                                <AspectRatio ratio={1}>
                                                    <img src={imagePath} alt="" />
                                                </AspectRatio>
                                            </CardOverflow>

                                            <CardOverflow variant="soft" className="product-detail">
                                                <Stack className="info">
                                                    <Stack flexDirection={"row"}>
                                                        <Typography className="member-nick">
                                                            {member.memberNick}
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                            </CardOverflow>
                                        </Card>
                                    );

                                })
                            ) : (
                                <Box className="no-data"> No active Users! </Box>
                            )}
                        </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}