import logo from "../assets/icon.svg"

export default function Header() {
    return (
        <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
            <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
                <img class="me-2" src={logo} width="38"
                    title="AI pomocník pro zákon č. 106/1999 Sb., o svobodném přístupu k informacím" />
                <span class="fs-4">InfoBridge</span>
            </a>
        </header>
    );
}

