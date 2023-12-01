import { Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import React from 'react'
import DataCard from '../DataCard';
import DataRibbonSCSS from "./DataRibbon.module.scss"

const DataRibbon = () => {
    return (
        <div>
            <Grid container gap={2} className={DataRibbonSCSS.datagrid}>
                <Grid>
                    <DataCard title='Total Sales' value='462' description='Total of all DataSoft Products in the current finanacial year' />
                </Grid>
                <Grid>
                    <DataCard title='Total Sales' value='462' description='Total of all DataSoft Products in the current finanacial year' />
                </Grid>
                <Grid>
                    <DataCard title='Total Sales' value='462' description='Total of all DataSoft Products in the current finanacial year' />
                </Grid>
                <Grid>
                    <DataCard title='Total Sales' value='462' description='Total of all DataSoft Products in the current finanacial year' />
                </Grid>
            </Grid>
        </div>
    )
};

export default DataRibbon;
