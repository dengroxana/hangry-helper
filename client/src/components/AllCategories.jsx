import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Latin from "./Latin";
import European from "./European";
import MiddleEastern from "./MiddleEastern";
import Asian from "./Asian";
import American from "./American";
import Desserts from "./Desserts";

function AllCategories() {
  const [selectedTab, setSelectedTab] = useState(null);

  const TABS = {
    asian: <Asian />,
    latin: <Latin />,
    european: <European />,
    american: <American />,
    "middle eastern": <MiddleEastern />,
    desserts: <Desserts />,
  };

 
    return (
      <div>
     
        <div className="showCat">
          <h3 className="catTitle" onClick={() => setSelectedTab('asian')}>
            Asian
          </h3>
          <h3 className="catTitle" onClick={() => setSelectedTab('latin')}>
            Latin
          </h3>
          <h3 className="catTitle" onClick={() => setSelectedTab('european')}>
            European
          </h3>
          <h3 className="catTitle" onClick={() => setSelectedTab('american')}>
            American
          </h3>
          <h3 className="catTitle" onClick={() => setSelectedTab('middle eastern')}>
            Middle Eastern
          </h3>
          <h3 className="catTitle" onClick={() => setSelectedTab('desserts')}>
            Desserts
          </h3>
        </div>
        {TABS[selectedTab]}
<br/>
        <Link to="/restaurants">Edit Restaurant List</Link>
      </div>
    );
  

}

export default AllCategories;
