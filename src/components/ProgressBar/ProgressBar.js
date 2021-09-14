import React from "react";
import styled from "@emotion/styled";
import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div(({ withPadding }) => ({
  backgroundColor: `${COLORS.transparentGray15}`,
  boxShadow: `inset 0px 2px 4px ${COLORS.transparentGray35}`,
  padding: withPadding ? "4px" : "0px",
  borderRadius: "8px",
}));

const Mask = styled.div({
  borderRadius: "4px",
  overflow: "hidden",
});

const BaseProgress = styled.div(({ value }) => ({
  width: `${value}%`,
  backgroundColor: `${COLORS.primary}`,
}));

const SmallProgress = styled(BaseProgress)({
  height: "8px",
});

const MediumProgress = styled(BaseProgress)({
  height: "12px",
});

const LargeProgress = styled(BaseProgress)({
  height: "16px",
});

const ProgressBar = ({ value, size }) => {
  let Component;

  if (size === "small") {
    Component = SmallProgress;
  } else if (size === "medium") {
    Component = MediumProgress;
  } else if (size === "large") {
    Component = LargeProgress;
  } else throw new Error(`Size was not specified: ${size}`);

  return (
    <Wrapper withPadding={size === "large"}>
      <VisuallyHidden>
        <label>Progress: {`${value}%`}</label>
      </VisuallyHidden>
      <Mask>
        <Component
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuetext={`Progress: ${value}%`}
          value={value}
        />
      </Mask>
    </Wrapper>
  );
};

export default ProgressBar;
