import { useState } from "react";
import "./style.css";

export default function Rocket() {
  const [tabs, setTabs] = useState([
    { no: 1, tab: "Personal Information", complete: false },
    { no: 2, tab: "Parents", complete: false },
    { no: 3, tab: "Emergency", complete: false },
    { no: 4, tab: "Education", complete: false },
    { no: 5, tab: "Medical", complete: false },
    { no: 6, tab: "Confirm", complete: false },
    // { no: 7, tab: "Confirm", complete: false },
  ]);
  return (
    <div className="flex-d">
      {tabs.map((tab, index) => (
        <div className="col-sm-6 col-md-2 d-grid gap-2" key={index}>
          <button className="shape"
          // disabled={!tab.complete}
          //   className={`btn ${
          //     activeTab === tab.no ? "btn-primary" : "btn-secondary"
          //   }`}
          //   onClick={() => setactiveTab(tab.no)}
          >
            <p className="btn-txt">{tab.tab}</p>
          </button>
        </div>
      ))}
    </div>
    // <div className="shape">
    //     <p>Personal</p>
    // </div>
  );
}
