import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif; /* or 'Roboto' */
    background-color: #f9f9f9; /* Light pastel background */
    color: #333;
  }

  h2 {
    margin-bottom: 20px;
  }

  .container {
    display: flex;
    flex-direction: row;
    margin: 20px;
  }

  .sidebar {
    width: 200px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .content {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .widget {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .widget:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
  }
`;

export default GlobalStyles;