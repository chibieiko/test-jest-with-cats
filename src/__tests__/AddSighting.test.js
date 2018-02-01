import React from 'react';
import moment from 'moment';
import renderer from 'react-test-renderer';
import {createMemoryHistory} from 'history';

import AddSighting from '../addSighting/AddSighting';
import sightings from '../res/sightings';

let component;

beforeAll(() => {
    component = renderer.create(<AddSighting/>);
});

test('AddSightings should render correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
});

test('onValueChange should add name value pair to state', () => {
    const instance = component.getInstance();
    expect(instance.state).toMatchSnapshot('initial state');

    instance.onValueChange({target: {name: 'comment', value: 'What a cute cat'}});
    expect(instance.state).toMatchSnapshot('updated state');
});

test('onDateChange should add selected datetime to state', () => {
    const instance = component.getInstance();
    expect(instance.state).toMatchSnapshot('initial state');
    const datetime = moment('2018-01-31T09:15:00');
    instance.onDateChange(datetime);
    expect(instance.state).toMatchSnapshot('updated state');
});

test('createSighting should return a sighting', () => {
    const instance = component.getInstance();
    const state = {breed: 'Abyssinian', comment: 'Cool cat'};
    const id = instance.createId();

    const sighting = instance.createSighting(state);
    expect(sighting).toEqual({id: id, breed: 'Abyssinian', comment: 'Cool cat'});
});

test('createId should return an id that does not exist in sightings list', () => {
    const instance = component.getInstance();

    const id = instance.createId();
    let idArray = sightings.map(sighting => {
        return sighting.id
    });

    expect(idArray).not.toContain(id);
});

test('addSighting should add a sighting to sightings list', () => {
    const history = createMemoryHistory('/add-sighting');
    const component = renderer.create(<AddSighting history={history}/>);
    const instance = component.getInstance();
    const id = instance.createId();
    instance.addSighting();


    expect(sightings[sightings.length - 1]).toEqual({...instance.state, id: id});
});

test('sortAlphabetically should sort array alphabetically', () => {
    const instance = component.getInstance();
    let array = ['c', 'a', 'b'];
    array.sort(instance.sortAlphabetically);
    expect(['a', 'b', 'c']).toEqual(array);
});

