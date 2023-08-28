import React from 'react';
import { Box } from '@mui/system';

import { MainContainer } from './MainContainer';
import { ButtonPokemonAPI } from './ButtonPokemonAPI';
import { CardContainer } from './CardContainer';
import { ChipsContainer } from './ChipsContainer';
import { TerminDefinitionContainer } from './TerminDefinitionContainer';
import { ButtonChipName } from './ButtonChipName';
import PokemonCard from './PokemonCard';

function App() {
  return (
    <main>
      <MainContainer>
        <Box sx={{ width: '100%' }}>
          <ButtonPokemonAPI variant="outlined" href="https://pokeapi.co/" target="_blank">
            Покемоны API
          </ButtonPokemonAPI>
        </Box>

        {/* CardContainer */}
        <CardContainer>
          {/* ChipsContainer */}
          <ChipsContainer>
            <ButtonChipName text={'bulbasaur'} />
          </ChipsContainer>

          {/*TerminDefinition  */}
          <TerminDefinitionContainer>
            <PokemonCard
              headerText={'Bulbasaur'}
              srcImg={"https://images.pexels.com/photos/2224956/pexels-photo-2224956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
              altImg={'Your Image'}
              numberEpisodes={'78'}
              numberId={'1'}
              numberHeight={'9'}
              numberAttack={'100'}
            />
          </TerminDefinitionContainer>

        </CardContainer>
      </MainContainer>
    </main>
  );
}

export default App;
