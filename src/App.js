import Info from "./Components/Info";
import About from "./Components/About";
import "./app.css";
import Interest from "./Components/Interest";
import Icons from "./Components/icons";

export default function App() {
  return (
    <div className="main-container">
      <div className="digital-card">
        <Info />
        <About />
        <Interest />
        <Icons />
      </div>
    </div>
  );
}
