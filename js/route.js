// 위도: -90 ~ 90
// 경도: -180 ~180

class Route{
    constructor(){
        this._origin = {x:-999, y:-999};
        this._destination = {x:-999, y:-999};
    }

    setRoute(e) {
        if(e.type == 'origin'){
            this.origin = {x: e.x, y: e.y};

        }else if(e.type == 'destination'){
            this.destination = {x: e.x, y: e.y};
        }
    }

    isEmpty(){
        if(this.origin.x == -999 || this.destination.x === -999){
            return true;
        }else{
            return false;
        }
    }

    get origin(){
        return this._origin;
    }

    set origin(value){
        this._origin.x = value.x;
        this._origin.y = value.y;
    }

    get destination(){
        return this._destination;
    }

    set destination(value){
        this._destination.x = value.x;
        this._destination.y = value.y;
    }
}