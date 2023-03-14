#!/bin/bash

##
## 统计文件的行数

read -a arr
while [ ${#arr[@]} -eq 2 ]
    do
        sum=$((${arr[0]} + ${arr[1]}))
        echo $sum
        read -a arr
    done
exit 0