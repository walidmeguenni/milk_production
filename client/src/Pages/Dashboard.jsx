import { Card, Title } from "../components";
import { cardData } from "../constant";
import { LineChart } from "../components";
import { getGraph } from "../api/apiMilk";
import { useEffect, useState } from "react";
import { getInfo } from "../api/apiInfo";
const Dashboard = () => {
  const [labels, setLabels] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [statics, setStatics] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { labels, datasets } = await getGraph();
      const data = await getInfo();
      console.log(data);
      setDatasets(datasets);
      setLabels(labels);
      setStatics(data);
    };
    fetchData();
  }, []);
  return (
    <div className="w-full pb-5">
      <Title label="Dashboard" />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-8 mt-10">
        <div className="col-span-3 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-sm font-bold text-gray-700 pt-1">
            Milk Production By Day
          </h2>
          <LineChart labels={labels} datasets={datasets} />
        </div>
        <div className="col-span-2 grid gap-y-4">
          {statics?.map((item) => (
            <Card
              key={item.id}
              label={item.label}
              value={item.value}
              Icon={cardData[item.label]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
