require("dotenv").config();

const db = require("../services/db");

exports.getBook = async (req, res) => {

    const id = req.params.id;

    db.pool.connect((err, client) => {

        const selectQuery = `SELECT * FROM books WHERE id = $1`;
        const values = [id];

        // callback
        client.query(selectQuery, values).then((result) => {
            result = result.rows[0];

            // send success response
            res.status(200).json({
                status: "success",
                data: {
                    title: result.title,
                    description: result.description,
                    cover_image: result.cover_image,
                    price: result.price,
                    discount_rate: result.discount_rate,
                },
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