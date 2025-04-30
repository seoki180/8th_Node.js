import { reviewDTO } from "../dto/review.dto.js"
import { review_service } from "../service/review.controller.js"

export class review_controller{
    static async addReview(req,res){
        const date = new Date()
        const store_index = req.params.store_index
        const data = new reviewDTO(req.body)
        data.store_index = store_index
        data.created_date = date

        const result =  await review_service.addReview(data)
        res.status(result.code)
        return res.json(result)
    }
}