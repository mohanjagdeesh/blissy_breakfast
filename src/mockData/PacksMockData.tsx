import { IPacks } from "../interfaces/IPacks";

export const PACKS_MOCK_DATA:IPacks[] = [
    {
        packIcon:require('../assets/images/pack_one_icon.jpg'),
        packCost:2500,
        packTitle:'Blissy Basic',
    },
    {
        packIcon:require('../assets/images/pack_two_icon.jpg'),
        packCost:3000,
        packTitle:'Blissy Premium'
    },
];