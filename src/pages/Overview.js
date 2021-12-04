import React from "react";
import { Fragment } from "react";
import ReactTooltip from "react-tooltip";

import patentData from "../patent.json";

const Overview = () => {
  const {
    patent: { iso_country_code: country, number, kind_code: kindCode },
    biblographic_details: {
      priority_date: date,
      title,
      abstract,
      classfications,
    },
  } = patentData;

  return (
    <>
      <div className="content" style={{ alignItems: "flex-start" }}>
        <div style={{ minWidth: "300px" }}>
          <div className="padd16">
            <p className="bold">Country</p>
            <p className="mt8">{country}</p>
          </div>
          <div className="padd16">
            <p className="bold">Patent Number</p>
            <p className="mt8">{number}</p>
          </div>

          <div className="padd16">
            <p className="bold">Kind Code</p>
            <p className="mt8">{kindCode}</p>
          </div>
          <div className="padd16">
            <p className="bold">Priority Date</p>
            <p className="mt8">{date}</p>
          </div>
          <div className="padd16">
            {classfications.map((item) => {
              return (
                <Fragment key={item.class}>
                  <div
                    className="code-box"
                    data-tip={item.description}
                    data-for={item.class}
                  >
                    {item.class}
                  </div>
                  <ReactTooltip
                    id={item.class}
                    backgroundColor="#fff"
                    textColor="#000"
                    border={true}
                    borderColor="#000000"
                    effect="solid"
                    place="right"
                  />
                </Fragment>
              );
            })}
          </div>
        </div>
        <div style={{ minWidth: "350px" }}>
          <div className="bold padd16">Title</div>
          <div className="padd16">{title}</div>
          <div className="bold padd16">Abstract</div>
          <div className="padd16">{abstract}</div>
        </div>
      </div>
    </>
  );
};

export default Overview;
