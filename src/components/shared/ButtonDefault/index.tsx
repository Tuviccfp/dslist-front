import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  width: 660px;
  height: 35px;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
`;

interface Props {
  text: String;
  style?: React.CSSProperties;
  link_url?: string;
}

const ButtonDefault: React.FC<Props> = ({ text, style, link_url }) => {
  return (
    <Button style={style}>
      <Link style={{textDecoration: 'none', color: 'black'}} to={`${link_url}`}>{text}</Link>
    </Button>
  );
};

export default ButtonDefault;
