export class Render{
    constructor(arr){
        this.ARR = arr;
        this.html = [];
        this._time1;
    }

    get time1(){
        return this._time1;
    }

    set time1(val){
        this._time1 = val;
    }

    getListArea(){
        this.ARR.forEach((el, idx) => {
            this.val = el;
            const url = this.val.rceptItnadr;
            let URL = '예약접수';
            let dis = 'pointer';
            if(url.indexOf('http') < 0){
                URL = '없음';
                dis = 'dis';
            }

            this.html.push(`
            <div class="listItem listItem-${idx} row">
                <div class="row itemWrap">
                    <div class="name col-xs-3 pointer">${this.val.tfcwkerMvmnCnterNm}</div>
                    <div class="time col-xs-3">
                        <div class="time_weekday row">
                            <div class="col-xs-4">평일</div>
                            <div class="col-xs-8">${this.val.weekdayOperOpenHhmm} ~ ${this.val.weekdayOperColseHhmm}</div>
                        </div>
                        <div class="time_weekend row">
                            <div class="col-xs-4">주말</div>
                            <div class="col-xs-8">${this.val.wkendOperOpenHhmm} ~ ${this.val.wkendOperCloseHhmm}</div>
                        </div>
                    </div>
                    <div class="tell col-xs-3">
                        <span class="tellNumber">${this.val.phoneNumber}</span>
                        <span class="pointer btnCopy"><i class="bi bi-clipboard"></i></span>
                        <input class="clip_target" type="text" style="z-index: -999; position:absolute;"/>
                    </div>
                    <div class="homepage col-xs-3"><a class="${dis}" href="${this.val.rceptItnadr}" target="black">${URL}</a></div>
                </div>
                
                <div class="row itemTypeCar">
                    <div class="col-xs-3 empty"></div>
                    <div class="col-xs-3">
                        <div class="type_car _slopeVhcleCo row">
                            <div class="col-xs-4">슬로프</div>
                            <div class="col-xs-8">${this.val.slopeVhcleCo}</div>
                        </div>
                        <div class="type_car _liftVhcleCo row">
                            <div class="col-xs-4">리프트</div>
                            <div class="col-xs-8">${this.val.liftVhcleCo}</div>
                        </div>
                    </div>
                </div>
            </div>
            `);
        });

        $('#boxListItem').html('');
        $('#boxListItem').append(this.html.join(''));

        this.initCopy();
        this.initDetail();
    }

    getFilter(type){
        if(Render.time1){
            setTimeout(Render.time1);
            $('.tell').removeClass("bgOn");
        }

        const TYPE = type; 
        $('.type_car').removeClass('bgOn');

        if(TYPE === 'allVhcleCo'){
            $('.listItem').removeClass('hide');
            return false;
        }
        
        $(`._${TYPE}`).addClass('bgOn');
        this.ARR.forEach((val, idx) =>{
            const $el = $(`.listItem-${idx}`);
            if(val[TYPE] === '0'){
                $el.addClass("hide");
            }else{
                $el.hasClass('hide') ?  $el.removeClass("hide") : '';
            }
        })
    }

    initCopy(){
        const copyYes = 'bi-clipboard-check';
        const copyNo = 'bi-clipboard';

        $('.btnCopy').on('click', function(){
            Render.time1 ? setTimeout(Render.time1) : '';
            const $this = $(this);
            const $parent = $this.parent();
            const $tellNumber = $(this).prev();
            const $clipInput = $(this).next();
            const num = $tellNumber.text();
            $clipInput.val(num);
            $clipInput.select();

            try{
                const result = document.execCommand('copy');

                if(result){
                    $parent.addClass('bgOn');
                    $this.find('i').removeClass(copyNo);
                    $this.find('i').addClass(copyYes);
                    Render.time1 = setTimeout(()=>{
                        $parent.removeClass('bgOn');
                        $this.find('i').removeClass(copyYes);
                        $this.find('i').addClass(copyNo);
                    }, 1500);
                }else{
                    alert('복사 오류');
                }

            }catch(err){
                alert('죄송합니다. 클립보드 복사 지원이 되지 않습니다.');
            }
            
            
        })
    }

    getDetail(){
        const popHTML = `
            <div></div>
        `;
    }

    initDetail(){
        $('.name').on("click", function(){
            console.log($(this));
        })
    }

    
}

