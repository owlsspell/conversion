import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import moment from 'moment';

ChartJS.register(...registerables);

ChartJS.defaults.plugins.legend.display = false;
ChartJS.defaults.scale.display = false;

const Diagram = ({ conversion }) => {

  let formateddArrDates = [];
  let revenueArr = [];

  conversion.forEach((data) => {
    formateddArrDates.push(data.time);
    revenueArr.push(data.revenue);
  });

  const shortArrDates = formateddArrDates.slice(-30)
  

  const data = {
    labels: shortArrDates,
    datasets: [
      {
        data: revenueArr,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
    ]
  };

  return (
    <div className="px-2 diagram col-lg-6 col-md-12">
      <Line data={data} />
      <p>Conversations {moment(shortArrDates[0]).format('MM/DD')} - {moment(shortArrDates[shortArrDates.length - 1]).format('MM/DD')}</p>
    </div>
  );
};

export default Diagram;


