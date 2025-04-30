import { review_model } from "./src/model/review.model.js"

async function testInsert() {
    const data ={
        "content":"음 너무 맛있고 다음에도 또 올거 같아요",
        "star":5,
        "store_index":1,
        "user_index":1
    }

    try{
        const res = await review_model.insertReview(data)
        console.log(res)
    }
    catch(err){console.log(err)}
}

// testInsert()

async function testSelectStoreindex() {
    const data ={
        "content":"음 너무 맛있고 다음에도 또 올거 같아요",
        "star":5,
        "store_index":1,
        "user_index":1
    }

    const store_index = 1

    try{
        const res = await review_model.selectStoreIndex(store_index)
        console.log(res)
    }
    catch(err){console.log(err)}
}

testSelectStoreindex()