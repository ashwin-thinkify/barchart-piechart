import faker from 'faker';
import { GET_NEW_DATA_BAR, GET_NEW_DATA_PIE } from "../slices/visualize/actionTypes";
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';
import {ALL_BAR_VIEW, labelsBar_Monthly,labelsBar_Yearly,labelsBar_Weekly} from '../../constants/reducer.constants';

const mockDataBar = {
  labelsBar:labelsBar_Yearly,
  datasets: [
    {
      label: 'Dataset of Publication Yearly',
      data: labelsBar_Yearly.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

const config = {
  dictionaries: [starWars]
}

let labelsPie = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red1','Red2','Red3','Red5'];
labelsPie = labelsPie.map(item => {
  const characterName = uniqueNamesGenerator(config);
  return characterName;
})
      
const mockDataPie = {
    labels :labelsPie,
    datasets: [
      {
        label: '# of Votes',
        data: labelsPie.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(25, 224, 224, 0.2)',
          'rgba(0, 255, 0, 0.2)',
          'rgba(0, 0, 255, 0.2)',
          'rgba(139, 195, 76, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(25, 224, 224, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(139, 195, 76, 1)',
        ],
        borderWidth: 1,
      },
    ],
};

const initialState = {
  timelinePublication: {
    data:mockDataBar,
    currentView: ALL_BAR_VIEW.YEARLY,
    year:"2000",
    month:"January"
  },
  authorPublication: {
    data:mockDataPie,
    searchFor: "Search result for top 10 publication seatch by category"
  },
};

export default function todoReducer(state = initialState, action) {
  let currentView = state.timelinePublication.currentView;
  let mockDataBar = {};
  let year = state.timelinePublication.year;
  let month = state.timelinePublication.month;


  switch (action.type) {
    case GET_NEW_DATA_BAR: {
      if(state.timelinePublication.currentView === ALL_BAR_VIEW.WEEKLY){
        return state;
      }
      if(state.timelinePublication.currentView === ALL_BAR_VIEW.YEARLY){
        year = action.payload.content;
        currentView = ALL_BAR_VIEW.MONTHLY;
         mockDataBar = {
          labelsBar:labelsBar_Monthly,
          datasets: [
            {
              label: `Dataset of Publication of year ${year}`,
              data: labelsBar_Monthly.map(() => faker.datatype.number({ min: 0, max: 100 })),
              backgroundColor: 'rgba(255, 99, 232, 0.5)',
            }
          ],
        };
      } 
      
      if(state.timelinePublication.currentView === ALL_BAR_VIEW.MONTHLY){
        currentView = ALL_BAR_VIEW.WEEKLY;
        month = action.payload.content;
         mockDataBar = {
          labelsBar:labelsBar_Weekly,
          datasets: [
            {
              label: `Dataset of Publication of ${month} ${year}`,
              data: labelsBar_Weekly.map(() => faker.datatype.number({ min: 0, max: 15 })),
              backgroundColor: 'rgba(255, 199, 132, 0.5)',
            }
          ],
        };
      }

      return {
        ...state,
        timelinePublication: {
          currentView,
          data:mockDataBar,
          month,
          year,
        }
      };
    }
    case GET_NEW_DATA_PIE: {
      const list = ['Good vs. evil', 'Love', 'Redemption', 'Courage and perseverance', 'Coming of age', ' Revenge', 'Action and Adventure', 'Classics', 'Detective', 'Fantasy', 'Horror'];
      
      const searchString = action.payload.content;
      if(!searchString){
        return {
          ...state,
          authorPublication:initialState.authorPublication,
        };
      }
      const isData = list.filter(it => it.toLowerCase().includes(searchString.toLowerCase()))
      if(!isData || !isData.length){
        
        return {
          ...state,
          authorPublication: {
            data: null,
            searchFor: `${searchString} has no results to any topics`
          }
        };
      }
      
      let labelsPie = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','Red1','Red2','Red3','Red5'];
      labelsPie = labelsPie.map(item => {
        const characterName = uniqueNamesGenerator(config);
        return characterName;
      })
            
      const mockDataPie = {
          labels :labelsPie,
          datasets: [
            {
              label: '# of Votes',
              data: labelsPie.map(() => faker.datatype.number({ min: 0, max: 13 })),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(25, 224, 224, 0.2)',
                'rgba(0, 255, 0, 0.2)',
                'rgba(0, 0, 255, 0.2)',
                'rgba(139, 195, 76, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(25, 224, 224, 1)',
                'rgba(0, 255, 0, 1)',
                'rgba(0, 0, 255, 1)',
                'rgba(139, 195, 76, 1)',
              ],
              borderWidth: 1,
            },
          ],
      };
      
      return {
        ...state,
        authorPublication: {
          data:mockDataPie,
          searchFor: `${searchString} searched : Showing results for ${isData[0]}`
        }
      };
    }
    default:
      return state;
  }
}
