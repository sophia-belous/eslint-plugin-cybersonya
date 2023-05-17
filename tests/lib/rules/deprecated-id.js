/**
 * @fileoverview Disallow the use of `id` attribute in AngularJS HTML files
 * @author Sofiya Marchanka
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/deprecated-id"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("deprecated-id", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "<div id=\"example-id\"></div>\"",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
