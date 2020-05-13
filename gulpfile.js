"use strict";

const gulp = require("gulp");
const scss = require("./gulptask/scss");
const clean = require("./gulptask/clean");

const { series } = gulp;

exports.default = series(scss, clean);
