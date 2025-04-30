import express from "express"
import { review_controller } from "./src/controller/review.controller.js";

const app = express()


app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석


// app.post("/store/:location_index")
app.post("/reviews/:store_index",review_controller.addReview)
// app.post("/mission/:location_index")
// app.post("/mission/:location_index/start")

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 3000);