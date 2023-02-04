import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { shallowEqual } from "react-redux";
import { useAppSelector } from "../hook";

const ProcessComponent = () => {
  const { currentState } = useAppSelector(
    (state) => ({ currentState: state.process }),
    shallowEqual
  );
  const { loading } = currentState;
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: 99999}}
      open={loading}
    >
      <CircularProgress 
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={50}
        thickness={5}
        value={100} />
    </Backdrop>
  );
};

export default ProcessComponent;
