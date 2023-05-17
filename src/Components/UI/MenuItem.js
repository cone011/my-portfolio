import styled from "styled-components";
import { useState } from "react";

const MenuItem = (props) => {
  const { path, name } = props;
  const [isClick, setIsClick] = useState(false);
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setIsClick(!isClick);
  };
  return <ItemMenu onClick={() => scrollTo(path)}>{name}</ItemMenu>;
};

const ItemMenu = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontlg};
  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
  @media (max-width: 64em) {
    margin: 1rem 0;
    font-size: ${(props) => props.theme.fontmd};
    &::after {
      display: none;
    }
  }
`;

export default MenuItem;
