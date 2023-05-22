import './Services.css'

function Services() {
    return (
        <div>
                <main id="main">
      <div className="container">
        <section id="headline">
          <h3>
            Veja os nossos serviços, todos feito com maestria e qualidade.
          </h3>
        </section>
        <section id="services">
          <div className="card">
            <div className="headline-card">
              <h2>Criação de servidor</h2>
              <p>
                Desenvolvemos um servidor para você a partir do zero, de acordo
                com as suas necessidades e preferências.
              </p>
            </div>
            <div className="illustration">
              <span className="material-symbols-outlined"> smb_share </span>
            </div>
          </div>
          <div className="card">
            <div className="headline-card">
              <h2>Design de banners</h2>
              <p>
                Desenvolvemos banners profissionais, de extrema qualidade para o
                seu servidor, com o tema e especificações que desejar.
              </p>
            </div>
            <div className="illustration">
              <span className="material-symbols-outlined"> draw </span>
            </div>
          </div>
          <div className="card">
            <div className="headline-card">
              <h2>Bots personalizados</h2>
              <p>
                Desenvolvemos bots totalmente personalizados, programados
                utilizando a linguagem JavaScript, com funcionalidades sob
                medida para o seu servidor ter funções únicas.
              </p>
            </div>
            <div className="illustration">
              <span className="material-symbols-outlined"> smart_toy </span>
            </div>
          </div>
          <div className="card">
            <div className="headline-card">
              <h2>Criação de sites</h2>
              <p>
                Desenvolvemos sites para você que sonha em ter o seu próprio
                meio de gerenciar o seu negócio, marca ou empresa.
              </p>
            </div>
            <div className="illustration">
              <span className="material-symbols-outlined"> dashboard </span>
            </div>
          </div>
        </section>
        <section id="scrollToDown">arrow down</section>
        <section id="packages"></section>
      </div>
    </main>
        </div>
    )
}

export default Services;