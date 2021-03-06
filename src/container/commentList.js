import React from 'react';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Comment from '../components/comment';
import {loadComments, saveComment, deleteComment} from '../actions';

class CommentListContainer extends React.Component{
    constructor(props, context){
		super(props, context);
    }
    
    componentDidMount(){
        this.props.actions.loadComments()
    }

    render(){
        const {comments, actions} = this.props;
        return <div className="comments">
        {
            comments.length > 0 ? 
            comments.map((comment, i) => (
                <Comment comment={comment} actions={actions} key={comment.id}/>
            )) : null
        }			
        </div>
    }
}

const mapStateToProps = (state) => {
    console.log(state.comments)
return {
    comments: state.comments.comments
}
}

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators({ loadComments, saveComment, deleteComment}, dispatch)
    }
)

CommentListContainer.propTypes = {
   
	actions: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer);