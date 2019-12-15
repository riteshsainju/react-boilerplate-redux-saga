import styled from 'styled-components';
import CrossIcon from '@material-ui/icons/Close';
import { Modal } from '@material-ui/core';

const Flex = 'display:flex; flex:1;';

export const PopUp = styled(Modal)`
  ${Flex}
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: white;
  width: ${props => props.width || '40%'};
  margin: ${props => props.margin || 'auto'};
`;

export const Header = styled.div`
  ${Flex},
  font-size:20px;
  border-bottom: solid 1px #ccc;
  line-height: 40px;
  padding: 0 0 0 15px;
  justify-content: space-between;
  padding: 5px 15px;
  svg {
    margin-top: 10px;
  }
`;

export const CustomCrossIcon = styled(CrossIcon)`
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding: ${props => props.padding && props.padding};
`;

export const HeaderText = styled.div`
  padding: ${props => props.padding && props.padding};
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  ${Flex},
  background: ${props => props.backgroundColor || 'none'};
  padding: 14px 10px;
  border-top: 1px solid #e9e9e9;
  border-radius: 0 0 5px 5px;
  font-size:14px;
  line-height:17px;
  justify-content:flex-end;
`;
