import { empty } from '7-StateManagement/model/empty';
import { atom } from 'recoil';

export const gridAtom = atom({
    key: 'grid',
    default: empty(30, 30),
});
