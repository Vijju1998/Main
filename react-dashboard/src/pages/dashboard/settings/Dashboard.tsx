import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import scss from "./Dashboard.module.scss"
import PageSCSS from "../../../styles/Page.module.scss";
import DataRibbon from "@component/component/Dashboard/DataRibbon";
import TransactionPerDay from "@component/component/Dashboard/TransactionPerDay";
import TransactionBottomRow from "@component/component/Dashboard/TransactionBottomRow";
const Dashboard = () => {
    return (

            <Box >
            <Grid container gap={4} marginTop={9}>
                <DataRibbon/>
                <TransactionPerDay/>
                <TransactionBottomRow/>
                </Grid>
            </Box>
    
    )
}

export default Dashboard;