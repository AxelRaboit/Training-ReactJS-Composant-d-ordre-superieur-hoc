import React, { Component } from 'react';
import goku from '../images/goku.png';

class Goku extends Component {

    state = {
        hits: 0
    }

    addOne = () => {
        this.setState((prevState) => {
            return {
                hits: prevState.hits + 1
            }
        })
    }

    render() {
        return (
            <div className='col'>
                <div className='d-flex flex-column align-items-center'>
                    <img className='goku' src={goku} alt="vegeta image" />
                    <button onClick={this.addOne} className='btn btn-success m-3'>{this.props.name} Frappe</button>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th scope='col'>Coups</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.hits}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Goku;
