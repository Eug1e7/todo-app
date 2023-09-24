@echo off
start cmd /k "node index.js"
start cmd /k "kubectl port-forward svc/postgres 6160:6160"
