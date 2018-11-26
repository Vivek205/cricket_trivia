import React from "react";
import Chart from "react-google-charts";
import css from './graph.module.css';

const options = {
    // title: "Age vs. Weight comparison",
    // hAxis: { viewWindow: { min: 0, max: 15 } },
    vAxis: { viewWindow: { min: 0, max: 4 } },
    legend: "none"
  }

const graph = (props) =>{
    return (
        <div className={css.graph}>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={props.data}
          legendToggle
          options={options}
        />
        </div>
        );
}

export default graph;