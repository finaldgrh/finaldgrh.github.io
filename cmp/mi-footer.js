class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        David Gabriel Rodriguez Hernandez.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
