/**
 * @fileoverview Disallow the use of `id` attribute in AngularJS HTML files
 * @author Sofiya Marchanka
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Disallow the use of `id` attribute in AngularJS HTML files",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null,
    schema: [], // Add a schema if the rule has options
    messages: {
      deprecatedId: 'Using `id` attribute is deprecated in AngularJS',
    },
  },

  create(context) {
    return {
      Attribute: function (node) {
        if (node.name.name === 'id') {
          context.report({
            node,
            messageId: 'deprecatedId',
          });
        }
      },
    };
  },
};
