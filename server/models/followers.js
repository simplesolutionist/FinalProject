const mysql = require('./mysql');

async function getAll(){
    console.log("Called Get All")
    const sql = `SELECT P.*, FirstName, LastName FROM Comments P Join Users U ON P.User_id = U.id`
    return await mysql.query(sql);
}

async function getForExercise(exercise_id){
    const sql = `SELECT P.*, FirstName, LastName FROM Comments P Join Users U ON P.User_id = U.id WHERE P.Exercise_id = ?`
    return await mysql.query(sql, [exercise_id]);
}

async function get(id){
    const sql = `SELECT 
        *
    FROM User_followers WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such follower" };
    return rows[0];
}

async function add(Text, User_id, follower_id){
    const sql = `INSERT INTO Comments (created_at, User_id, follower_id) VALUES ? ;`;
    const params = [[new Date(), Text, User_id, follower_id]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(id, Text, User_id, follower_id){
    const sql = `UPDATE Comments SET ? WHERE id = ?;`;
    const params = { Text, User_id, follower_id };
    const res = await mysql.query(sql, [params, id]);
    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM Comments WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Text, Exercise_id FROM Comments WHERE Text LIKE ? ; `, [`%${q}%`]);

module.exports = { getAll, get, add, update, remove, search, getForExercise }