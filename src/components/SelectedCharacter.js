import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Header,
    Image
} from 'semantic-ui-react';

import { connect } from 'react-redux';

class SelectedCharacter extends Component {
    constructor(props) {
        super(props);
        this.renderInfo = this.renderInfo.bind(this);
    }

    render() {
        const { current } = this.props.character;
        if (!current) return null;

        return (
            <Container>
                {current.thumbnail ? this.renderInfo(current) : null}
            </Container>
        );
    }

    renderInfo(current) {
        return (
            <div>
                <Header as='h2'>{current.name}</Header>
                <Image src={`${current.thumbnail.path}.${current.thumbnail.extension}`} size='huge' style={{ marginBottom: '30px' }} />
                {current.description ?
                    <div>
                        <Header as='h3'>BIOGRAPHY</Header>
                        <Header as='h4' style={{ marginBottom: '10px' }}>{current.description}</Header>
                    </div>
                    : <Header as='h3' style={{ marginBottom: '10px' }}>Damn! No bio!</Header>
                }
                <Header as='h3'>LINKS</Header>
                {current.urls ?
                    current.urls.map((item, index) =>
                        <div key={index}>
                            <a target="_blank" rel="noopener noreferrer" href={item.url}>{item.type}</a>
                        </div>
                    )
                    : <Header as='h3'>Damn! No links!</Header>
                }
            </div>
        );
    }
}

SelectedCharacter.propTypes = {
    character: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    character: state.characters.character
});

export default connect(mapStateToProps)(SelectedCharacter);