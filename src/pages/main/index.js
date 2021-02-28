import React, { Component } from "react";
import axios from "axios";
import { getMovieList } from "../../store/actions/movie.action";
import { connect } from "react-redux";

class Home extends Component {
  renderMovieList = () => {
    return this.props.movieList.map((movie, index) => {
      return (
        <div className="col-4">
          <div className="card text-left">
            <img className="card-img-top" src={movie.hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Body</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    if (this.props.loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
    }
    return (
      <div>
        <h2>Danh sách phim</h2>
        <div className="container">
          <div className="row">{this.renderMovieList()}</div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(getMovieList());
    // chuyển qua action, khôgn cần chuyển về component mắc công
    //   axios({
    //     method: "GET",
    //     url:
    //       "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //     data: null,
    //   })
    //     .then((res) => {
    //       // console.log(res);
    //       this.props.dispatch(getMovieList(res.data));
    //     })
    //     .catch((err) => {
    //       // console.log(err);
    //     });
    // }
  }
}
const mapStateToProps = (state) => {
  return {
    movieList: state.movie.movieList,
    movieDetail: state.movie.movieDetail,
    loading: state.common.loading,
  };
};

export default connect(mapStateToProps)(Home);
