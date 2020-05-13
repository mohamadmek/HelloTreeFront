import React from 'react';
import styled from 'styled-components';

const LineBreak = styled.div`
  width: 100%;
  border: 0.3px solid ${props => props.theme.white};
  color: ${props => props.theme.white};
  margin-top: 10rem;
  margin-bottom: 7rem;
  opacity: 0.3;
`;

const Line = () => (
<LineBreak></LineBreak>
)
 
export default Line;
