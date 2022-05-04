
// 인증키(인코딩)
// 9MswFkR%2FWc5ryIBw8t3NNcK00kpfKSLFKLPbDGvy8L3ebhId5ngHI2xXmGMM3YhK5yutxy7mi1YLizOuaXpaDQ%3D%3D
// var data = {
//     serviceKey: 'UTF-8로 인코딩된 인증키',
//     s_page: 0,
//     s_list: 1,
//     type: 'json',
//     instt_nm: 'UTF-8로 인코딩된 value'
// };

// $.ajax({
//     post: 'get',
//     url: 'http://api.data.go.kr/openapi/tn_pubr_public_tfcwker_mvmn_cnter_api',
//     data: data,
//     dataType: 'jsonp',
//     success: function(data){
//          console.log(data);
//     }
// });

const serviceKey = '9MswFkR%2FWc5ryIBw8t3NNcK00kpfKSLFKLPbDGvy8L3ebhId5ngHI2xXmGMM3YhK5yutxy7mi1YLizOuaXpaDQ%3D%3D';
var xhr = new XMLHttpRequest();
var url = 'http://api.data.go.kr/openapi/tn_pubr_public_tfcwker_mvmn_cnter_api';
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+serviceKey; 
queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); 
// queryParams += '&' + encodeURIComponent('lnmadr') + '=' + encodeURIComponent('경기도 고양시'); 

// xhr.open('GET', url + queryParams);
// xhr.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
//     }
// };

xhr.send('');
// var queryParams = '&' + encodeURIComponent('rdnmadr') + '=' + encodeURIComponent('');
// xhr.open('GET', url + queryParams);
// xhr.onreadystatechange = function () {
//     console.log('eee');
//     if (this.readyState == 4) {
//         alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
//     }
// };
// Import all plugins
// import * as bootstrap from 'bootstrap';

// Or import only needed plugins
// import { Tooltip as Tooltip, Toast as Toast, Popover as Popover } from 'bootstrap';

// Or import just one
// import {Alert as Alert} from '../node_modules/bootstrap/js/dist/alert';

import {SearchInfo} from './searchInfo.js';

$(document).ready(()=>{
    const searchInfo = new SearchInfo();
   
})
