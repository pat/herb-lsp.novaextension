const HerbLanguageServer = require('./herb-language-server');
const Formatter = require('./formatter');

var langserver = null;

exports.activate = function() {
  langserver = new HerbLanguageServer();
  formatter = new Formatter(langserver);

  nova.workspace.onDidAddTextEditor(formatter.onDidAddTextEditor.bind(formatter));
  nova.commands.register("HerbLSP.format", formatter.formatDocument.bind(formatter));
}

exports.deactivate = function() {
  // Clean up state before the extension is deactivated
  if (langserver) {
    langserver.deactivate();
    langserver = null;
  }
}

nova.commands.register("restartHerbLSP", (_editor) => {
  if (langserver) {
    langserver.start();
  }
});
