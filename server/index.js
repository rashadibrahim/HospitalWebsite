const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();
const bcrypt = require("bcrypt");
const PatientModel = require('./models/Patient');
const AdminModel = require('./models/Admin');
const ResponseModel = require('./models/Response');

const app = express();
app.use(cors());
app.use(express.json()); // Adding A middleware so the App can understand(parse) json data comin from the requests

const port = process.env.PORT || 3005;

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Connected To The Database");
  app.listen(port, () => {
    console.log(`Node API is Running on Port: ${port}`);
  });
}).catch((error) => {
  console.log(error);
});



app.get('/api/patients', async (req, res) => {
  try {
    res.status(200).send(await PatientModel.find({}));
  } catch (err) {
    console.log(err)
  }
})



app.post('/api/add', (req, res) => {
  try {
    bcrypt.hash(req.body['password'], 10, async function (err, hash) {
      if (err) {
        return res.status(400).json(({ message: err.message }));
      }
      req.body['password'] = hash;
      try {
        const patient = await PatientModel.create(req.body);
        res.status(200).json(patient);
      } catch (err) {
        return res.status(500).json(({ message: err.message }))
      }
    });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json(({ message: error.message }))
  }
})



app.post('/api/login', async (req, res) => {
  try {
    const patient = await PatientModel.find({ username: req.body.username });
    if (patient.length === 0) {
      return res.status(404).json({ message: "Username is Incorrect" });
    } else {
      bcrypt.compare(req.body.password, patient[0]['password'], function (err, result) {
        if (result) {
          res.status(200).json(patient);
        } else {
          return res.status(400).json({ message: "Password is Incorrect" });
        }
      });

    }

  } catch (error) {
    res.status(500).json(({ message: error.message }))
  }
})



app.post('/api/admin', async (req, res) => {
  try {
    const admin = await AdminModel.find({ username: req.body.username });
    if (admin.length === 0) {
      return res.status(404).json({ message: "Username is Incorrect" });
    } else {
      bcrypt.compare(req.body.password, admin[0]['password'], function (err, result) {
        if (result) {
          res.status(200).json(admin);
        } else {
          return res.status(400).json({ message: "Password is Incorrect" });
        }
      });

    }

  } catch (error) {
    res.status(500).json(({ message: error.message }))
  }
})



app.post('/api/addAdmin', async (req, res) => {
  try {
    bcrypt.hash(req.body['password'], 10, async function (err, hash) {
      if (err) {
        return res.status(400).json(({ message: err.message }));
      }
      req.body['password'] = hash;
      try {
        const admin = await AdminModel.create(req.body);
        res.status(200).json(admin);
      } catch (err) {
        return res.status(500).json(({ message: err.message }))
      }
    });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json(({ message: error.message }))
  }
})



app.put('/api/updateAdmin', async (req, res) => {
  try {
    const admin = await AdminModel.find({ username: req.body.username });
    bcrypt.compare(req.body.oldpassword, admin[0]['password'], function (err, result) {
      if (result) {
        bcrypt.compare(req.body.newpassword, admin[0]['password'], function (err, match) {
          if (match) {
            return res.status(400).json({ message: "Cannot Use The Old Password As The New Password" });
          } else {
            try {
              bcrypt.hash(req.body.newpassword, 10, async function (err, hash) {
                if (err) {
                  return res.status(400).json(({ message: err.message }));
                }
                req.body.newpassword = hash;
                try {
                  const updatedAdmin = await AdminModel.findByIdAndUpdate(admin, {
                    username: req.body.username,
                    password: req.body.newpassword,
                    email: req.body.email,
                    addedBy: req.body.addedBy
                  });
                  res.status(200).json(updatedAdmin);
                } catch (err) {
                  return res.status(500).json(({ message: err.message }))
                }
              });
            } catch (error) {
              console.log(error.message)
              return res.status(500).json(({ message: error.message }))
            }
          }
        })
      } else {
        return res.status(400).json({ message: "Old Password is Incorrect" });
      }
    });
  } catch (error) {
    res.status(500).json(({ message: error.message }))
  }
})



app.post('/api/getPatient', async (req, res) => {
  try {
    const patient = await PatientModel.findById(req.body.id);
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json(({ message: error.message }))
  }
})



app.put('/api/updateResponse', async (req, res) => {
  try {
    await PatientModel.findByIdAndUpdate(req.body.id, { doctorResponse: req.body.doctorResponse });
    res.status(200).json("Response Updated");
  } catch (error) {
    res.status(500).json(({ message: error.message }))
  }
})



app.delete('/api/deletePatient', async (req, res) => {
  try {
    const patient = await PatientModel.findByIdAndRemove(req.body.id);
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json(({ message: error.message }))
  }
})



app.post('/api/response', async (req, res) => {
  try {
    await ResponseModel.create(req.body);
    res.status(200).json("Message Stored")
  } catch (error) {
    console.log(error)
    res.status(500).json(({ message: error.message }))
  }
})