### Installation

Find a good directory to save the kwin script

```
$ cd ~/<path to chosen directory>
$ git clone https://github.com/cognomines/kwin_ministacklist.git
$ plasmapkg2 --type kwinscript -i kwin_ministacklist
```


### Keybindings and adjusting with kwriteconfig5

If you find your keybindings interfere with other kwin scripts or 
plasma keybindings feel free to change them.

The default keybindings for unminimizeLast() and unminimizeAll() are
"Meta+," and "Meta+<" (Meta+Shift+,) correspondingly.

```
$ kwriteconfig5 --file $HOME/.config/kglobalshortcutsrc --group "kwin" --key "MiniStackList: Unminimize All Minimized Windows" "Meta+." # This will interfere with emoji selector by default
```

Suppose you wanted a shift modifier do not set the keybinding to "Meta+Shift+." but set it to "Meta+>". 

```
$ kwriteconfig5 --file $HOME/.config/kglobalshortcutsrc --group "kwin" --key "MiniStackList: Unminimize All Minimized Windows" "Meta+>"
$ qdbus org.kde.KWin /KWin reconfigure
```

