
import { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.likes + prevState.dislikes + 1
        }))
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.likes + prevState.dislikes + 1
        }))
      }
  }
}
  render() {
    return (
     <>
      <div className='content-rating'>
        <p>
        aloo
        
        </p>
      <div className='rating-buttons'></div>
      <button className='like-button' onClick={this.state.handleLike}>
          Like ({this.state.likes})
        </button>
        <br />
        <button className='dislike-button' onClick={this.state.handleDislike}>
          Dislike ({this.state.dislikes})
        </button>
            <p>Total Ratings: {this.state.totalRatings}</p>
      </div>
     </>
    );
  }
}

export default ContentRating;
