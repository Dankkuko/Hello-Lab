const searchProvider = require("./searchProvider");
const searchService = require("./searchService");

/*
//통합검색 api
exports.getAll = async function(req, res) {
    const token = req.query.token;
    const result = await searchProvider.getAllList(token);
}
*/

/*
API : 토론(게시판) 검색 API
query string : search, filter(1 : 제목 검색, 2 : 내용 검색, 3 : 작성자 검색)
 */
exports.getDebate = async function(req, res) {
    const search = req.query.search;  //검색 내용
    const searchArray = search.split(" ");  //검색 내용 띄어쓰기로 분리
    const filter = req.query.filter;  //1 : 제목 검색, 2 : 내용 검색, 3 : 작성자 검색

    //search 값 입력하지 않은 경우 validation 처리
    if(!search) return res.json ({
        success : '실패',
        message : '검색어를 입력해주세요'
    })

    //filter 값 입력하지 않은 경우 validation 처리
    if(!filter) return res.json({
        success : '실패',
        message : '검색 분야를 선택해주세요'
    })
    const getDebateResult = await searchProvider.getDebateList(searchArray, filter);
    return res.send(getDebateResult);
}

/*
API : 연구실 검색 API
query string : search
 */
/*exports.getLab = async function(req,res) {
    const search = req.query.search;    //검색 내용
    const searchArray = search.split(" ");

    //search 값 입력하지 않은 경우 validation 처리
    if(!search) return res.json ({
        success : '실패',
        message : '검색어를 입력해주세요'
    })
}*/
