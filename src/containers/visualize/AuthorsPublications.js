import React, { useState } from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { getNewDataPie } from "../../redux/slices/visualize/actions";
import PieChart from "../../components/PieChart";
import { getPieChart } from "../../redux/slices/visualize/selectors";
import { debounce } from "debounce";

const AuthorsPublications = ({ data,searchFor, getNewData }) => {
console.log(`==> : searchFor`, searchFor);

  const [search,setSearch] = useState('');

  const handleChange = (e) =>{
    const value = e.target.value;
    setSearch(value);
    searchItem();
  }

  const searchItem = debounce(() => {
    getNewData(search);
  }, 300)

  return (
    <div className="visibility-filters">
        <div>
          {searchFor}
          <input
            type="text"
            value={search}
            className={'input-box'}
            placeholder={'Start typing to search ..'}
            onChange={handleChange}
          />
        </div>
        {
          data ? <PieChart chartData={data} /> : 
          <div>
              <h2>
                Avaliable catagoriies are 
              </h2>
              <div>1. Good vs. evil</div>
              <div>2. Love</div>
              <div>3. Redemption</div>
              <div>4. Courage and perseverance</div>
              <div>5. Coming of age</div>
              <div>6. Revenge</div>
              <div>7.Action and Adventure</div>
              <div>8.Classics</div>
              <div>9.Detective</div>
              <div>10.Fantasy</div>
              <div>11.Horror</div>
          </div>
        }
    </div>
  );
};

const mapStateToProps = (state) => {
    const {data, searchFor} = getPieChart(state, );
    return { data ,searchFor };
  };
  
  export default connect(mapStateToProps, { getNewData:getNewDataPie })(AuthorsPublications);
