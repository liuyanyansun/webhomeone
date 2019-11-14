import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Todoing extends Component {
    render() {
        var {todo} = this.props;
        return (
            <div>
                {
                    todo.map((item,idx)=>
                        <p key={idx}>
                            {item}---<button onClick={()=>this.props.del(idx)}>删除</button>
                        </p>)
                }
            </div>
        )
    }
}
