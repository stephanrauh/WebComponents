class OuterComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                /* Add styles here */
                div {
                    border: 1px solid black;
                    padding: 10px;
                }
            </style>
            <div>
                <p>This is the outer component.</p>
                <inner-component></inner-component>
            </div>
        `;
    }
}

customElements.define('outer-component', OuterComponent);
