# 교통약자 이동지원센터 통합 조회 서비스

공공데이터
전국교통약자이동지원센터정보표준데이터 API 사용  
부트스트랩 이용한 레이아웃 설계


1. 기획: 2022-04-21  
2. 레이아웃 설계: 2022-04-28  
3. API 연동 후 데이터 저장 및 확인: 2022-05-05  
4. 1차 검색 - 지역(1): 2022-05-08  
5. 1차 검색 - 지역(2): 2022-05-09  
    예약접수 URL, 차량종류(모두, 슬로프, 리프트), 전화번호 클립보드 복사, 찾기 버튼 눌렀을 때 이전 찾기 했을 때와 같은 지역인 경우 계속 호출되는 문제 해결(searchInfo.js - onChange 속성 추가).   
6. 상세 내용 조회(1): 2022-05-10  
부트스트랩  modal 사용  
지역 이름 클릭했을 때 modal 팝업창을 통해 상세 정보 확인 가능하도록 함  
예약 접수 -  평일, 주말  
운행 지역 - 관내, 관외 (보통 + 아니면 , 로 구분되어 있음 소괄호와 함께 쓰여있는 경우도 있음)  
이용 요금 - 기본 안내 (매우 상이함)
7. 상세 내용 조회(2): 2022-05-22  
찾기 버튼 활성, 비활성화 오류로 인해 이벤트 click -> change로 변경  
[예상 이용 요금 계산 위해]  
다음 우편번호 검색 서비스 활용 => 도착지, 출발지 찾기 기능 추가  
지오코딩 API 활용 => 주소를 위도, 경도로 변경하기(API연동까지 완료)  
응답 status 0, CORS 오류 => 일단 크롬 확장자 프로그램 설치로 해결함  
카카오내비 API 활용 => 최단 경로 기반 거리 정보 활용(API연동까지 완료)  
8. 상세 내용 조회(3): 2022-05-29  
예상 요금 조회를 위한 작업  
[비동기 작업 처리 필요]  
다음 API를 통해 위도, 경도를 받아온 후 출발지와 도착지의 위도, 경도를 저장해야 했음  
⇒ 상태 등록, 상태 변환 알리기, 상태가 변환 되었을 때 원하는 함수 실행시키기  
⇒ 옵저버를 사용해야함  
⇒ observer.js 추가함 구글링을 통해 옵저버 코드를 가져와 사용하였다.  
[예상결제 금액 버튼 클릭]  
출발지 위도, 경도  
도착지 위도, 경도  
⇒ 카카오내비 API에 보내서 최적 경로 받아오기 성공  


