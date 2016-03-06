package main

import (
  "net/http"
  "log"
)

func main() {
  mux := http.NewServeMux()
  staticHandler := http.FileServer(http.Dir("../build"))

  mux.Handle("/", staticHandler)
  mux.Handle("/build/", http.StripPrefix("/build/", staticHandler))
  mux.Handle("/api/", http.StripPrefix("/api/", ApiHandler{}))

  log.Println("Listening...")
  http.ListenAndServe(":8000", mux)
}