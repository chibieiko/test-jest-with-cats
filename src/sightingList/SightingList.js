import React, {Component} from 'react';
import {Row} from 'reactstrap';

import sightings from "../res/sightings";
import SightingCard from '../sightingCard/SightingCard';

class SightingList extends Component {

    removeSighting = id => {
        const index = this.getItemIndexById(sightings, id);

        if (index !== -1) {
            sightings.splice(this.getItemIndexById(sightings, id), 1);
            this.forceUpdate();
        }
    };

    getItemIndexById = (list, id) => {
        return list.map(item => {
            return item.id
        }).indexOf(id);
    };

    render() {
        return (
            <React.Fragment>
                <Row>
                    {
                        sightings.map(sighting => {
                            return <SightingCard sighting={sighting}
                                                 key={sighting.id}
                                                 removeSighting={this.removeSighting}/>
                        })
                    }
                </Row>
            </React.Fragment>
        )
    }
}

export default SightingList;