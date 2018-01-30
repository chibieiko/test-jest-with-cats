import React from 'react';
import AddSighting from './AddSighting';
import sightings from '../res/sightings';
import moment from 'moment';
import renderer from 'react-test-renderer';


const component = renderer.create(<AddSighting/>);

it('should render correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
});

it('should add name value pair to state', () => {
    const instance = component.getInstance();
    expect(instance.state).toMatchSnapshot('initial state');

    instance.onValueChange({target: {name: 'comment', value: 'What a cute cat'}});
    expect(instance.state).toMatchSnapshot('updated state');
});

it('should add an id to state that does not exist in sightings list', () => {
    const instance = component.getInstance();
    expect(instance.state).toMatchSnapshot('initial state');

    instance.createId();
    let idArray = sightings.map(sighting => {
        return sighting.id
    });

    expect(idArray).not.toContain(instance.state.id)
});

it('should add a sighting to sightings list', () => {
    const history = jest.fn();
    const component = renderer.create(<AddSighting history={history}/>);
    const instance = component.getInstance();
    instance.addSighting();

    expect(sightings).toContain(instance.state);
});


it('should sort array alphabetically', () => {
    const instance = component.getInstance();
    let array = ['c', 'a', 'b'];
    array.sort(instance.sortAlphabetically);
    expect(['a', 'b', 'c']).toEqual(array);
});

it('should add selected datetime to state', () => {
    const instance = component.getInstance();
    expect(instance.state).toMatchSnapshot('initial state');
    const datetime = moment();
    instance.onDateChange(datetime);
    expect(instance.state).toMatchSnapshot('updated state');
});