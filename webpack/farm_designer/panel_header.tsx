import * as React from "react";
import { t } from "i18next";
import { getPathArray } from "../history";
import { Link } from "../link";

type Tabs = "Map" | "Plants" | "FarmEvents";

const getCurrentTab = (): Tabs => {
  if (getPathArray().join("/") === "/app/designer") {
    return "Map";
  } else if (getPathArray().includes("farm_events")) {
    return "FarmEvents";
  } else {
    return "Plants";
  }
};

const TAB_COLOR = { Map: "gray", Plants: "green", FarmEvents: "magenta" };

export function DesignerNavTabs(props: { hidden?: boolean }) {
  const tab = getCurrentTab();
  const hidden = props.hidden ? "hidden" : "";
  return <div className={`panel-header ${TAB_COLOR[tab]}-panel ${hidden}`}>
    <div className="panel-tabs">
      <Link to="/app/designer"
        className={tab === "Map" ? "active" : ""}>
        {t("Map")}
      </Link>
      <Link to="/app/designer/plants"
        className={tab === "Plants" ? "active" : ""}>
        {t("Plants")}
      </Link>
      <Link to="/app/designer/farm_events"
        className={tab === "FarmEvents" ? "active" : ""}>
        {t("Events")}
      </Link>
    </div>
  </div>;
}
