import React, { Component } from 'react';
import {
    Button,
    Container,
    Grid,
    Header,
    Image
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import { fetchAllCharacters, fetchCharacterById } from '../actions/charactersActions';

class CharactersList extends Component {
    constructor(props) {
        super(props);
        this.renderCharacters = this.renderCharacters.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllCharacters();
    }

    handleOnClick(id) {
        this.props.fetchCharacterById(id);
    }

    renderCharacters() {
        const { items } = this.props.characters;
        if (!items) return null;

        return items.map(item => (
            <Container key={item.id}>
                <Header as='h2'>{item.name}</Header>
                <Grid columns={2} stackable padded>
                    <Grid.Column width={4}>
                        <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} size='small' />
                    </Grid.Column>
                    <Grid.Column style={{ position: 'relative' }}>
                        <Grid.Row>
                            {item.comics.available ? <Button size='mini' color='yellow'>comics</Button> : <Button size='mini' disabled>comics</Button>}
                            {item.series.available ? <Button size='mini' color='orange'>series</Button> : <Button size='mini' disabled>series</Button>}
                            {item.events.available ? <Button size='mini' color='green'>events</Button> : <Button size='mini' disabled>events</Button>}
                            {item.stories.available ? <Button size='mini' color='teal'>stories</Button> : <Button size='mini' disabled>stories</Button>}
                        </Grid.Row>
                        <Grid.Row>
                            <Button onClick={() => this.handleOnClick(item.id)} size='huge' color='red' style={{ position: 'absolute', bottom: '15px' }}>VIEW CHARACTER INFO</Button>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </Container>
        ));
    }

    render() {
        return (
            <Container>
                {this.renderCharacters()}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    characters: state.characters.characters,
    character: state.characters.character
});

export default connect(mapStateToProps, { fetchAllCharacters, fetchCharacterById })(CharactersList);