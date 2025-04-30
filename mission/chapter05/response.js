export const responsebase = ({ success,message,code},data) =>{
    return {
        success : success,
        message : message,
        code : code,
        data : data
    }
}