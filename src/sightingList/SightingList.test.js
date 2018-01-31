import React from 'react';
import renderer from 'react-test-renderer';

import SightingList from './SightingList';


it('should return item index by id', () => {
    const component = renderer.create(<SightingList/>);
    const instance = component.getInstance();

    const array = [
        {id: 1, breed: "Russian Blue"}, {id: 2, breed: "Maine Coon"}
    ];

    const index = instance.getItemIndexById(array, 1);
    expect(index).toBe(0);
});