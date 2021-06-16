import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";
import "./App.css";
export default function App() {
  return (
    <div>
      <TopBar />
      <div className="Container">
        <SideBar />
        Content
      </div>
    </div>
  );
}
