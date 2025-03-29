const express = require("express");
const router = express.Router();
const signinModel = require("../models/signinModel")

router.route("signin").get()