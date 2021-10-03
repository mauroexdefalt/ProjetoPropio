import styled from "styled-components"

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0 16px; 
  border-radius: 5px;
  margin-left: 5px;

  max-height: calc(100vh - 46px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
    color: green
  }

  ::-webkit-scrollbar-thumb {
    background-color: #FFF;
    border-radius: 4px;
  }
  `