import React, { memo } from "react";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © Tix.vn "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default memo(Copyright);
