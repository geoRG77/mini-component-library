import { COLORS } from "../../constants";
import Icon from "../Icon";
import styled from "@emotion/styled";
import VisuallyHidden from "../VisuallyHidden";

const BaseWrapper = styled.div((props) => ({
  position: "relative",
  width: props.width,
  color: COLORS.gray700,
  borderBottomStyle: "solid",
  borderBottomColor: COLORS.black,

  "&:hover": {
    color: COLORS.black,
  },
}));

const SmallWrapper = styled(BaseWrapper)({
  fontSize: "14px",
  height: "24px",
  borderBottomWidth: "1px",

  "& input": {
    paddingLeft: "20px",
  },
});

const LargeWrapper = styled(BaseWrapper)({
  fontSize: "18px",
  height: "36px",
  borderBottomWidth: "2px",

  "& input": {
    paddingLeft: "28px",
  },
});

const Input = styled.input({
  width: "100%",
  height: "100%",
  fontWeight: 700,
  color: "inherit",
  border: 0,
  outlineOffset: "1px",

  "::placeholder": {
    fontWeight: 400,
    color: COLORS.gray500,
  },
});

const StyledIcon = styled(Icon)((props) => ({
  position: "absolute",
  top: `calc(50% - ${props.size} / 2)`,
  left: "2px",
  pointerEvents: "none",
}));

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  if (size === "small") {
    return (
      <SmallWrapper width={width}>
        <StyledIcon id={icon} size="10px" />
        <Input placeholder={placeholder} />
        <VisuallyHidden>{label}</VisuallyHidden>
      </SmallWrapper>
    );
  } else if (size === "large") {
    return (
      <LargeWrapper width={width}>
        <StyledIcon id={icon} size="16px" />
        <Input placeholder={placeholder} />
        <VisuallyHidden>{label}</VisuallyHidden>
      </LargeWrapper>
    );
  } else throw new Error(`Size was not specified: ${size}`);
};

export default IconInput;
