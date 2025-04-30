1. 특정 지역에 가게 추가하기 API
    - POST /store
    - 필요한 정보
    1. 가게 이름
    2. 위치 인덱스

2. **가게에 리뷰 추가하기 API**
    - 리뷰를 추가하려는 가게가 존재하는지 검증이 필요합니다.
    - POST /review/{store_index}
    - 필요한 정보
    1. 가게 인덱스
    2. 유저 인덱스
    3. 리뷰 내용
    4. 리뷰 별점
    5. 리뷰 작성 시간

3. 가게에 미션 추가하기 API
    - POST /misison/{store_index}/add

4. **가게의 미션을 도전 중인 미션에 추가(미션 도전하기) API**
    - 도전하려는 미션이 이미 도전 중이지는 않은지 검증이 필요합니다.
    - 3번 API를 구현하지 않은 경우, 4번에서는 DB에 미션 정보를 수동으로 기입한 후 진행해야 합니다.
    - POST /mission/{mission_index}/start

3주차 API 명세서
![](./images/image.png)

## contorller

![](./images/image-1.png)

## DTO

![](./images/image-2.png)

## service

![](./images/image-3.png)

## repository

![](./images/image-4.png)

## 실행

성공시
![](./images/image-5.png)

![](./images/image-6.png)

실패시
![](./images/image-7.png)
존재하지 않는 가게로 접근하면 리뷰 작성에 실패한다
