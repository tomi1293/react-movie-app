const API = "https://api.themoviedb.org/3";

export const get = (path) => {
    return fetch(API + path,{
        headers:{
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWFiYWRhMTg3NmYyYTM0NjEwMDUyNTJiMDI4NDc1MyIsInN1YiI6IjYyYWZiMGRlMWJmMjY2MDViNThlZDM0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cxE-0wKWa4_IBSPs14wqtZ5EPsvTpOtesoYua1uNDI",
          "Content-Type": "application/json;charset=utf-8"
        }
      }).then(resp => resp.json())
}