import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedade) {
  console.log(propriedade);
  return (
    <Box>
      <img src={`https://github.com/${propriedade.githubUser}.png`} style={{borderRadius: '8px'}}></img>
    </Box>
  )
}

export default function Home() {
  const randomUser = 'luizbrazjr';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ]

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={randomUser}/>
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem-Vindos
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationArea" style={{gridArea: 'profileRelationArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Devs da Comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>            
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
