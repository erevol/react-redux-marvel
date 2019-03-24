import CharacterList from '../CharactersList';
import {charactersMock} from '../__mocks__/characters';
import {characterMock} from '../__mocks__/character';

it("shallows correctly", () => {
    const wrapper = shallow(
        <CharacterList characters={charactersMock} character={characterMock} fetchAllCharacters={() => {}} fetchCharacterById={() => {}} />
    );

    expect(wrapper).toMatchSnapshot();
});