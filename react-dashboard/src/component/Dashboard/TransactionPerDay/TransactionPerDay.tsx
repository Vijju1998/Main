import { useTheme } from '@mui/material/styles';
import { Card, Grid, Paper, Typography } from '@mui/material';
import React, { FC } from 'react'
import TransactionPerDaySCSS from "./TransactionPerDay.module.scss"
import DataChart from '@component/component/DataChart';
import { lineChartData } from '@component/component/mockData';
interface TransactionCardProps {
    title: string;
    value: string;
    changeValue: string;
}

const TransactionPerDay = () => {
    const theme = useTheme();
    return (
        <Grid container gap={2} className={TransactionPerDaySCSS.wrapper}>
            <Paper className={TransactionPerDaySCSS.transaction}>
                <div className={TransactionPerDaySCSS.chart}>
                    <Typography>Transaction Per Day</Typography>
                    <DataChart type={"line"} data={lineChartData}/>

                </div>
                <div className={TransactionPerDaySCSS.cardWrapper}>
                    <Card variant='outlined' className={TransactionPerDaySCSS.card}>
                        <div className={TransactionPerDaySCSS.cardTitle}>
                            <Typography>Total Product</Typography>
                        </div>
                        <div className={TransactionPerDaySCSS.cardValue}>
                            <Typography>1.275</Typography>
                            <Typography color={theme.palette.success.main} fontSize={14}>428.7%</Typography>
                        </div>
                    </Card>
                    <Card variant='outlined' className={TransactionPerDaySCSS.card}>
                        <div className={TransactionPerDaySCSS.cardTitle}>
                            <Typography>Buy-To-Details</Typography>
                        </div>
                        <div className={TransactionPerDaySCSS.cardValue}>
                            <Typography>4.4%</Typography>
                            <Typography color={theme.palette.success.main} fontSize={14}>899.4%</Typography>
                        </div>
                    </Card>
                    <Card variant='outlined' className={TransactionPerDaySCSS.card}>
                        <div className={TransactionPerDaySCSS.cardTitle}>
                            <Typography>Refund</Typography>
                        </div>
                        <div className={TransactionPerDaySCSS.cardValue}>
                            <Typography>0</Typography>
                            <Typography color={theme.palette.success.main} fontSize={14}>0</Typography>
                        </div>
                    </Card>
                </div>

            </Paper>

        </Grid>
    )
};

export default TransactionPerDay
