import styled from 'styled-components';

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;


export const AppNavigation = styled.div`
  a {
    display: inline-block;
    color: #fff;
    margin: 10px;
  }
`;