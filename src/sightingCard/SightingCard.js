import React, {Component} from 'react';
import {Button, Card, CardSubtitle, CardText, CardTitle, Col} from 'reactstrap';

import './SightingCard.css';
import sightings from '../res/sightings';

class SightingCard extends Component {
    render() {
        const sighting = this.props.sighting;
        return (
            <Col xs="12" sm="6" xl="4">
                <Card className="sighting-card">
                    <CardTitle>
                        {sighting.breed}
                    </CardTitle>
                    <CardSubtitle>
                        {sighting.datetime.format("MMM Do YYYY, HH:mm:ss")}
                    </CardSubtitle>
                    <CardText>
                        {sighting.comment}
                    </CardText>
                    <Button outline color="danger" onClick={() => this.props.removeSighting(sighting.id)}>Remove</Button>
                </Card>
            </Col>
        )
    }
}

export default SightingCard;