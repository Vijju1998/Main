import React, { FC } from 'react'
import { Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DataCardSCSS from "./DataCard.module.scss"
export interface DataCardIProps {
  title: string;
  value: string;
  description: string;
}
const DataCard: FC<DataCardIProps> = ({ title, value, description }) => {
  return (
    <Paper className={DataCardSCSS.datacard}>
      <div className={DataCardSCSS.header}>
        <Typography fontSize={'h6'} color={'lightslategray'}>{title}</Typography>
        <Tooltip
          title={
            <Typography fontSize={16}>
              {` ${description} which is  ${value}`}
            </Typography>

          }
        >
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>

        </Tooltip>
      </div>
      <Typography fontSize={16}>{value}</Typography>
    </Paper>
  )
};

export default DataCard;
