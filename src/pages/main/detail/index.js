import React, { Component } from "react";
import { getMovieDetail } from "../../../store/actions/movie.action";
import { connect } from "react-redux";

class DetailMovie extends Component {
  // renderDetailMovie = () => {
  //     return this.props.movieDetail.map((item, index) => {
  //         return (
  //             <div>
  //                 <img scr={item} />
  //             </div>
  //         );
  //     })
  // }
  render() {
    if (this.props.loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      return (
        <div>
          <img src={this.props.movieDetail.hinhAnh}/>
        </div>
      );
    }
  }
  componentDidMount() {
    this.props.dispatch(getMovieDetail(4517));
  }
}
const mapStateToProps = (state) => {
  return {
    movieDetail: state.movie.movieDetail,
    loading: state.common.loading,
  };
};

export default connect(mapStateToProps)(DetailMovie);
