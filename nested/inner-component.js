class InnerComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                /* Add styles here */
                p {
                    color: blue;
                }
            </style>
            <p>This is the inner component.</p>
        `;
    }
}

customElements.define('inner-component', InnerComponent);
