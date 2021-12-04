import React from "react";

import patentReferences from "../patent_references.json";

const References = () => {
  // const [patents, setPatents] = useState(patentReferences)
  return (
    <div style={{ padding: "1rem" }}>
      <p style={{ marginBottom: "0.5rem" }}>Patent Known References</p>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Patent Country</th>
            <th> Patent Number</th>
          </tr>
        </thead>
        <tbody>
          {patentReferences &&
            patentReferences.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.type}</td>
                  <td>{item.country_code}</td>
                  <td>{item.number}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default References;
