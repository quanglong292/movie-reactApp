import { GET_MOVIE_LIST, GET_MOVIE_SUCCESS, GET_MOVIE_FAILED, GET_MOVIE_DETAIL_SUCCESS, GET_MOVIE_DETAIL_FAILED, USER_LIST_FAILED, USER_LIST_SUCCESS} from "../constant/movie.const";
import axios from "axios";
import { startLoading, stopLoading } from "../actions/common.action";
import { timers } from "jquery";

// call API
export const getMovieList = () => {
  // return {
  //     type: GET_MOVIE_LIST,
  //     payload: movieList,
  // }
  //

  // redux-thunk: call api = action
  return (dispatch) => {
    // call api
    dispatch(startLoading());
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        // console.log(res);
        // gửi lên store
        dispatch(getMovieListSuccess(res.data))
      })
      .catch((err) => {
        dispatch(stopLoading());
        // console.log(err);
        dispatch(getMovieListFailed(err))
      });
  };
};



const getMovieListSuccess = (movieList) => {
  return {
    type: GET_MOVIE_SUCCESS,
    payload: movieList,
  };
}

const getMovieListFailed = (err) => {
  return {
    type: GET_MOVIE_FAILED,
    payload: err,
  };
}



// GET DETAIL MOVIE
const getMovieDetailSuccess = (movieDetail) => {
  return {
    type: GET_MOVIE_DETAIL_SUCCESS,
    payload: movieDetail,
  }
}

const getMovieDetailFailed = (err) => {
  return {
    type: GET_MOVIE_DETAIL_FAILED,
    payload: err,
  }
}

export const getMovieDetail = (movieCode) => {
  return (dispatch) => {
    // call api
    dispatch(startLoading());
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(getMovieDetailSuccess(res.data))
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getMovieDetailFailed(err))
      });
  };
};

const getUserListSuccess = (userList) => {
  return {
    type: USER_LIST_SUCCESS,
    payload: userList,
  }
}

const getUserListFailed = (err) => {
  return {
    type: USER_LIST_FAILED,
    payload: err,
  }
}
// Call API USER lIST
export const getUserList = () => {
  return (dispatch) => {
    dispatch(stopLoading());
    axios({
      type: "GET",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
      data: null,
    }).then((res) => {
      dispatch(stopLoading());
      dispatch(getUserListSuccess(res.data))
    }).catch((err) => {
      dispatch(stopLoading());
      dispatch(getUserListFailed(err))
    })
  }
}
