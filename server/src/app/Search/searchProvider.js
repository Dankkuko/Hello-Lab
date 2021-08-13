const { pool } = require("../../../config/db");
const searchService = require("./searchService");
const searchDao = require("./searchDao");


/*
//통합검색 api
exports.getAllList = async function(token) {

}
*/

//게시판 검색 api
exports.getDebateList = async function(searchArray, filter) {
    const connection = await pool.getConnection(async (conn) => conn);

    //쿼리에서 where문 다르게하기 위한 조건변수 선언
    let condition = '';

    //filter별로 condition 다르게 하기 위해 case문 사용
    switch(filter) {
        case '1' : for(let i=0; i<searchArray.length; i++) {
            if (i==searchArray.length-1) {
                condition += `l.title LIKE '%`+searchArray[i]+`%'`
            }
            else {
                condition += `l.title LIKE '%` + searchArray[i] + `%' AND `
            }} break;
        case '2' : for(let i=0; i<searchArray.length; i++) {
            if (i==searchArray.length-1) {
                condition += `l.content LIKE '%`+searchArray[i]+`%'`
            }
            else {
                condition += `l.content LIKE '%` + searchArray[i] + `%' AND `
            }} break;

        //TODO : 앞이나 뒤에 공백일 경우(ex:'최종무 ')에 if문으로 들어감 -> else문으로 들어가도록 만들어주기
        case '3' :
            if (searchArray.length > 1)
                {
                    console.log(searchArray);return []}
            else
                {
                    condition += `p.name LIKE '%`+searchArray[0]+`%' OR s.name LIKE '%`+searchArray[0]+`%'`
                } break;
    }

    console.log(condition);
    const debateInfoResult = await searchDao.debateInfo(connection, condition);
    connection.release();
    return debateInfoResult;
}
