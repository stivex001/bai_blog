import Leftbar from "@/components/HR/navbar/Leftbar";
import Topbar from "@/components/HR/navbar/Topbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <div style={{ backgroundColor: "#345652", flex: "4"  }}>{children}</div>
      </div>
    </div>
  );
};

export default layout;
