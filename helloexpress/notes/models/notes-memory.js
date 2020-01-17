/*
 * An in-memory database for storing Note objects
 */

const Note = require('./Note');

var notes = [];

exports.update = exports.create = async function (key, title, body) {
    notes[key] = new Note(key, title, body);
    return notes[key];
}

exports.read = async function(key) {
    if (notes[key]) return notes[key];
    throw new Error(`Not Found: Note ${key} `);
}

exports.destroy = async function(key) {
    if (notes[key]) {
        delete notes[key];
    } else {
        throw new Error('Delete: Note ${key} does not exist');
    }
}

exports.keylist = async function() {
    return Object.keys(notes);
}

exports.count = async function() {
    return notes.length;
}

exports.close = async function() {
    // not empty for backend db
}
