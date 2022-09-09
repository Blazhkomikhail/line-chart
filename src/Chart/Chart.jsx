import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import * as Styled from "./style";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const options = {
  responsive: true,
  tension: 0.4,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    tooltip: {
      yAlign: "bottom",
      backgroundColor: "#fff",
      titleColor: "#000",
      titleFont: { weight: "normal", size: 12 },
      bodyFont: { weight: "bold", size: 13 },
      bodyColor: "#35a2eb",
      padding: 8,
      titleAlign: "center",
      bodyAlign: "center",
      displayColors: false,
      boxWidth: "100px",
      callbacks: {
        title: () => "Activity",
        label: ({ dataset, dataIndex } ) => {
          return `+${dataset.activityData[Number(dataIndex)] || ""}%`;
        },
      },
    },
  },
};

const customPointProps = (color) => ({
  pointRadius: 4,
  pointBackgroundColor: "#fff",
  pointHoverBackgroundColor: color,
  pointHoverBorderColor: "#fff",
  pointHoverBorderWidth: 3,
  pointHoverRadius: 6,
});

const labels = ["28-Feb", "7-Mar", "14-Mar", "21-Mar", "28-Mar"];

export const data = {
  labels,
  datasets: [
    {
      label: "Monthly",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 1000 })),
      activityData: ["25", "42", "13", "15", "27.2"],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      total: "1.2m",
      ...customPointProps("rgba(255, 99, 132)"),
    },
    {
      label: "Weekly",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 1000 })),
      activityData: ["25", "42", "13", "15", "27.2"],
      borderColor: "#35a2eb",
      backgroundColor: "#35a2eb",
      total: "830k",
      ...customPointProps("#35a2eb"),
    },
    {
      label: "Daily",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 1000 })),
      activityData: ["25", "42", "13", "15", "27.2"],
      borderColor: "#BF40BF",
      backgroundColor: "#BF40BF",
      total: "485k",
      ...customPointProps("#BF40BF"),
    },
  ],
};

const Chart = () => (
  <div>
    <Styled.LegendContainer>
      <Styled.LegTitle>Active Comunity Members</Styled.LegTitle>
      <Styled.LegendItems>
        {data?.datasets.map(({ backgroundColor, label, total }, index) => (
          <Styled.LegendItem key={`${total}_${index}`}>
            <Styled.Circle color={backgroundColor} />
            <Styled.LegendItemTitle>{label}</Styled.LegendItemTitle>
            <Styled.LegendItemTotal>{total}</Styled.LegendItemTotal>
          </Styled.LegendItem>
        ))}
      </Styled.LegendItems>
    </Styled.LegendContainer>
    <Line options={options} data={data} />
  </div>
);

export default Chart;
