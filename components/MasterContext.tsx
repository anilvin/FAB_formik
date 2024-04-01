import { createContext } from 'react';

const RmdContext = createContext<any>('');
const UserContext = createContext<any>('');
const DropdownContext = createContext<any>('');
export default {
  RmdContext, UserContext, DropdownContext,
};
