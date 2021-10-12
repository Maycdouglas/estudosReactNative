import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import FilhoDireto from './FilhoDireto';

export default props => {
    return (
        <FilhoDireto a={props.a}></FilhoDireto>
    )
}