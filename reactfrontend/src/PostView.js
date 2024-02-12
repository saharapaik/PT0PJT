import React, {Component} from 'react'

// const dumy_prop = {
//     title: '테스트용 타이틀',
//     content: '테스트용 글 입니다',
// }

export default class PostView extends Component{
    render(){
        const {id, title, content} = this.props
        return(
            <div>
                {id}
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        )
    }
}