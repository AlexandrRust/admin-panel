import styled from 'styled-components';

export const HeaderBox = styled.div`
  padding: 0 15px 0 5px;
  /* position: fixed;
  top: 0; */
  /* right: 0;
  left: 0; */
  /* z-index: 1000; */
  background-color: ${p => p.theme.colors.primary};
  border-bottom: 1px solid ${p => p.theme.borderColors.primary};
  /* width: 100%; */
  height: 50px;
  display: flex;

  align-items: center;
  /* justify-content: space-between; */
  gap: 20px;
`;
