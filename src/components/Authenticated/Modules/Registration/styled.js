import styled from 'styled-components';

const styles = {
  container: {
    marginRight   : 40,
    alignItems    : 'center',
    justifyContent: 'center',
  },
};

export default styles;

export const Label = styled.p`
  width: 150px;
  text-align: right;
  padding-right: 5px;
`;

export const SubHeader = styled.div`
  font-size: 20px;
  padding-top: 10px;
`;
export const FormWrapper = styled.div`
  padding: 20px;
  background: #f3f3f3;
`;

export const SubFormWrapper = styled.div`
  padding-bottom: 20px;
`;

export const Icon = styled.span`
  padding: 0 8px;
  :hover {
    color: blue;
  }
`;

