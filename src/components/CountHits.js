import React, { Component } from 'react';

const countHits = (WrappedComponent, power) => {

    console.log();

    class CountHits extends Component {
        
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

/*         test = () => {
            let lifeRange = 'highLife';
            if(life > 60) {
                lifeRange = 'highLife';
            } else if(life > 30) {
                lifeRange = 'middleLife';
            } else if (life > 0) {
                lifeRange = 'lowLife';
            }
        } */

        componentDidUpdate(prevProps, prevState) {
            if(this.state !== prevState) {
                const ComponentName = WrappedComponent.name;
                this.props.reduceLife(ComponentName, power);
            }
        }

        render() {
            return(
                <WrappedComponent
                    addOneHit={this.addOne}
                    hocState={this.state}
                    {...this.props} 
                />
            )
        }
    }

    return CountHits
}


export default countHits;