import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { getNewDataBar } from "../../redux/slices/visualize/actions";
import BarChart from "../../components/BarChart";
import { getBarChart } from "../../redux/slices/visualize/selectors";

const TimelinePublications = ({ data, getNewData }) => {
  return (
    <div className="visibility-filters">
      <BarChart getNewData={getNewData} chartData={data}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {data} = getBarChart(state);
  return { data };
};

export default connect(mapStateToProps, { getNewData:getNewDataBar })(TimelinePublications);
