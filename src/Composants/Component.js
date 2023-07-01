import {v4} from 'uuid';

class Component {
    _id;
    _nom;
    _clicks;
    _cost;
    _icon;
    constructor({clics, cout, nom, icon}) {
        this._id = v4();
        this._nom = nom;
        this._clicks=clics;
        this._cost=cout;
        this._icon = icon;
    }
    //#region Getters et Setters
    get clicks(){return this._clicks;}
    set clicks(value){this._clicks = value;}
    get cost(){return this._cost;}
    set cost(value){this._cost = value;}
    get id(){return this._id;}
    get nom(){return this._nom;}
    set nom(value){this._nom=value;}
    get icon(){return this._icon;}
    //#endregion
}
export default Component;