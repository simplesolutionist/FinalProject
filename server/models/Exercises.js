const mysql = require('./mysql');
const Types = { Pushups: 'Pushups', Running:'Running', Squats: 'Squats', Bicycle_Manoeuvre: 'Bicycle Manoeuvre', Pullups:'Pullups', Swiss_Ball_Hamstring_Curl: 'Swiss Ball Hamstring Curl', Tricep_Dips: 'Tricep Dips', Lunges: 'Lunges', Side_Bridges: 'Side Bridges', Single_Leg_Squats: 'Single-Leg Squats', Lateral_Shoulder_Raises: 'Lateral Shoulder Raises' };

async function getAll(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM Exercise`);
}

async function get(id){
    const rows = await mysql.query(`SELECT * FROM Exercise WHERE id=?`, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such user" };
    return rows[0];
}

async function exists(pushups){
    const rows = await mysql.query(`SELECT * FROM Exercise WHERE Value=?`, [pushups]);
    console.log ( { rows })
    return rows.length;
}
async function exists(running){
    const rows = await mysql.query(`SELECT * FROM Exercise WHERE Value=?`, [running]);
    console.log ( { rows })
    return rows.length;
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM Types WHERE Type_id = 3`);
}

async function add(exercise_type, exercise_duration, exercise_day, exercise_intensity, exercise_location, exercise_heartrate, Owner_id){
    const sql = `INSERT INTO Exercise (created_at, exercise_type, exercise_duration, exercise_day, exercise_location, exercise_heartrate, Owner_id) VALUES ? ;`;
    const params = [[new Date(), Type, exercise_type, exercise_duration, exercise_day, exercise_intensity, exercise_location, exercise_heartrate, Owner_id]];
    return await mysql.query(sql, [params]);
}

async function update(id, exercise_type, exercise_duration, exercise_day, exercise_intensity, exercise_location, exercise_heartrate, Owner_id){
    const sql = `UPDATE Exercise SET ? WHERE id = ?;`;
    const params = { exercise_type, exercise_duration, exercise_day, exercise_intensity, exercise_location, exercise_heartrate, Owner_id };
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = `DELETE FROM Exercise WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Value FROM Exercise WHERE Value LIKE ?; `, [`%${q}%`]);

module.exports = { getAll, get, exists, add, update, remove, getTypes, search, Types}


