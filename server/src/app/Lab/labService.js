const { pool } = require("../../../config/db");

const labDao = require("./labDao");

exports.createLab = async function (createLabEntity) {
  try {
    const con = await pool.getConnection(async (conn) => conn);
    const result = await labDao.insertLabInfo(con, createLabEntity);
    con.release();
    return result ? true : false;
  } catch (e) {
    console.log(`DB connetion Error \n ${e}`);
    con.release();
    return false;
  }
};

exports.updateLab = async (updateInfo) => {
  try {
    const con = await pool.getConnection(async (conn) => conn);
    const result = await labDao.updateLabInfo(con, updateInfo);
    con.release();

    return result;
  } catch (e) {
    console.log(`DB connection Error \n ${e}`);
    return false;
  }
};

exports.deleteLab = async (labId) => {
  try {
    const con = await pool.getConnection(async (conn) => conn);
    const result = await labDao.deleteLab(con, labId);
    con.release();

    return result;
  } catch (e) {
    console.log(`DB connection Error \n ${e}`);
  }
};

exports.joinLab = async (joinLabInfo) => {
  const con = await pool.getConnection(async (conn) => conn);
  const query = labDao.joinLabRequestQuery;
  try {
    await con.beginTransaction();
    const row = await con.query(query, joinLabInfo);
    await con.commit();
    return row[0];
  } catch (e) {
    await con.rollback();
    console.log(`DB error \n${e}`);
  } finally {
    con.release();
  }
};

exports.updateJoinLab = async (requestId, allow) => {
  const con = await pool.getConnection(async (conn) => conn);
  const insertQuery = labDao.insertStudentLabQeury;
  const getQeury = labDao.getNotieOfRequest;
  const updateQuery = labDao.updateJoinLabQuery;
  try {
    await con.beginTransaction();
    if (allow) {
      const info = await con.query(getQeury, requestId);
      const insertInfo = [info[0][0].userId, info[0][0].labId];
      await con.query(insertQuery, insertInfo);
    }
    const row = await con.query(updateQuery, requestId);
    await con.commit();
    return row[0];
  } catch (e) {
    await con.rollback();
    console.log(`DB Error \n ${e}`);
  } finally {
    con.release();
  }
};
