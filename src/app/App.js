import React from 'react';
import { Box } from '@mui/system';
import { CustomMainContainer } from '../component/CustomMainContainer/CustomMainContainer';
import { CustomButtonPokemonAPI } from '../ui/ButtonPokemonAPI/CustomButtonPokemonAPI';
import { CardContainer } from '../component/CardContainer/CardContainer';
import { ChipsContainer } from '../component/ChipsContainer/ChipsContainer';
import { TerminDefinitionArea } from '../component/TerminDefinitionArea/TerminDefinitionArea';
import { ButtonChipName } from '../ui/ButtonChipName/ButtonChipName';
import { CustomH1 } from '../ui/CustomH1/CustomH1';
import CustomImage from '../ui/CustomImage/CustomImage';
import PokemonInfo from '../ui/PokemonInfo/PokemonInfo';

function App() {










  return (
    <CustomMainContainer component="main">
      <Box sx={{ width: '100%', }}>
        <CustomButtonPokemonAPI variant="outlined" href="https://pokeapi.co/" target="_blank">
          Покемоны API
        </CustomButtonPokemonAPI>
      </Box>

      {/* CardContainer */}
      <CardContainer>
        {/* ChipsContainer */}
        <ChipsContainer>
          <ButtonChipName>bulbasaur</ButtonChipName>

        </ChipsContainer>

        {/*TerminDefinition  */}
        <TerminDefinitionArea> 
          <CustomH1>Bulbasaur</CustomH1>
          <CustomImage src="путь_к_изображению.jpg" alt="Изображение"/>
          <PokemonInfo />
        </TerminDefinitionArea>
      </CardContainer>

    </CustomMainContainer>
  );
}

export default App;
