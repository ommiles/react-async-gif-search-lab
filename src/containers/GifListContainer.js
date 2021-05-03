import React, { Component } from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
    
    state = {
        gifsArr: [],
        searchTerm: 'dolphin'
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            searchTerm: e.target.testing.value
        }, () => this.helper())
    }

    helper = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=NB6OlK8OUcOClwOwlW7MDC495scShCID&rating=g&limit=3`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.data)
            this.setState({
                gifsArr: data.data
            })
        })
    }
    
    render() {
        return (
            <div>
                <GifSearch handleSubmit={this.handleSubmit}/>
                <GifList gifArr={this.state.gifsArr} />
            </div>
        )
    }

    componentDidMount() {
        this.helper()
    }
}
