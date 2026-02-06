// Simple test file to demonstrate reachability analysis
// Uses vulnerable swig package

const swig = require('swig');

function renderTemplate(templateString, data) {
    // Vulnerable: swig 1.4.2 has template injection vulnerabilities
    // The compile() method is the known vulnerable signature
    const template = swig.compile(templateString);
    return template(data);
}

module.exports = { renderTemplate };
