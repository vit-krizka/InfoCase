export default function LinksPanel() {
    return (
        <div class="row g-5">
            <div class="col-md-6">
                <h2>Kontakt</h2>
                <p>Neváhejte nás s čímkoli kontaktovat. Na aplikaci stále pracujeme.</p>
                <ul class="icon-list ps-0">
                    <li class="text-muted d-flex align-items-start mb-1">Mgr. Vít Křížka, advokátní kancelář
                    </li>
                    <li class="text-muted d-flex align-items-start mb-1">Soudní 467/1, 602 00 BRNO
                    </li>
                    <li class="d-flex align-items-start mb-1"><a
                        href="mailto:vit.krizka@gmail.com">vit.krizka@gmail.com</a></li>
                    <li class="d-flex align-items-start mb-1"><a href="tel:+420776112624">+420 776 112 624</a>
                    </li>
                </ul>
            </div>

            <div class="col-md-6">
                <h2>Nápověda</h2>
                <p>Zde naleznete články o zákonu č. 106/1999 Sb., a o tom, jak používat tuto aplikaci..</p>
                <ul class="icon-list ps-0">
                    <li class="d-flex align-items-start mb-1"><a href="#">InfoBridge - Rychlý start </a></li>
                    <li class="d-flex align-items-start mb-1"><a href="#">Nejsou data posílána na cizí server?</a>
                    </li>
                    <li class="d-flex align-items-start mb-1"><a href="#">Náležitosti rozhodnutí o odmítnutí</a>
                    </li>
                    <li class="d-flex align-items-start mb-1"><a href="#">Proč používat InfoBridge?</a></li>
                </ul>
            </div>
        </div>
    );
}

