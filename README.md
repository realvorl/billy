# billy
> billy is where I keep stuff that I find useful shell scripts mainly.

# crontab scripts
> ## `crontab/gnome-shell-monitor.sh`
    
    1. runs every minute (the way I have it etup in my crontab file)
    2. it takes a process name, as a parameter
    3. it checks that process, its memory usage
    4. based on the amount used (750 MB) kills the process, no questions asked

One can replace the `kill` command with a system notification or other actions. Use your imagination :-)

I used it to monitor the `gnome-shell` process that has a known memory leak and I don't know how to fix that, but I know how to kill a process when it acts out of line.
