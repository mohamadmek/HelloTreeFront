import styled from 'styled-components';


const Title = styled.div`
color: ${props => props.theme.white};
text-transform: uppercase;
letter-spacing: 4px;
transform: rotate(-90deg);
position: absolute;
top: 26%;
left: -50px;
font-size: 1.1rem;
`;

export default Title;