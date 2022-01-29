import React, { Component } from 'react';
import vegeta from '../images/vegeta.png'

class Vegeta extends Component {
  
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
                    <img className='vegeta' src={vegeta} alt="vegeta image" />
                    <button onClick={this.addOne} className='btn btn-success m-3'>Frapper</button>
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

export default Vegeta;