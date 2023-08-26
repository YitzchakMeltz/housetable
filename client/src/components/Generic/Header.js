import React from "react";
import { Grid, Tooltip, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactComponent as Icon } from "../../resources/svg/Icon.svg";
import { ReactComponent as TextLogo } from "../../resources/svg/TextLogo.svg";
import { useNavigate } from "react-router";

const Root = styled(Grid)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const HeaderWrapper = styled(Grid)(({ theme }) => ({
  width: 250,
  padding: 3,
  backgroundColor: "#FFF",
  boxShadow: "0 0 40px #baa28870",
  borderRadius: 40,
  display: "flex",
  alignItems: "center",
}));

const HomeButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#FFF",
  border: "1px solid #93795d",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const HousetableIcon = styled(Icon)(({ theme }) => ({
  width: 30,
  height: "auto",
}));

const TextLogoWrapper = styled(Grid)(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const HousetableTextLogo = styled(TextLogo)(({ theme }) => ({
  width: "auto",
  height: 13,
  marginInlineEnd: 10,
}));

/**
 * A generic header containing a title and a home button.
 *
 * @component
 */
function Header() {
  const navigate = useNavigate();

  return (
    <Root>
      <HeaderWrapper>
        <Tooltip title="Go to Homepage">
          <HomeButton onClick={() => navigate("/")}>
            <HousetableIcon />
          </HomeButton>
        </Tooltip>
        <TextLogoWrapper>
          <HousetableTextLogo />
        </TextLogoWrapper>
      </HeaderWrapper>
    </Root>
  );
}

export default Header;
