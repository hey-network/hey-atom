'use babel';

var shell = require('shell');

import HeyAtomView from './hey-atom-view';
import {
  CompositeDisposable
} from 'atom';

export default {

  heyAtomView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.heyAtomView = new HeyAtomView(state.heyAtomViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.heyAtomView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'hey-atom:sayHey': () => this.sayHey()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.heyAtomView.destroy();
  },

  serialize() {
    return {
      heyAtomViewState: this.heyAtomView.serialize()
    };
  },

  sayHey() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let _code = editor.getSelectedText();
      shell.openExternal('https://ide.hey.network/post?c='+_code);
    }
  }


};
