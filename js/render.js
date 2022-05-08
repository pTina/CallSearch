export class Render{
    constructor(arr){
        this.ARR = arr;
        this.html = [];
        this.ARR.forEach(el => {
            this.val = el;
            this.html.push(`
            <div class="listItem listItem-1 row">
                <div class="name col-xs-3">${this.val.tfcwkerMvmnCnterNm}</div>
                <div class="time col-xs-3">
                <div class="time_weekday row">
                    <div class="col-xs-4">평일</div>
                    <div class="col-xs-8">${this.val.weekdayOperOpenHhmm} : ${this.val.weekdayOperColseHhmm}</div>
                </div>
                <div class="time_weekend row">
                    <div class="col-xs-4">주말</div>
                    <div class="col-xs-8">${this.val.wkendOperOpenHhmm} : ${this.val.wkendOperCloseHhmm}</div>
                </div>
                </div>
                <div class="tellC col-xs-3">${this.val.phoneNumber}</div>
                <div class="homepage col-xs-3"><a href="${this.val.rceptItnadr}"></a></div>
            </div>
            `);
        });

        $('#boxListItem').html('');
        $('#boxListItem').append(this.html.join(''));

        

    }

    
}

