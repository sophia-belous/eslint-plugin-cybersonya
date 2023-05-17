/**
 * @fileoverview  ESLint plugin for deprecating the use of `id` attribute in AngularJS HTML files.
 * @author Sofiya Marchanka
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



