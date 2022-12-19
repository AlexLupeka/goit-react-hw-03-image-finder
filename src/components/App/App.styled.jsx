import style from '@emotion/styled';

export const Container = style.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;`;

export const ContainerText = style.p`
  display: flex;
    flex-direction: column;
    font-size: 25px;
    font-weight: 700;
    margin: 30px auto 0;
    text-align: center;
     color: #008080;
  `;
