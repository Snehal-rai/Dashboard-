import React, { useEffect } from "react";
import { defaults } from "chart.js/auto";
import {
  Line, Doughnut, Bar, Pie, Radar, PolarArea, Bubble, Scatter,
  HorizontalBar // If using Chart.js 2.x. For Chart.js 3.x, use 'Bar' and adjust the options to { indexAxis: 'y' }
} from "react-chartjs-2";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  defaults.maintainAspectRatio = false;
  defaults.responsive = true;

  const chartOptions = {
    plugins: {
      title: {
        display: true,
        fontSize: 18,
        color: "#000000", // Set title color to black
      },
      legend: {
        labels: {
          color: "#000000" // Set legend labels to black
        }
      }
    },
    elements: {
      line: {
        borderColor: "#000000", // Set line color to black for Line chart
      },
      arc: {  // For Pie and Doughnut
        borderColor: "#000000"  // Ensuring borders are black
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#000000"  // X-axis ticks to black
        }
      },
      y: {
        ticks: {
          color: "#000000"  // Y-axis ticks to black
        }
      }
    }
  };
  
  return (
    <div className="admin">
      <div className="side">
        <div className="elements" data-aos="slide-right">
          <h1>Shikha Constructions</h1>
          <hr className="hrr" />
          <ul>
            <li className="ad">Admin</li>
            <li>Employees</li>
            <li>Interns</li>
            <li>Projects </li>
            <li>Awards</li>
          </ul>
        </div>
      </div>
      <div className="dash">
        <div className="item1 card" data-aos="slide-up">
          <Doughnut
            data={{
              labels: ["Product A", "Product B", "Product C"],
              datasets: [{ label: "Sales", data: [300, 200, 150], backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] }]
            }}
            options={{
              ...chartOptions,
              plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: "Product Sales" } }
            }}
          />
        </div>
        <div className="item2 card" data-aos="slide-down">
          <Bar
            data={{
              labels: ["January", "February", "March"],
              datasets: [{ label: "Sales", data: [150, 200, 250], backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] }]
            }}
            options={{
              ...chartOptions,
              plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: "Monthly Sales" } }
            }}
          />
        </div>
        <div className="item3 card" data-aos="slide-left">
          <PolarArea
            data={{
              labels: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"],
              datasets: [{ label: "Task Distribution", data: [20, 30, 15, 25, 10], backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"] }]
            }}
            options={{
              ...chartOptions,
              plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: "Task Distribution" } }
            }}
          />
        </div>
        <div className="item4 card" data-aos="zoom-in">
          <Line
            data={{
              labels: ["Jan", "Feb", "Mar", "Apr", "May"],
              datasets: [
                { label: "Revenue", data: [200, 300, 500, 400, 600], borderColor: "#FF6384" },
                { label: "Loss", data: [100, 50, 300, 250, 150], borderColor: "#36A2EB" },
                { label: "Profit", data: [10, 70, 30, 200, 10], borderColor: "#FFCE56" }
              ],
            }}
            options={{
              ...chartOptions,
              plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: "Revenue and Profit/Loss" } },
              elements: { line: { ...chartOptions.elements.line, tension: 0.4 } }
            }}
          />
        </div>
        <div className="item5 card" data-aos="slide-right">
          <Pie
            data={{
              labels: ["Region A", "Region B", "Region C"],
              datasets: [
                { label: "Sales", data: [100, 250, 200], backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] }
              ],
            }}
            options={{
              ...chartOptions,
              plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: "Regional Sales" } }
            }}
          />
        </div>
        <div className="item6 card radar" data-aos="slide-up">
          <Radar
            data={{
              labels: ["Design", "Development", "Marketing", "Sales", "Support"],
              datasets: [
                {
                  label: "Team Skills", data: [80, 75, 90, 85, 70],
                  backgroundColor: "rgba(255, 99, 132, 0.5)", borderColor: "rgba(255, 99, 132, 1)",
                  pointBackgroundColor: "rgba(255, 99, 132, 1)", pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff", pointHoverBorderColor: "rgba(255, 99, 132, 1)"
                },
              ],
            }}
            options={{
              ...chartOptions,
              plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: "Team Skills" } }
            }}
          />
        </div>
        <div className="item7 card" data-aos="fade-in"> 
          <Scatter
            data={{
              datasets: [{
                label: 'Scatter Dataset',
                data: Array.from({length: 10}, () => ({ x: Math.random() * 100, y: Math.random() * 100 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              }],
            }}
            options={{
              scales: {
                x: {beginAtZero: true},
                y: {beginAtZero: true}
              },
              ...chartOptions,
              plugins: { ...chartOptions.plugins, title: { ...chartOptions.plugins.title, text: "Sample Scatter Plot" } }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
