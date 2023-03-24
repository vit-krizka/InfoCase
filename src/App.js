import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import LinksPanel from './components/linksPanel';

function App() {
  return (
    <div className="App">
      <div class="col-lg-8 mx-auto p-4 py-md-5">
        {/* header */}
        <Header />

        <main>
          <h1>Jak na zákon č. 106/1999 Sb.?</h1>
          <p class="fs-5">Tento AI pomocník vám pomůže s vyřízením žádosti podle zákona č. 106/1999 Sb., o
            svobodném přístupu k informacím.</p>
          <p class="fs-5">Zadajte znění žádosti a sdělte, zda chcete žádosti vyhovět a požadované
            informace žadateli sdělit, popř. zda chcete žádost odmítnout a informace neposkytnout. Toto klíčové
            rozhodnutí za vás bohužel umělá inteligence nemůže udělat.
          </p>

          <ul class="icon-list ps-0">
            <li class="d-flex align-items-start mb-1"><a href="#">Jak rozhodnout, zda informaci poskytnout, či
              nikoli?</a></li>
          </ul>

          <div class="input-group mb-3">
            <div class="input-group-text left-pannel">znění žádosti</div>
            <textarea class="form-control" aria-label="With textarea" id="zadost" rows="6"></textarea>

          </div>

          <div class="mb-5">
            <button class="btn btn-primary btn-lg px-4" id="anonymizaceButton"
              title="Poskytujeme zejména informace o nakládání s veřejnými prostředky a činnosti orgánu veřejné moci.">Poskytnout
              informaci
            </button>
            <button class="btn btn-secondary btn-lg px-4" id="odmitnutiButton"
              title="Neposkytujeme zejména osobní údaje, obchodní tajemství a informace chráněné autorským právem.">Odmítnout
              poskytnutí
              informace</button>
          </div>

          <hr class="col-3 col-md-2 mb-5" />

          <LinksPanel />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
