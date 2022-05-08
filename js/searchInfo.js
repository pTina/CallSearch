
import {KOREA_AREA} from './koreaArea.js';
import * as ds from './dataSearch.js';
import { Render } from "./render.js";

export class SearchInfo {
    constructor(){
        const self = this;

        this._KOREA_AREA = KOREA_AREA;
        this.$area1 = $('.area1');
        this.$area2 = $('.area2');
        this.$typeCar = $('.typeCar');
        this.$btnSearch = $('.btnSearch');
        this.listArea1 = [];
        this._area1, this._area1;
        this._typeCar = '';

        // 한번만 실행
        this.makeArea1();

        $(".area1").change(function(){
            const val = $(this).find('option:selected').attr('value');
           
            if(val === 'none'){
                // self.$area2.html('');
                // self.$area2.attr('disabled', '');
                self.area1 = '';
                self.$btnSearch.attr('disabled', '');

            }else{
                self.area1 = val;
                // self.makeArea2(val);
                // self.area2 = self.$area2.find('option:first-child').attr('value');
                self.$btnSearch.removeAttr('disabled');
            }
        });

        // $(".area2").change(function(){
        //     const val = $(this).find('option:selected').attr('value');
        //     self.area2 = val;
        // });

        $('.btnSearch').on('click', ()=>{
            const reuslt = ds.getData('area',this.area);
            const render = new Render(reuslt);

        });
    }

    get area(){
        // return `${this._area1} ${this._area2}`;
        return this._area1;
    }

    get area1(){
        return this._area1;
    }

    set area1(val){
        this._area1 = val;
    }

    // get area2(){
    //     return this._area2;
    // }

    // set area2(val){
    //     this._area2 = val;
    // }

    get typeCar(){
        return this._typeCar;
    }

    set typeCar(val){
        this._typeCar = val;
    }
    

    // 시·도
    makeArea1(){
        const html = `<option value="{{__val__}}">{{__val__}}</option>`;
        const listHTML = [];
        $.each(this._KOREA_AREA, (idx, val)=>{
            const key = Object.keys(val)[0];
            this.listArea1.push(key);
            listHTML.push(html.replaceAll('{{__val__}}', key));
        })

        this.$area1.append(listHTML.join());
    };

    // 시·군·구
    // makeArea2(val){
    //     this.$area2.html('');
    //     this.$area2.removeAttr('disabled');

    //     const AREA1 = val;
    //     const idx = this.listArea1.findIndex(key => key === AREA1);
    //     const arr = this._KOREA_AREA[idx][val];

    //     const html = `<option value="{{__val__}}">{{__val__}}</option>`;
    //     const listHTML = [];
        
    //     for(let item of arr){
    //         listHTML.push(html.replaceAll('{{__val__}}', item));
    //     }

    //     this.$area2.append(listHTML.join());
    // };

}


