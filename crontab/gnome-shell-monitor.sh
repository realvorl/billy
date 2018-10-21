#!/bin/bash

# veo@localhost:/ $ crontab -l
# * * * * * /usr/share/scripts/gnome-shell-monitor.sh gnome-shell

calc()
{
    bc -l <<< "$@"
}

export pid2kill=$(pidof $1)

export VAR=$(echo "$1 uses " $(ps -p $pid2kill -o pmem | \
     grep -e "[0-9]") "% of " $(cat /proc/meminfo | grep MemTotal))

export percent=$(cut -d " " -f 4 <<< $VAR)
#echo ">% " $percent "<"
export total=$(cut -d " " -f 9 <<< $VAR)
#echo ">t " $total "<"
export calculation=$(calc $percent/100*$total/1024)
#echo ">c " $calculation "<"
export kbytes=$(cut -d "." -f 1 <<< $calculation)
#echo ">b " $kbytes "<"


if [ "$kbytes" -gt "750" ]
then
  echo " $(date) !! KO $1 is hogging memory -> $kbytes MB -> will kill process..." > ~/gnome-shell-behave.log
  kill $pid2kill
else
  echo " $(date) OK $1 is under 750 MB -> $kbytes MB <-" > ~/gnome-shell-behave.log
fi
