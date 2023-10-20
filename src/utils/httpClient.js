const API = "https://api.themoviedb.org/3";

export const get = (path) => {
    return fetch(API + path,{
        headers:{
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjE3MzNlYzU3YTdkNTlkMTQyNzI5NDFjYWE2MjUxZiIsInN1YiI6IjYyYWZiMGRlMWJmMjY2MDViNThlZDM0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IN3MAnQDWGLraqo8pizcWZBwaxgYX5_RRI6UqqNgQ9I",
          "Content-Type": "application/json;charset=utf-8"
        }
      }).then(resp => resp.json())
}