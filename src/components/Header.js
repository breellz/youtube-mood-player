import React from 'react';

const header = {
    title: 'Youtube Mood-Player',
    subtitle: 'fetch videos based on your mood'
}
const Header = () => (
    <div className="center header">
    <h1>{header.title}</h1>
    <h3>{header.subtitle}</h3>
    </div>
)

export { Header as default }