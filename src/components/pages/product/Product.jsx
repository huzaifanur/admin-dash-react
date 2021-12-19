import "./product.css";
import { Link } from "react-router-dom";
import { productdata } from "../../../dummyData";
import Chart from "../../chart/Chart";
import { Publish } from "@material-ui/icons";
export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productdata} dataKey="Sales" title="Sales Analytics" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images.pexels.com/photos/3905743/pexels-photo-3905743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="productinfoImg"
            />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">5615</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5615</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">5615</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple airpods"></input>
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/3905743/pexels-photo-3905743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productBtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
