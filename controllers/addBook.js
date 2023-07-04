require("dotenv").config();

const db = require("../services/db");

exports.addBook = async (req, res) => {
    
    const data = {
        title: req.body.title,
        description: req.body.description,
        cover_image: req.body.cover_image,
        price: req.body.price,
        discount_rate: req.body.discount_rate,
    };

    db.pool.connect((err, client) => {

        const insertQuery = `INSERT INTO books(title, description, cover_image, price, discount_rate) VALUES($1, $2, $3, $4, $5) RETURNING *`;
        const values = [data.title, data.description, data.cover_image, data.price, data.discount_rate];

        // callback
        client.query(insertQuery, values).then((result) => {
            result = result.rows[0];

            // send success response
            res.status(201).json({
                status: "success",
                data: {
                    message: "Book successfully added",
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
