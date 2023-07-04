require("dotenv").config();

const db = require("../services/db");

exports.deleteBook = async (req, res) => {

    const id = req.params.id;

    db.pool.connect((err, client) => {

        const deleteQuery = `DELETE FROM books WHERE id = $1`;
        const values = [id];

        // callback
        client.query(deleteQuery, values).then((result) => {

            // send success response
            res.status(200).json({
                status: "success",
                message: "Book deleted successfully",
            });
        }).catch((error) => {
            // send error response
            res.status(500).json({
                status: "error",
                error: error,
            });
        }
        );
    });
}