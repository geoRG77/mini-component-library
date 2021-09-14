import React from "react";
import styled from "@emotion/styled";
import Icon from "../Icon";
import { COLORS } from "../../constants";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div({
  position: "relative",
  color: COLORS.gray700,
  backgroundColor: COLORS.transparentGray15,
  borderRadius: "8px",
  height: "43px",
  width: "fit-content",
  padding: "0 52px 0 16px",

  "&:focus": {
    outline: "solid",
  },

  "&:hover": {
    color: COLORS.black,
  },
});

const HiddenText = styled.div({
  height: "100%",
  fontSize: "16px",
  opacity: 0,
  textIntend: "-9999px",
});

const StyledSelect = styled.select({
  color: "inherit",
  appearance: "none",
  backgroundColor: "transparent",
  padding: "12px 16px",
  border: "none",
  width: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  fontSize: "16px",
  outline: "none",
});

const StyledIcon = styled(Icon)({
  color: "inherit",
  width: "fit-content",
  position: "absolute",
  top: "50%",
  marginTop: "-8px",
  right: "10px",
  pointerEvents: "none",
});

const Select = ({ value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <HiddenText>{displayedValue}</HiddenText>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <StyledIcon id="chevron-down" size={20} strokeWidth={2} />
    </Wrapper>
  );
};

export default Select;
