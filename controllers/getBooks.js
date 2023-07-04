require("dotenv").config();

const db = require("../services/db");

exports.getBooks = async (req, res) => {

    db.pool.connect((err, client) => {
            
            const selectQuery = `SELECT * FROM books`;
    
            // callback
            client.query(selectQuery).then((result) => {
                result = result.rows;
    
                // send success response
                res.status(200).json({
                    status: "success",
                    data: result,
                });
            }).catch((error) => {
                // send error response
                res.status(500).json({
                    status: "error",
                    error: error,
                });
            }
            );
        }
    );

}