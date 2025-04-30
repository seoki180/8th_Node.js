export class reviewDTO{
    constructor(data = {}){
        const {contents = "", star = 0, store_index = 0, user_index = 0,created_date = ''}= data
        this.contents = contents || ""
        this.star = star || 0
        this.store_index = store_index || 0
        this.user_index = user_index || 0
        this.created_date =created_date || ""
    }

}