<https://github.com/seoki180/UMC_Node_Practice>

| **항목** | **gzip** | **brotli** |
| --- | --- | --- |
| **소개** | 오래된 압축 표준, 거의 모든 브라우저와 서버에서 지원 | Google이 개발한 신형 압축 방식, 더 높은 압축률 |
| **압축률** | 중간 (텍스트 기반 60~70%) | 높음 (텍스트 기반 70~90%) |
| **속도** | 빠름 | 느리지만 압축 효율이 좋음 |
| **지원 범위** | 거의 모든 HTTP 클라이언트 | 최신 브라우저만 완벽 지원 (IE 제외) |
| **권장 사용** | 일반 텍스트, HTML, JSON 등 | 대용량 정적 파일 (CSS, JS 등) |
| **Content-Encoding** | gzip | br |

```jsx
import compression from "compression";

..
app.use(compression({ threshold: 512 }));

..

app.get("/test", (req, res) => {
  const largeData = "📦".repeat(2000); // 2000바이트 이상 텍스트
  res.send(largeData);
});
```

/test endpoint를 사용해 2000바이트 이상의  텍스트를 보내는 상황을 구현했다.

```jsx
curl -H "Accept-Encoding: gzip" http://localhost:3001/test --output out.gz
gunzip out.gz
cat out
```

터미널에서 다음과 같이 테스트 curl을 전송하고, 받은 response를 out.gz에 압축파일로 저장하도록 한다. 압축이 안된다면 content-encoding이 없다는 뜻일테니, 압축이 성공한다면 응답본문이 압축되어 전송되었다는 뜻이다.
