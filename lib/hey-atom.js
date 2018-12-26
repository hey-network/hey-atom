'use babel';

var shell = require('shell');
var rp = require("request-promise");

import {
  CompositeDisposable
} from 'atom';

//  ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗
// ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝
// ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗
// ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║
// ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝
//  ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝
var CONFIG = {
    app_path: 'https://ide.hey.network/p',
    api_path: 'https://api2.get-hey.com/v1/ide',
    txt: {
        input_box_placeholder: 'Ask your question here',
        input_box_prompt: 'Ask your question here, try to be as specific as possible. You can skip this step and ask your question on the Hey site afterwards if, for instance, you want to add emojis 😆',
        hey_callback_message: 'Your question is here: '
    }
};

export default {

  subscriptions: null,

  //  █████╗  ██████╗████████╗██╗██╗   ██╗ █████╗ ████████╗███████╗
  // ██╔══██╗██╔════╝╚══██╔══╝██║██║   ██║██╔══██╗╚══██╔══╝██╔════╝
  // ███████║██║        ██║   ██║██║   ██║███████║   ██║   █████╗
  // ██╔══██║██║        ██║   ██║╚██╗ ██╔╝██╔══██║   ██║   ██╔══╝
  // ██║  ██║╚██████╗   ██║   ██║ ╚████╔╝ ██║  ██║   ██║   ███████╗
  // ╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝  ╚═══╝  ╚═╝  ╚═╝   ╚═╝   ╚══════╝
  // this method is called when your extension is activated
  // your extension is activated the very first time the command is executed
  activate(state) {
    this.subscriptions = new CompositeDisposable();
    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'hey-atom:sayHey': () => this.sayHey()
    }));
  },

  // ██████╗ ███████╗ █████╗  ██████╗████████╗██╗██╗   ██╗ █████╗ ████████╗███████╗
  // ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝██║██║   ██║██╔══██╗╚══██╔══╝██╔════╝
  // ██║  ██║█████╗  ███████║██║        ██║   ██║██║   ██║███████║   ██║   █████╗
  // ██║  ██║██╔══╝  ██╔══██║██║        ██║   ██║╚██╗ ██╔╝██╔══██║   ██║   ██╔══╝
  // ██████╔╝███████╗██║  ██║╚██████╗   ██║   ██║ ╚████╔╝ ██║  ██║   ██║   ███████╗
  // ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝  ╚═══╝  ╚═╝  ╚═╝   ╚═╝   ╚══════╝
  // this method is called when your extension is deactivated
  deactivate() {
    this.subscriptions.dispose();
  },

  sayHey() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let _code = editor.getSelectedText();
      shell.openExternal('https://ide.hey.network/post?c='+_code);
    }
  }

};
