#!/bin/bash

files=$(find . -name "*.html")

for file in $files; do
    tidy -i -w 200000 $file > $file.tidy
    mv $file.tidy $file
done