import "./sidebar.css";
import { LineStyle, PermIdentity, Storefront } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Approval/Rejects</h3>
          <ul className="sidebarList">
            <Link to="/DMerchandise" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Draft Merchandise
              </li>
            </Link>
            <Link to="/Dmenu" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Draft Menu
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
