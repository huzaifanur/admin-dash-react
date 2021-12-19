import "./widgetLg.css";
export default function WidgetLm() {
  const Button = ({ type }) => {
    return <button className={"widgetLgBtn " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1686864/pexels-photo-1686864.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="person"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Susan</span>
          </td>
          <td className="widgetLgDate">Date</td>
          <td className="widgetLgAmount">Amount</td>
          <td className="widgetLgStatus">Status</td>
          <td>
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1686864/pexels-photo-1686864.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="person"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Susan</span>
          </td>
          <td className="widgetLgDate">Date</td>
          <td className="widgetLgAmount">Amount</td>
          <td className="widgetLgStatus">Status</td>
          <td>
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/1686864/pexels-photo-1686864.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="person"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Susan</span>
          </td>
          <td className="widgetLgDate">Date</td>
          <td className="widgetLgAmount">Amount</td>
          <td className="widgetLgStatus">Status</td>
          <td>
            <Button type="Denied" />
          </td>
        </tr>
      </table>
    </div>
  );
}
