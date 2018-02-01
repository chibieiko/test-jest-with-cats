import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import DateTime from 'react-datetime';
import moment from 'moment';

import '../../node_modules/react-datetime/css/react-datetime.css';
import breeds from '../res/catBreeds';
import sightings from "../res/sightings";


class AddSighting extends Component {
    constructor(props) {
        super(props);

        const sortedBreeds = breeds.sort(this.sortAlphabetically);

        this.state = {
            breed: sortedBreeds[0],
            datetime: moment('2018-01-31T09:15:00'),
            comment: ""
        }
    }

    createId = () => {
        let idArray = sightings.map(sighting => {
            return sighting.id;
        });

        return idArray[idArray.length - 1] + 1;
    };

    sortAlphabetically = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    };

    onValueChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    onDateChange = moment => {
        this.setState({
            datetime: moment
        })
    };

    addSighting = () => {
        sightings.push(this.createSighting(this.state));
        this.props.history.push('/');
    };

    createSighting = state => {
        const id = this.createId();
        return Object.assign({}, state, {id: id});
    };

    render() {
        return (
            <div className="container">
                <h1>Add a sighting</h1>
                <Form>
                    <FormGroup>
                        <Label for="breed">Cat breed</Label>
                        <Input type="select" name="breed" id="breed" onChange={this.onValueChange}>
                            {
                                breeds.sort(this.sortAlphabetically).map((breed, index) => {
                                    return <option key={index}>{breed}</option>
                                })
                            }
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="datetime">Date and time</Label>
                        <DateTime id="datetime" onChange={this.onDateChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="comment">Comment</Label>
                        <Input type="textarea" name="comment" id="comment" onChange={this.onValueChange}/>
                    </FormGroup>
                    <Button color="primary" onClick={this.addSighting}>Submit</Button>
                </Form>
            </div>
        )
    }

}

export default AddSighting;