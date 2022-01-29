import React, { Component } from 'react';
import vegeta from '../images/vegeta.png'
import countHits from './CountHits';

class Vegeta extends Component {

    
    render() {

        const { name, addOneHit, hocState, life } = this.props;

        let lifeRange = 'highLife';
        if(life > 60) {
            lifeRange = 'highLife';
        } else if(life > 30) {
            lifeRange = 'middleLife';
        } else if (life > 0) {
            lifeRange = 'lowLife';
        }

        const lifeValue = life > 0
            ? (<td><span className={ lifeRange }>{ life } %</span></td>)
            : (<td><span className='badge bg-danger'>{ name } est mort</span></td>)
        ;

        const button = life > 0
            ? (<button onClick={ addOneHit } className='btn btn-success m-3'>{ name } Frappe</button>)
            : (<button className='btn btn-danger m-3 disabled'>Mort</button>)
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
                                <td>{ hocState.hits }</td>
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
