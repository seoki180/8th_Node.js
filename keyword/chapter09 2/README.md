* OAuth 2.0
  OAuth (Open Authorization)은 **사용자 비밀번호를 공개하지 않고도 특정 서비스나 애플리케이션에 대한 접근 권한을 위임할 수 있는 표준화된 인증 프레임워크** 이다
  OAuth의 작동방식은 다음과 같다.

  1. 사용자 인증 : 사용자가 자신의 계정(네이버,구글)로 서비스에 로그인 한다
  2. 접근 권한 요청 : 서비스는 계정에 대한 접근권한을 요청한다.
  3. 권한 부여 : 사용자는 접근 권한을 부여한다.
  4. 접근 토큰 발급 : 권한이 부여 되면 서비스는 해당 계정에 대한 토큰을 받는다
  5. 정보 접근 : 서비스는 토큰을 사용해 계정에 대해 접근이 가능해진다.

  ![image.png](attachment:b2328186-ca81-46e4-a848-33a23a2c0b40:image.png)
  구글 OAuth에서 토큰의 크기는  다음과 같다.

  <aside>
  💡
  토큰 크기는 다음과 같은 한도 내에서 달라질 수 있습니다.
  * 승인 코드: 256바이트
  * 액세스 토큰: 2,048바이트
  * 갱신 토큰: 512바이트
    </aside>

  토큰은 두가지로 나뉘며 access token과 refresh token이 있다.

  * Access Token: 클라이언트가 서버 자원에 접근할 때 사용하는  **짧은 생명주기를 가진 토큰** .
  * Refresh Token: access token이 만료되었을 때  **새로운 access token을 발급받기 위해 사용하는 장기 유효 토큰** .

  토큰을 사용하는 이유는 보안 및 여러가지 이유가 있다.

  1. 비밀번호를 외부에 노출시키지 않기 위해
  2. 정해진 자원만 제한적으로 접근 하도록 설정 하기 위해
  3. access, refresh 토큰을 분리시켜 탈취되더라도 피해를 최소화 하기 위해
  4. 인가만 OAuth에서 담당하고, 인증은 Google, Naver같은 인증서버에서 수행하도록 하기 위해
  5. Bearer Token을 통해 요청을 간편하게 하기 위해

  하지만 보안을 위해 여러가지를 추가적으로 고려해야한다.

  * Access Token 탈취 시 누구나 자원 접근 가능 → 반드시 HTTPS 사용해야 함
  * CSRF 방지 위해 state 매개변수 사용
  * Refresh Token은 유출되면 장기 피해 가능 → 안전한 저장 필요
* HTTP Cookie

  <aside>
  💡
  HTTP 쿠키(웹 쿠키, 브라우저 쿠키)는 서버가 사용자의 웹 브라우저에 전송하는 작은 데이터 조각입니다.
  브라우저는 그 데이터 조각들을 저장해 놓았다가, 동일한 서버에 재 요청 시 저장된 데이터를 함께 전송합니다. 쿠키는 두 요청이 동일한 브라우저에서 들어왔는지 아닌지를 판단할 때 주로 사용합니다. 이를 이용하면 사용자의 로그인 상태를 유지할 수 있습니다. 상태가 없는([stateless](https://developer.mozilla.org/ko/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless)) **HTTP 프로토콜에서 상태 정보를 기억시켜주기 때문입니다.**
  </aside>
  쉽게 말해서 HTTP는 stateless한 프로토콜이기 때문에 cookie를 사용해서 현재 사용자의 상태를 파악할 수 있도록 하는것이다.
  Cookie는 브라우저 내부에 저장되는 Key-Value 형식의 문자열이며, 서버가 발급해서 브라우저에서 관리하도록 한다
  쿠키는 크게 3가지 목적을 위해 사용된다.
  * 세션 관리
    서버에 저장할 로그인, 장바구니, 스코어 등등 정보를 관리한다.
  * 개인화
    사용자 정보를 파악해, 선호도, 테마등을 세팅 할 수 있게 한다
  * 트래킹
    사용자의 행동을 기록, 분석한다

  사이트나 서비스를 관리할때 로그인 정보를 관리할 수 있는 두가지 방법이 있는데 쿠키와 세션방식으로 관리 할 수 있다.

  | **항목** | **쿠키 (Cookie)**                    | **세션 (Session)**          |
  | -------------- | ------------------------------------------ | --------------------------------- |
  | 저장 위치      | 클라이언트(브라우저)                       | 서버                              |
  | 보안성         | 노출 위험 있음 (유출되면 타인도 사용 가능) | 상대적으로 안전 (서버에 보관)     |
  | 유지 방식      | 클라이언트가 자동 전송                     | 서버가 세션 ID를 쿠키 통해 추적   |
  | 용량 제한      | 약 4KB                                     | 서버 자원만큼 가능 (메모리 or DB) |
  | 만료 설정      | 직접 설정 (만료 날짜, Max-Age)             | 서버 설정에 따라 자동 만료 가능   |
  | 사용 예        | 자동 로그인, 다크모드 설정                 | 로그인 상태 유지, 장바구니 등     |

  즉 로그인 할때 쿠키와 세션을 생성하고, 세션으로 로그인 상태를 유지하며, 다시 재접속 할때 쿠키를 바탕으로 자동으로 로그인 되도록 구현하는것이다.
