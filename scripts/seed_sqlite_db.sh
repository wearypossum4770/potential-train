#!/usr/bin/env bash
cd $(dirname "$0")

sqlite3 ../sqlite3.db < initial_seed.sql

# sqlite3 -csv ../sqlite3.db ".import some_csv_file.csv"
