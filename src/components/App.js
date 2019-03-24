import React, { Component } from 'react';
import {
    Container,
    Grid,
    Header,
    Rail,
    Ref,
    Sticky
} from 'semantic-ui-react';
import CharactersList from './CharactersList';
import SelectedCharacter from './SelectedCharacter';

class App extends Component {
    constructor(props) {
        super(props);
        this.contextRef = React.createRef();
    }

    render() {
        return (
            <Container style={{ marginTop: '30px' }}>
                <Header as='h1'>Marvel Character Catalog</Header>
                <Grid columns={2} stackable padded>
                    <Grid.Column width={10}>
                        <CharactersList />
                    </Grid.Column>
                    <Grid.Column width={1}>
                        <Ref innerRef={this.contextRef}>
                            <Rail position="right">
                                <Sticky context={this.contextRef} offset={100}>
                                    <SelectedCharacter />
                                </Sticky>
                            </Rail>
                        </Ref>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default App;