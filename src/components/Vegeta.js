import React, { Component } from 'react';
import vegeta from '../images/vegeta.png'
import countHits from './CountHits';

class Vegeta extends Component {

    render() {

        const { name, addOneHit, hocState, life } = this.props;

        const lifeValue = life > 0
            ? (<td><span className=''>{ life } %</span></td>)
            : (<td><span className='badge bg-danger'>{ name } est mort</span></td>)
        ;

        const button = life > 0
            ? (<button onClick={addOneHit} className='btn btn-success m-3'>{name} Frappe</button>)
            : (<button className='btn btn-danger m-3 disabled'>{name} Mort</button>)
        ;

        return (
            <div className='col'>
                <div className='d-flex flex-column align-items-center'>
                    <img className='vegeta' src={vegeta} alt="vegeta image" />
                    { button }
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th scope='col'>Coups</th>
                                <th scope='col'>Vie</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{hocState.hits}</td>
                                { lifeValue }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default countHits(Vegeta, 10);
