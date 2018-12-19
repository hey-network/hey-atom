'use babel';

export default class HeyAtomView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('hey-atom');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'Hey atom. Ask at anytime, right from your IDE.';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
