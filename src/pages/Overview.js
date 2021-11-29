import React from "react";

const Overview = () => {
  return (
    <>
      <div className="content">
        <div>
          <div>
            <h2>Problem</h2>
            <div>
              <p>
                <strong>
                  Update: we have extended the deadline as the contest was over
                  early and some users were not able to upload their research.
                  So the final deadline is until the next Sunday.
                </strong>
              </p>
              <p>
                This contest is for a&nbsp; prior art search RE45145
                &nbsp;and&nbsp; RE48600 , which describe a wing pulley for a
                conveyor belt.
              </p>
              <p>&nbsp;</p>
              <p>
                The pulley is made up of two spaced cylindrical hubs with a
                number of wings extending radially from the hubs. &nbsp;The
                wings are generally oriented in V-shapes, and the convergence
                point of the V shapes generally corresponds to the direction of
                the pulley’s rotation.&nbsp;
              </p>
              <p>&nbsp;</p>
              <p align="center">
                <img
                  alt=""
                  hspace="5px"
                  src="https://patexia-data.s3.amazonaws.com/users/user2/555_72e716382539d00ef2ec2db56efebac7.png"
                  style={{ float: "left" }}
                />
              </p>
              <p>&nbsp;</p>
              <div style={{ height: "200px" }}>
                <p>
                  The pulley’s V-shaped wing configuration is intended to
                  laterally deflect debris (like sand and gravel) away from the
                  pulley and its conveyor belt as the pulley spins.
                </p>
                <p>&nbsp;</p>
                <p>
                  When viewing the pulley’s hub straight-on, each wing connected
                  to the hub is angled forward of a radius of the hub (see angle
                  “C” below in relation to radius “B”) in the direction of the
                  pulley’s rotation (see arrow “D” below).&nbsp;
                </p>
              </div>
              <p align="center">
                <img
                  alt=""
                  hspace="5px"
                  src="https://patexia-data.s3.amazonaws.com/users/user2/555_a582c8301a927ecf94e80f1eb33e3e91.png"
                  style={{ float: "left" }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
