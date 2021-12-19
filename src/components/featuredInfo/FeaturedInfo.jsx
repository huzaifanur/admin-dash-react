import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredmoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
      {/* --- */}
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredmoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
      {/* --- */}
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredmoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last Month</span>
      </div>
      {/* --- */}
    </div>
  );
}
