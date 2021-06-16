import { LineStyle, Assessment, TrendingUp } from "@material-ui/icons";

import "./SideBar.css";
export default function SideBar() {
  return (
    <div className="Sidebar">
      <div className="SideBarWrapper">
        <div className="SideBarMenu">
          <h3 className="SideBarTitle">Dashboard</h3>
          <ul className="SideBarList">
            <li className="SideBarListItem">
              <LineStyle />
              Menu
            </li>
            <li className="SideBarListItem">
              <Assessment />
              Analytics
            </li>
            <li className="SideBarListItem">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
