import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Sobre</h1>
      <p className="about-description">
        Somos uma equipe apaixonada e dedicada, trabalhando em conjunto para
        alcançar nossos objetivos. Com uma combinação única de habilidades e
        experiências, nos esforçamos para entregar resultados excepcionais e
        criar valor para nossos clientes. Estamos comprometidos em oferecer
        soluções inovadoras e alcançar a excelência em tudo o que fazemos..
      </p>

      <div className="section">
        <h2 className="section-title">História</h2>
        <p>
          Desde o nosso início, nossa equipe tem trilhado um caminho de sucesso
          e crescimento contínuo. Fundada por um grupo de entusiastas
          apaixonados, começamos com um objetivo em comum: criar soluções
          inovadoras para atender às necessidades dos nossos clientes.
          <br /> <br />
          Ao longo dos meses, enfrentamos desafios e superamos obstáculos
          juntos. Cada membro da equipe contribuiu com suas habilidades e
          experiências únicas, resultando em um ambiente colaborativo e
          dinâmico.
          <br /> <br />
          Com o passar do tempo, expandimos nossa equipe e estabelecemos
          parcerias estratégicas, permitindo-nos atender a uma base crescente de
          clientes e oferecer serviços de alta qualidade em diversas áreas.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Conquistas e Reconhecimentos</h2>
        <ul className="achievement-list">
          <li>Clientes Satisfeitos</li>
          <li>Parcerias Estratégicas</li>
          <li>Reconhecimento da Comunidade</li>
        </ul>
      </div>

      <div className="section">
        <h2 className="section-title">Visão Futura</h2>
        <p>
          Olhamos para o futuro com entusiasmo e determinação, buscando
          constantemente novas oportunidades e desafios emocionantes. Nossa
          visão é nos tornarmos líderes no mercado, reconhecidos por nossa
          excelência, inovação e impacto positivo. <br /> <br />Nosso objetivo é continuar aprimorando nossas habilidades e
          conhecimentos, mantendo-nos atualizados com as tendências e avanços
          tecnológicos. Queremos ser referência em nossa área de atuação,
          fornecendo soluções de ponta que impulsionem o sucesso e o crescimento
          dos nossos clientes. <br /> <br />Além disso, buscamos expandir nossas parcerias estratégicas e alcançar
          uma presença global. Queremos colaborar com organizações de diversos
          setores, compartilhando nosso conhecimento e expertise para
          impulsionar a transformação e a inovação.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Contato</h2>
        <p>
          Informações de contato: <Link to="discord.gg/QkpMt8Ksdy">Servidor</Link>
        </p>
      </div>
    </div>
  );
}

export default About;
