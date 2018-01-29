import React, {Component} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import DateTime from 'react-datetime';

import '../../node_modules/react-datetime/css/react-datetime.css';
import breeds from '../res/catBreeds';


class AddSighting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            breed: null,
            date: null,
            sighting: null
        }
    }

    sortAlphabetically = (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    };

    onDateChange = date => {
        console.log(date);
    };

    onBreedSelected = breed => {

    };

    addSighting = () => {

    };

    render() {
        return (
            <div className="container">
                <h1>Add a sighting</h1>
                <Form>
                    <FormGroup>
                        <Label for="breed">Cat breed</Label>
                        <Input type="select" name="breed" id="breed">
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
                        <Input type="textarea" name="comment" id="comment" />
                    </FormGroup>
                    <Button color="primary">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default AddSighting;