import styled from "styled-components";
import Flex from "UI/Flex";

export const StyledLabel = styled(Flex.withComponent("label"))`
  cursor: pointer;

  input[type="file"] {
    display: none;
  }

  span {
    margin-left: 1rem;
    color: ${ ({ theme }) => theme.colors.gray["500"] };
  }
`;
