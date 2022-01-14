/***********************************************************************
 *  A kwin script to remember lastly minimized windows 
 *  Copyright (C) 2022 Tyler Kutney
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 ***********************************************************************/

class stacklist {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length == 0;
    }
    remove() {
        this.items.remove(element)
    }
}

var clientMiniStackList = new stacklist();
workspace.clientMinimized.connect(function (client) {
    clientMiniStackList.push(client)
});

workspace.clientUnminimized.connect(function (client) {
    clientMiniStackList.remove(client)
});

function unminimizeLast() {
    var c = clientMiniStackList.pop()
    c.minimized = false;
    c.desktop = workspace.currentDesktop;
}

registerShortcut("MiniStackList: Unminimize", "MiniStackList: Unminimize", "Meta+,", unminimizeLast);

function unminimizeAll() {
    while (!clientMiniStackList.isEmpty()) {
        unminimizeLast()
    }
}

registerShortcut("MiniStackList: Unminimize All Minimized Windows", "MiniStackList: Unminimize All Minimized Windows", "Meta+<", unminimizeAll)
