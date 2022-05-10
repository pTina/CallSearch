// 카카오네비 api 문서
// https://developers.kakao.com/docs/latest/ko/getting-started/sdk-js#supported-browser
// 도메인 등록
// https://developers.kakao.com/docs/latest/ko/getting-started/app#platform

// const REST_API_KEY = 'a296f869f92b1a4919ba690e84991602';

// const xhr = new XMLHttpRequest();
// const url = `apis-navi.kakaomobility.com`;
// const info = `origin=127.11015314141542,37.39472714688412&destination=127.10824367964793,37.401937080111644&waypoints=&priority=RECOMMEND&car_fuel=GASOLINE&car_hipass=false&alternatives=false&road_details=false`;

// xhr.open('GET', url+info);
// xhr.setRequestHeader('Authorization', `KakaoAK ${REST_API_KEY}"`);
// console.log(xhr);




// $.ajax({
//     type: 'GET',
//     url: url,
//     // dataType: 'json',
//     beforeSend: function (xhr) {
//         xhr.setRequestHeader("Authorization", "KakaoAK${REST_API_KEY}");
//     },
//     error: function(xhr, status, error){
//         alert(error); 
//     },
//     success : function(json){
//         alert(json)
//     },


// })



// xhr.open('GET', url);
// xhr.onreadystatechange = function () {
//     console.log(tthis.readyState);
//     if (this.readyState == 4) {
//         console.log(this.responseText);
//         // console.log('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
//     }
// };



// origin=127.11015314141542,37.39472714688412&destination=127.10824367964793,37.401937080111644&waypoints=&priority=RECOMMEND&car_fuel=GASOLINE&car_hipass=false&alternatives=false&road_details=false


// Kakao.init(JAVASCRIPT_KEY);
// const response = Kakao.isInitialized();
// if(response){
//     const Navi = Kakao.Navi;
// }


// $.ajax({
//     url: 'https://apis-navi.kakaomobility.com/v1/directions?origin=127.11015314141542,37.39472714688412&destination=127.10824367964793,37.401937080111644&waypoints=&priority=RECOMMEND&car_fuel=GASOLINE&car_hipass=false&alternatives=false&road_details=false"',
//     type:'GET',
//     headers: {'Authorization' : Auth_KEY},
//      success:function(data){
//         console.log(data);
//      },
//      error : function(e){
//         console.log(e);
//      }
// });