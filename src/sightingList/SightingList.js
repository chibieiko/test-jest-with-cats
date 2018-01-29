import React, {Component} from 'react';
import {Row} from 'reactstrap';

import sightings from "../res/sightings";
import SightingCard from '../sightingCard/SightingCard';

class SightingList extends Component {

    render() {
        return (
            <React.Fragment>
                <Row>
                    {
                        sightings.map(sighting => {
                            return <SightingCard sighting={sighting} key={sighting.id}/>
                        })
                    }
                </Row>
            </React.Fragment>
        )
    }
}

export default SightingList;