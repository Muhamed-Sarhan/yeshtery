import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  display: block !important;
  margin: 0 5px !important;
  cursor: pointer !important;
  position: relative !important;
`;

export const Icon = styled(FontAwesomeIcon)`
  padding: 5px !important;
  font-size: 30px !important;
  color: #000000 !important;
`;
export const IconX = styled(FontAwesomeIcon)`
  padding: 5px !important;
  font-size: 30px !important;
  color: #000000 !important;
  position: relative !important;
  right: -95% !important;
  top: 2% !important;
`;

export const CartCount = styled.span`
  position: absolute !important;
  bottom: 20px !important;
  right: -10px !important;
  padding: 3px 7px !important;
  border-radius: 50px !important;
  background: #fff100 !important;
  color: #000000 !important;
  font-size: 12px !important;
  font-weight: 600 !important;
`;

export const CartSideBar = styled.div`
  z-index: 100000000000000 !important;
  width: 350px !important;
  background: #ffffff !important;
  top: 0 !important;
  right: 0 !important;
  padding: 25px !important;
  position: fixed !important;
  overflow: auto !important;
  height: 100% !important;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23) !important;
  transition: all ease-in-out 0.3s !important;
  &.expand {
    transition: all ease-in-out 0.3s !important;
    right: 0 !important;
  }
  &.shrink {
    transition: all ease-in-out 0.3s !important;
    right: -400px !important;
  }
`;

export const EmptyCart = styled.div`
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  font-size: 24px !important;
`;

export const SideBarHeader = styled.div`
  font-weight: 600 !important;
  font-size: 26px !important;
  color: #542e90 !important;
  position: relative !important;
  padding: 15px 0 !important;
`;
