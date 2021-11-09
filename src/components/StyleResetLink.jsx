import { Link as RouterLink } from "react-router-dom";

import styled from "styled-components";

const StyleResetLink = styled(RouterLink)(() => ({
    textDecoration: "none",
    color: "unset",
}));

export default StyleResetLink;
