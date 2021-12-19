import Chart from "../../../components/chart/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import "./home.css";
import { data } from "../../../dummyData";
import WidgetSm from "../../widgetSm/WidgetSm";
import WidgetLg from "../../widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={data} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
