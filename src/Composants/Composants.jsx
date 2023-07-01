import Component from "./Component";
import MouseRoundedIcon from '@mui/icons-material/MouseRounded';
import PanToolAltRoundedIcon from '@mui/icons-material/PanToolAltRounded';
import KeyboardAltRoundedIcon from '@mui/icons-material/KeyboardAltRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';

function getComposants(){
    const comps = [];

    const Finger = new Component({clics:0.1,cout:10,nom:"Finger",icon:<PanToolAltRoundedIcon />});
    comps.push(Finger);

    const Autoclicker = new Component({clics:0.3,cout:100,nom:"AutoClicker",icon:<MouseRoundedIcon />});
    comps.push(Autoclicker);

    const Keyboard = new Component({clics:1,cout:500,nom:"Keyboard",icon:<KeyboardAltRoundedIcon />});
    comps.push(Keyboard);

    const Computer = new Component({clics:1.5,cout:1000,nom:"Computer",icon:<ComputerRoundedIcon />});
    comps.push(Computer);

    return comps;
}

export default getComposants;