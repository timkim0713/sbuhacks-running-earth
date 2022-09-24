
import { useState } from 'react';
import {
    atom,

} from 'recoil';

export const currentImageRecoil = atom({
    key: 'currentImageRecoil', // unique ID (with respect to other atoms/selectors)
    default: 'https://picsum.photos/400/300', // default value (aka initial value)
});


