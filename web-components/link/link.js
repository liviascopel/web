class Link extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const a = document.createElement('a');
        a.href = this.getAttribute('link');

        const verifyLink = async () => {
            if (isValidUrl(this.getAttribute('link')) === true) {
                a.textContent = this.getAttribute('texto-link');
            } 
            else {
                a.textContent = 'Link inválido';
                a.href = '#';
                a.alt = 'Link inválido';
            }
        }

        verifyLink();

        const linkStyle = document.createElement('link');
        linkStyle.setAttribute('rel', 'stylesheet');
        linkStyle.setAttribute('href', 'link.css');

        shadow.appendChild(linkStyle);
        shadow.appendChild(a);
    }
}

customElements.define('elemento-link', Link);

function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (error) {
      return false;
    }
  }  