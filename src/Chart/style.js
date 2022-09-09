import styled from "styled-components";

export const LegendContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LegTitle = styled.h4`
  margin-left: 20px;
  color: #9e9e9e;
  font-weight: 300;
`;

export const LegendItems = styled.div`
  padding-right: 10px;
  display: flex;
  flex-wrap: nowrap;
`;

export const LegendItem = styled(LegendItems)`
  margin-right: 4px;
  align-items: center;
`;

export const Circle = styled.div`
  margin-right: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.color};
`;

export const LegendItemTitle = styled.span`
  margin-right: 4px;
  font-size: 12px;
  color: #000;
  font-weight: bold;
`;

export const LegendItemTotal = styled.span`
  padding: 0 3px;
  color: #000;
  font-size: 10px;
  font-weight: bold;
  border-radius: 4px;
  border: 1px solid #9e9e9e;
`;
