import React from "react";
import PropTypes from "prop-types";

const renderTenCumRap = (tenCumRap) => {
  if (tenCumRap.includes("Cineplex")) {
    return tenCumRap.split("Cineplex -");
  }
  return tenCumRap.split(" -");
};

function LabelContent(props) {
  const { cinema } = props;
  const tenCumRap = cinema.tenCumRap;
  const diaChi = cinema.diaChi;

  return (
    <div className="wrapInfo">
      <span className="chiNhanh">
        {/* <span className={`tenRap ${renderTenCumRap(tenCumRap)[0]}`}> */}
        <span className={`tenRap ${renderTenCumRap(tenCumRap)[0]}`}>
          {renderTenCumRap(tenCumRap)[0]}
        </span>
        - {renderTenCumRap(tenCumRap)[1]}
      </span>
      {diaChi && (
        <span className="diaChi" placeholder={diaChi}>
          {diaChi}
        </span>
      )}
    </div>
  );
}

LabelContent.propTypes = {
  cinema: PropTypes.object.isRequired,
};
LabelContent.defaultProps = {
  cinema: {},
};

export default LabelContent;
