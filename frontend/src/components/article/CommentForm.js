import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants';

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
}