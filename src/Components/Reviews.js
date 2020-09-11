import React, { Component } from "react";
import movieAPI from "../services/movieAPI";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const movieId = this.props.match.params.movId;
    // console.log(movieId);
    movieAPI
      .fetchReviews(movieId)
      .then((reviews) => this.setState({ reviews: reviews.results }));
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        <h2>Reviews</h2>
        {reviews > 0 ? (
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <h5>{review.author}</h5>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>There are no reviews...</p>
        )}
      </>
    );
  }
}
