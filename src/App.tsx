import React, { useState } from "react";
import "./App.css"
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import Experiencia from './components/experiencia/experiencia'
import { Perfil } from "./types/perfil";

function App() {

  const fakeAPI: Perfil =  
    {
      nome: 'Ana Júlia G. Przsiczny',
      ocupacao: 'Estudante',
      resumo: 'Estou aprendendo tudo que posso, sonhando com código e, quando acordo, escrevendo código, como esse que você está lendo agora ;)',
      perfilProfissional: 'Conheci a área de tecnologia há muito tempo, durante o ensino médio, quando decidi fazer um curso técnico de Informática. Achei tudo muito legal, e decidi fazer faculdade nessa área. Fiz o curso de Análise e Desenvolvimento de Sistemas, mas parei depois de um ano para ir atrás de uma outra paixão, o Jornalismo. Me formei em 2019, e então decidi que era hora de tentar de novo. E aqui estou, estudando, reaprendendo o que já sabia, aprendendo muitas coisas novas e procurando experiências diversas.',
      contatos: [
        {
          id: 1,
          tipo: 'Telefone',
          contato: '19 91234-5678'
        },
        {
          id: 2,
          tipo: 'E-mail',
          contato: 'ana.przsiczny@gmail.com'
        },
        {
          id: 3,
          tipo: 'Github',
          contato: 'https://github.com/anaprzsiczny'
        }
      ],
      educacao: [
        {
          id: 1,
          instituicao: 'CEUNSP - Salto',
          curso: 'Comunicação Social - Jornalismo'
        },
        {
          id: 2,
          instituicao: 'Campinas Tech Talents',
          curso: 'Imersão em React'
        },
        {
          id: 3,
          instituicao: 'Digital House',
          curso: 'Introdução à Programação'
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'Front',
          periodo: 'Janeiro 2020',
          empresa: 'Twitter',
          local: 'Campinas',
          conteudo: 'Fiz o clone do perfil de um usuário'
        },
        {
          id: 2,
          cargo: 'Front',
          periodo: 'Janeiro 2020',
          empresa: 'Minha Empresa',
          local: 'Campinas',
          conteudo: 'Fiz o currículo que você está vendo agora (bonito, né?)'
        }
      ]
  }

  const [resposta] = useState<Perfil>(fakeAPI)
  console.log(resposta)

  return (
    <main>
      <Header respostaHeader={resposta} />

      <div className="titulo">
        Perfil <br /> Profissional
      </div>

      <div className="perfil-profissional">
        <p>
          {resposta.perfilProfissional}
        </p>
      </div>
      <Sidebar respostaSidebar={resposta} />
      <Experiencia respostaExperiencia={resposta} />
    </main>
  );
}

export default App;