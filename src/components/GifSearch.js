import React, { Component } from 'react'

export default class GifSearch extends Component {
    // text input is a controlled component

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input
                    type='text'
                    name='testing'
                    placeholder='Enter Search Term'>
                    </input>
                </form>
            </div>
        )
    }
}
