import type { Meta, StoryObj } from '@storybook/react';

import  Light from './Light';


const meta: Meta<typeof Light>= {
    component: Light, // what is the component that we are writing stories for 
    title:'Light',    // title controls where stories appear in the sideBar
    tags: ['autodocs'], 
    argTypes: {
        variant:{
            control: {type: 'select'},
            options: ['green', 'yellow', 'red'],

        }
    }
}

export default meta;

type Story =StoryObj<typeof meta>;


// Export an object and optionally provide args as your props 
export const Base : Story = {}

export const Yellow : Story = {
    args:{
        variant : 'yellow'
    }
}
export const Red : Story = {
    args:{
        variant : 'red'
    }
}
export const Grouped :Story = {
    render: (args)=>(
        <div 
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap:'10px',
            padding: '10px',
            width: 'max-content',
            background:'gray',
            border: '1px solid black',


        }}
        >
            <Light variant='red' />
            <Light variant='yellow' />
            <Light variant='green' />
        </div>
    )
}