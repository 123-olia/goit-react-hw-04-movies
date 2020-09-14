import React, { Component } from "react";
import movieAPI from "../services/movieAPI";
import Loader from "./Loader";

export default class Cast extends Component {
  state = {
    actors: [],
    error: null,
    loading: false,
  };

  componentDidMount() {
    const movieId = this.props.match.params.movId;
    // console.log(movieId);

    this.setState({ loading: true });

    movieAPI
      .fetchActors(movieId)
      // .then(console.log)
      .then((actors) => this.setState({ actors: actors.cast }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { actors, loading } = this.state;

    return (
      <>
        {actors && (
          <>
            {loading && <Loader />}
            <h2>Actors</h2>

            <ul>
              {actors.map((actor) => (
                <li key={actor.id}>
                  <img
                    src={`${movieAPI.BASE_IMG_URL}${actor.profile_path}`}
                    alt={actor.name}
                  />
                  <p>{actor.name}</p>
                  <p>Character: {actor.character}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}
