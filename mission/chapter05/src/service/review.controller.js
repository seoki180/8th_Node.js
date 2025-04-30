import { responsebase } from "../../response.js";
import { review_model } from "../model/review.model.js";

export class review_service{
    static async addReview(data){
        const checkStore = await review_model.selectStoreIndex(data.store_index)
        
        if(checkStore.length==0){
            return responsebase({
                success : false,
                message : "그런 가게는 없습니다",
                code : 400
            })
        }
        const res = await review_model.insertReview(data)
        return responsebase({
            success : true,
            message : "리뷰 작성 성공",
            code : 200
        },res)

    }
}