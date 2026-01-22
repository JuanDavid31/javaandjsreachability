// Simple test file to demonstrate reachability analysis
// Uses vulnerable packages with known vulnerable methods

const swig = require('swig');

function renderTemplate(templateString, data) {
    // Vulnerable: swig 1.4.2 has template injection vulnerabilities
    // The compile() method is a known vulnerable signature
    const template = swig.compile(templateString);
    return template(data);
}

module.exports = { renderTemplate };
