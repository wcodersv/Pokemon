import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/system';
import { MainContainer } from '../component/MainContainer';
import { ButtonPokemonAPI } from '../component/ButtonPokemonAPI';
import { CardContainer } from '../component/CardContainer';
import { ChipsContainer } from '../component/ChipsArea/ChipsContainer';
import { TerminDefinitionContainer } from '../component/CardArea/TerminDefinitionContainer';
import { ButtonChipName } from '../component/ChipsArea/ButtonChipName';
import PokemonCard from '../component/CardArea/PokemonCard';


function App() {
  const [data, setData] = useState([]); // Состояние для списка покемонов
  const [pokemonInformation, setPokemonInformation] = useState([]); // Состояние для информации о выбранном покемоне

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
        setData(response.data.results);

        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        // Запрос для первого покемона и обновление pokemonInformation
        if (response.data.results.length > 0) {
          const firstPokemonResponse = await axios(response.data.results[0].url);
          const firstPokemonInfo = {
            episodes: firstPokemonResponse.data.moves.length,
            name: firstPokemonResponse.data.name,
            id: firstPokemonResponse.data.id,
            height: firstPokemonResponse.data.height,
            attack: firstPokemonResponse.data.stats[1].base_stat,
            imageURL: firstPokemonResponse.data.sprites.front_shiny,
          };

          setPokemonInformation([firstPokemonInfo]);
        }

      } catch (error) {
        console.log("Произошла ошибка", error);
      }
    };

    axiosData();
  }, []);


  // Обработчик клика на кнопку с именем покемона
  const handleInfoToggle = async (url) => {
    try {
      setPokemonInformation([]); // Очищаем информацию о покемоне перед загрузкой новой карточки

      const response = await axios(url);
      const newPokemonInfo = {
        episodes: response.data.moves.length,
        name: response.data.name,
        id: response.data.id,
        height: response.data.height,
        attack: response.data.stats[1].base_stat,
        imageURL: response.data.sprites.front_shiny,
      };
      setPokemonInformation([newPokemonInfo]);
    } catch (error) {
      console.log("Произошла ошибка", error);
    }
  };

  return (
    <main>
      <MainContainer>
        <Box sx={{ width: '100%' }}>
          <ButtonPokemonAPI variant="outlined">
            Покемоны API
          </ButtonPokemonAPI>
        </Box>

        {/* CardContainer */}
        <CardContainer>
          {/* ChipsContainer */}
          <ChipsContainer >
            {/* Отображаем список кнопок с именами покемонов */}
            {
              data.map((name, index) => (
                <ButtonChipName
                  text={name.name}
                  key={`${name.name}-${index}`}
                  url={name.url}
                  handleInfoToggle={handleInfoToggle}
                />
              ))
            }

          </ChipsContainer>

          {/*TerminDefinition  */}
          <TerminDefinitionContainer>
            {/* Отображаем информацию о выбранном покемоне */}
            {
              pokemonInformation.map((card, index) => (
                <PokemonCard
                  key={`${index}-${card.id}-${card.name}`}
                  headerText={card.name}
                  srcImg={card.imageURL}
                  altImg={card.name}
                  numberEpisodes={card.episodes || 0}
                  numberId={card.id}
                  numberHeight={card.height}
                  numberAttack={card.attack}
                />
              ))
            }

          </TerminDefinitionContainer>

        </CardContainer>
      </MainContainer>
    </main>
  );
}

export default App;
