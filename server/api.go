package main

import (
  "net/http"
  "io"
)

type ApiHandler struct{}

func (ApiHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
  io.WriteString(w, "Path:" + r.URL.Path)
}