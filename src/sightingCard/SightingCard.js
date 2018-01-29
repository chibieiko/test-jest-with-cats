import React, {Component} from 'react';
import {Button, Card, CardSubtitle, CardText, CardTitle, Col} from 'reactstrap';

import './SightingCard.css';

class SightingCard extends Component {
    removeSighting = id => {

    };

    render() {
        const sighting = this.props.sighting;
        console.log("Sighting::", sighting);
        console.log("SightingDate", sighting.date);
        return (
            <Col md="4">
                <Card className="sighting-card">
                    <CardTitle>
                        {sighting.breed}
                    </CardTitle>
                    <CardSubtitle>
                        {sighting.date}
                    </CardSubtitle>
                    <CardText>
                        {sighting.comment}
                    </CardText>
                    <Button outline color="danger" onClick={() => this.removeSighting(sighting.id)}>Remove</Button>
                </Card>
            </Col>
        )
    }
}

export default SightingCard;