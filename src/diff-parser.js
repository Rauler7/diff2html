(function(ctx, undefined) {
  var utils = require('./utils.js').Utils;
    INSERTS: 'd2h-ins',
    DELETES: 'd2h-del',
    CONTEXT: 'd2h-cntx',
    INFO: 'd2h-info'
  DiffParser.prototype.generateDiffJson = function(diffInput) {
    var files = [];
    var currentFile = null;
    var currentBlock = null;
    var oldLine = null;
    var newLine = null;
    var saveBlock = function() {
      /* Add previous block(if exists) before start a new file */
    var saveFile = function() {
       * Add previous file(if exists) before start a new one
    var startFile = function() {
      /* Create file structure */
    var startBlock = function(line) {
      /* Create block metadata */
    var createLine = function(line) {
      /* Fill the line data */
      if (utils.startsWith(line, '+') || utils.startsWith(line, ' +')) {
      } else if (utils.startsWith(line, '-') || utils.startsWith(line, ' -')) {
    var diffLines = diffInput.split('\n');
    diffLines.forEach(function(line) {
      if (!line || utils.startsWith(line, '*')) {
      if (utils.startsWith(line, 'diff')) {
      } else if (currentFile && utils.startsWith(line, '@@')) {
    var nameSplit = filename.split('.');
    if (nameSplit.length > 1) {
      return nameSplit[nameSplit.length - 1];
    } else {
      return language;
    }
  module.exports['DiffParser'] = new DiffParser();