const Chrono = require("../models/chrono");

exports.createChrono = (req, res, next) => {
    const chronoObject = req.body.chronos;
    delete chronoObject._id;
    const chrono = new Chrono({
        chronos: chronoObject,
        userId: req.token.userId,
    });
    chrono
        .save()
        .then(() => {
            res.status(201).json({
                message: "Database initialized successfully!!",
            });
        })
        .catch((error) => {
            res.status(400).json({ error: error });
        });
};

exports.getAllChronos = (req, res, next) => {
    Chrono.find({ userId: req.token.userId })
        .then((chronos) => {
            if (!chronos) {
                return res
                    .status(400)
                    .json({ message: "No chronos were found" });
            }
            res.status(200).json(chronos);
        })
        .catch((error) => res.status(400).json({ error: error }));
};

exports.updateChrono = (req, res, next) => {
    Chrono.findOne({ userId: req.token.userId })
        .then((chrono) => {
            if (!chrono) {
              return  res.status(400).json({ message: "No chronos were found" });
            }
            const chronoObject = req.body.chronos;
            chrono.updateOne({
              chronos: chronoObject,
              userId: req.token.userId,
            }).then(() => {
                    res.status(201).json({
                        message: "Chrono updated successfully!",
                    });
                })
                .catch((error) => {
                    res.status(400).json({
                        error: error,
                    });
                });
        })
        .catch((error) => {
            res.status(500).json({
                error: error,
            });
        });
};
exports.deleteChrono = (req, res, next) => {
    Chrono.findOne({ userId: req.token.userId })
        .then((chrono) => {
            if (!chrono) {
                return res.status(400).json({ message: "chrono not found" });
            }
                chrono
                    .deleteOne({ userId: req.token.userId })
                    .then(() =>
                        res.status(200).json({ message: "chrono suprrimé !" })
                    )
                    .catch((error) => res.status(400).json({ error }));
            
        })
        .catch((error) => res.status(500).json({ error }));
};
