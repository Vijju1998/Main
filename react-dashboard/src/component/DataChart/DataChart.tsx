import React,{ useEffect,useRef,FC } from 'react';
import {Chart, registerables}from 'chart.js';
import {darkOptions} from './Themes';
import {months} from '../../helper/Util';
import { ChartConfiguration } from 'chart.js';

const DataChart:FC<ChartConfiguration> = (props) => {
  const {data,options} = props;
  console.log(props)
  const chartRef = useRef<HTMLCanvasElement>(null);
  const label = months({count : 7});
  useEffect(() => {
    if(chartRef.current){
      const chart = new Chart(chartRef.current,{

          ...props,
          options:{
            ...options,
            ...darkOptions
          }
      });
      return () => {
        chart.destroy();
      };
    }
  },[data])
  return (
    <canvas ref={chartRef}></canvas>
  )
}
Chart.register(...registerables);
export default DataChart