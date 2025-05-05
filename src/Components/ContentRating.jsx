
import React, { Component, useState } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
        handleLike: () => {
            this.setState({
                likes: this.state.likes + 1,
                //totalRatings: this.state.totalRatings + 1
            });
        },
        handleDisLike: () => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1,
                //totalRatings: this.state.totalRatings - 1
            }));
        },
        handleRatings: () => {
            this.setState((prevState) => ({
                totalRatings: prevState.likes - prevState.dislikes
            }));
        }
    };
  }
  shouldComponentUpdate() {
    this.setState (() => {
        this.state.totalRatings = this.state.likes - this.state.dislikes;
    })
    console.log("shouldComponentUpdate" + this.state.totalRatings);
    return true;
    }

  render() {
    console.log("Inside render")
    return (
     <div className='content-rating'>
        <p>
            Like or Dislike Ratings: {this.state.totalRatings}
        </p>
        <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handleLike}>
                Like {this.state.likes} {this.state.totalRatings}
            </button>
            <button className='dislike-button' onClick={this.state.handleDisLike}>
                Dislike {this.state.dislikes} {this.state.totalRatings}
            </button>

        </div>
     </div>
    );
  }
}

export default ContentRating;
