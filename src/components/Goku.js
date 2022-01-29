import React, { Component } from 'react';
import goku from '../images/goku.png';
import countHits from './CountHits';

class Goku extends Component {

    render() {

        const { name, addOneHit, hocState, life } = this.props;

        console.log(hocState);

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
                    <img className='goku' src={goku} alt="vegeta image" />
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

export default countHits(Goku, 20);
