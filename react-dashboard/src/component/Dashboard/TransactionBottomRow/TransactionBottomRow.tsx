import { Grid, Paper } from '@mui/material';
import React from 'react'
import TransactionBottomRowCss from "./TransactionBottomRowCss.module.scss";
import DataChart from '@component/component/DataChart';
import { doubtnutChartData } from '@component/component/mockData';
const TransactionBottomRow = () => {
    return (
        <Grid container className={TransactionBottomRowCss.bottomRow}>
            <Grid>
                <Paper className={TransactionBottomRowCss.dataCard}>
                    <p>Transaction per user type</p>
                    <DataChart type={'doughnut'} data={doubtnutChartData} />
                </Paper>
            </Grid>
            <Grid>
                <Paper className={TransactionBottomRowCss.dataCard}>
                    <p>Transaction per user type</p>
                    <DataChart type={'doughnut'} data={doubtnutChartData} />
                </Paper>
            </Grid>
            <Grid>
                <Paper className={TransactionBottomRowCss.dataCard}>
                    <p>Transaction per user type</p>
                    <DataChart type={'doughnut'} data={doubtnutChartData} />
                </Paper>
            </Grid>
            <Grid>
                <Paper className={TransactionBottomRowCss.dataCard}>
                    <p>Transaction per user type</p>
                    <DataChart type={'doughnut'} data={doubtnutChartData} />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default TransactionBottomRow;
