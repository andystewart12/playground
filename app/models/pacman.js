var maze = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 1, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 3, 2, 2, 2, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 2, 2, 2, 3, 0],
    [0, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var dotsnumber = 0;

var pac = { position: { row: 17*20, col: 12*20 }, direction: { act: null, req: null}, speed: 2.5};

var ghost0 = { position: { row: 10*20, col: 11*20}, direction: { act: 'up', pref: [null, null, null, null], favour: [0,1,2,3]}, color: 'firebrick', dead: false, restart: null};
var ghost1 = { position: { row: 10*20, col: 13*20}, direction: { act: 'up', pref: [null, null, null, null], favour: [0,2,3,1]}, color: 'aqua', dead: false, restart: null};
var ghost2 = { position: { row: 10*20, col: 10*20}, direction: { act: 'up', pref: [null, null, null, null], favour: [0,2,1,3]}, color: 'orange', dead: false, restart: null};
var ghost3 = { position: { row: 10*20, col: 14*20}, direction: { act: 'up', pref: [null, null, null, null], favour: [0,1,3,2]}, color: 'pink', dead: false, restart: null};

var ghosts = { all: [ ghost0, ghost1, ghost2, ghost3 ], speed: 2, scared: false};
var ghoststarts = [ {row: 10*20, col: 11*20}, {row:10*20, col:13*20}, {row: 10*20, col: 10*20}, {row: 10*20, col: 14*20}];

var startpacposition = { row: 17*20, col: 12*20 };

var powerup = null;
interval = null;

function reset() {
    dotsnumber = 0;
    pac.position.row = startpacposition.row;
    pac.position.col = startpacposition.col;
    ghosts.all.forEach(function(ghost, index) {
        ghost.position.row = ghoststarts[index].row;
        ghost.position.col = ghoststarts[index].col;
        ghost.dead = false;
    });
    pac.direction = { act: null, req: null };
    ghosts.scared = false;
    clearInterval(interval);
    $('#frame').html(render());
}

function gameover() {
    clearInterval(interval);
}

function gameloop() {
    
    switch (pac.direction.req) {
        case 'left':
            if (tryleft(pac.position)) {
                pac.direction.act = 'left';
            }
            break;
        case 'right':
            if (tryright(pac.position)) {
                pac.direction.act = 'right';
            }
            break;
        case 'up':
            if (tryup(pac.position)) {
                pac.direction.act = 'up';
            }
            break;
        case 'down':
            if (trydown(pac.position)) {
                pac.direction.act = 'down';
            }
            break;
    }
    
    switch (pac.direction.act) {
        case 'left':
            left(pac.position, pac.speed);
            break;
        case 'right':
            right(pac.position, pac.speed);
            break;
        case 'up':
            up(pac.position, pac.speed);
            break;
        case 'down':
            down(pac.position, pac.speed);
            break;
    }

    var collision = false;

    ghosts.all.forEach(function(ghost, index) {
        if (ghost.restart == null) {
            setghostdirection(ghost);
            moveghost(ghost);
            if (!ghost.dead) {
                var rowcol = Math.abs(pac.position.row - ghost.position.row);
                var colcol = Math.abs(pac.position.col - ghost.position.col);
                if (rowcol < 20 && colcol < 20 && (rowcol < 16 && colcol < 16)) {
                    if (ghosts.scared) {
                        $('#ghost' + index).css({'opacity':'0.4'});
                        ghost.dead = true;
                    } else {
                        collision = true;
                    }
                }
            } else {
                if (ghost.position.row == 10*20 && ghost.position.col == 12*20) {
                    setghostrestart(ghost, index);
                }
            }
        }     
        
    });

    printCharacters();
    if (collision) {
        gameover();
    }
    
    if (dotsnumber==0) {
        gameover();
    }
}

function setpacdirection(event) {
    switch (event.keyCode) {
        case 37:
            pac.direction.req = 'left';
            break;
        case 39: 
            pac.direction.req = 'right';
            break;
        case 38: 
            pac.direction.req = 'up';
            break;
        case 40:
            pac.direction.req = 'down';
            break;
    }
}

function removeCharacters() {
    $('#r' + pac.position.row + 'c' + pac.position.col).removeClass().addClass('pc_node');
    ghosts.all.forEach(function(ghost) {
        $('#r' + ghost.position.row + 'c' + ghost.position.col).removeClass().addClass('pc_node');
        $('#r' + ghost.position.row + 'c' + ghost.position.col).children().show();
    });
}

function printCharacters() {

    $('#pac').css({ 'top': pac.position.row + 'px', 'left': pac.position.col + 'px'})

    if ($('#r' + Math.floor(pac.position.row/20) + 'c' + Math.floor(pac.position.col/20)).find('.pc_dot').length!=0) {
        if (pac.position.row%20==0 && pac.position.col%20==0) {
            dotsnumber --;
            if ($('#r' + Math.floor(pac.position.row/20) + 'c' + Math.floor(pac.position.col/20)).find('.pc_powerup').length!=0) {
                setpowerup();
            }
            $('#r' + Math.floor(pac.position.row/20) + 'c' + Math.floor(pac.position.col/20)).empty();
        }
    }
    ghosts.all.forEach(function(ghost, index) {
        $('#ghost' + index).css({'top': ghost.position.row + 'px', 'left': ghost.position.col + 'px'});
    });
    
}

function left(pos, speed) {
    var row = Math.floor(pos.row/20);
    var col = Math.floor(pos.col/20);
    if ((pos.row % 20 != 0) || (pos.col % 20 == 0 && maze[row][col-1]==0)) {
        return false;
    }

    if (pos.col < 0) {
        pos.col = maze[row].length*20 + pos.col;
    } else {
        pos.col -= speed;
    }
    return true;
}
function right(pos, speed) {
    var row = Math.floor(pos.row/20);
    var col = Math.floor(pos.col/20);
    if ((pos.row % 20 != 0) || (pos.col % 20 == 0 && maze[row][col+1]==0)) {
        return false;
    }
    if (pos.col >= maze[0].length*20) {
        pos.col = pos.col - maze[0].length*20;
    } else {
        pos.col += speed;
    }
    return true;
}
function up(pos, speed) {
    var row = Math.floor(pos.row/20);
    var col = Math.floor(pos.col/20);
    if ((pos.col % 20 != 0) || (pos.row % 20 == 0 && row!=0 && maze[row-1][col]==0)) {
        return false;
    }
    if (pos.row < 0) {
        pos.row = (maze.length*20) + pos.row;
    } else {
        pos.row -= speed;
    }
    return true;
}
function down(pos, speed) {
    var row = Math.floor(pos.row/20);
    var col = Math.floor(pos.col/20);
    if ((pos.col % 20 != 0) || (pos.row % 20 == 0 && row<maze.length-1 && maze[row+1][col]==0)) {
        return false;
    }
    if (pos.row >= maze.length*20) {
        pos.row = pos.row - maze.length*20;
    } else {
        pos.row += speed;
    }
    return true;
}

function tryleft(pos) {
    var row = Math.floor(pos.row/20);
    var col = Math.floor(pos.col/20);
    if (row==-1 || row==maze.length) {
        return false;
    }
    if ((pos.row % 20 != 0) || (pos.col % 20 == 0 && maze[row][col-1]==0)) {
        return false;
    }
    return true;
}
function tryright(pos) {
    var row = Math.floor(pos.row/20);
    var col = Math.floor(pos.col/20);
    if (row==-1 || row==maze.length) {
        return false;
    }
    if ((pos.row % 20 != 0) || (pos.col % 20 == 0 && maze[row][col+1]==0)) {
        return false;
    }
    return true;
}
function tryup(pos) {
    var row = Math.floor(pos.row/20);
    var col = Math.floor(pos.col/20);
    if (col==-1 || col==maze[0].length) {
        return false;
    }
    if ((pos.col % 20 != 0) || (pos.row % 20 == 0 && row!=0 && maze[row-1][col]==0)) {
        return false;
    }
    return true;
}
function trydown(pos) {
    var row = Math.floor(pos.row/20);
    var col = Math.floor(pos.col/20);
    if (col==-1 || col==maze[0].length) {
        return false;
    }
    if ((pos.col % 20 != 0) || (pos.row % 20 == 0 && row<maze.length-1 && maze[row+1][col]==0)) {
        return false;
    }
    return true;
}

function moveghost(ghost) {
    var speed = ghosts.speed;
    if (ghost.dead) {
        speed = 1;
    }
    switch (ghost.direction.act) {
        case 'left':
            left(ghost.position, speed);
            break;
        case 'right':
            right(ghost.position, speed);
            break;
        case 'up':
            up(ghost.position, speed);
            break;
        case 'down':
            down(ghost.position, speed);
            break;
    }
}

function setghostdirection(ghost) {
    ghost.direction.pref = findghostpreferreddirection(ghost.position, ghost.dead);

    var l = tryleft(ghost.position);
    var r = tryright(ghost.position);
    var u = tryup(ghost.position);
    var d = trydown(ghost.position);

    switch (ghost.direction.act) {
        case 'left':
            ghost.direction.act = getghostdirection(ghost, l, !l&&!u&&!d && r, u, d);
            break;
        case 'right':
            ghost.direction.act = getghostdirection(ghost, !r&&!u&&!d && l, r, u, d);
            break;
        case 'up':
            ghost.direction.act = getghostdirection(ghost, l, r, u, !l&&!r&&!u && d);
            break;
        case 'down':
            ghost.direction.act = getghostdirection(ghost, l, r, !l&&!r&&!d && u, d);
            break;
    }
}

function getghostdirection(ghost, l, r, u, d) {
    var dir = ghost.direction;
    var act = null;
    var p = 0;
    var array = ghost.direction.favour.slice(0);
    if (ghost.dead) {
        array = [0,1,2,3];
    } else if (ghosts.scared) {
        array = array.reverse();
    } 

    while (act==null && p < 4) {
        switch (dir.pref[array[p]]) {
            case 'left':
                if (l) {
                    act = 'left';
                }
                break;
            case 'right':
                if (r) {
                    act = 'right';
                }
                break;
            case 'up':
                if (u) {
                    act = 'up';
                }
                break;
            case 'down':
                if (d) {
                    act = 'down';
                }
                break;
        }
        p++;
    }
    return act;
}

function findghostpreferreddirection(pos, dead) {
    delta = { row: pos.row - pac.position.row, col: pos.col - pac.position.col};
    if (dead) {
        delta.row = pos.row - (10*20);
        delta.col = pos.col - (12*20);
    }
    var pref = [null, null, null, null];

    // top left
    if (delta.row >= 0 && delta.col >= 0) {
        if (Math.abs(delta.row) <= Math.abs(delta.col)) {
            pref[0] = 'left';
            pref[1] = 'up';
            pref[2] = 'down';
            pref[3] = 'right';
        } else {
            pref[0] = 'up';
            pref[1] = 'left';
            pref[2] = 'right';
            pref[3] = 'down';
        }
        return pref;
    }
    // top right
    if (delta.row >= 0 && delta.col <= 0) {
        if (Math.abs(delta.row) <= Math.abs(delta.col)) {
            pref[0] = 'right';
            pref[1] = 'up';
            pref[2] = 'down';
            pref[3] = 'left';
        } else {
            pref[0] = 'up';
            pref[1] = 'right';
            pref[2] = 'left';
            pref[3] = 'down';
        }
        return pref;
    }
    // bottom left
    if (delta.row <= 0 && delta.col >= 0) {
        if (Math.abs(delta.row) <= Math.abs(delta.col)) {
            pref[0] = 'left';
            pref[1] = 'down';
            pref[2] = 'up';
            pref[3] = 'right';
        } else {
            pref[0] = 'down';
            pref[1] = 'left';
            pref[2] = 'right';
            pref[3] = 'up';
        }
        return pref;
    }
    // bottom right
    if (delta.row <= 0 && delta.col <= 0) {
        if (Math.abs(delta.row) <= Math.abs(delta.col)) {
            pref[0] = 'right';
            pref[1] = 'down';
            pref[2] = 'up';
            pref[3] = 'left';
        } else {
            pref[0] = 'down';
            pref[1] = 'right';
            pref[2] = 'left';
            pref[3] = 'up';
        }
        return pref;
    }
    return pref;
}

function setpowerup() {
    ghosts.scared = true;
    ghosts.speed = 1;
    ghosts.all.forEach(function(ghost, index) {
        $('#ghost' + index).css({'background-color': 'var(--starrynight)'});
    });
    if (powerup != null) {
        clearTimeout(powerup);
    }
    powerup = setTimeout(function() {
        ghosts.scared = false;
        ghosts.all.forEach(function(ghost, index) {
            if (ghost.position.row % 2 == 1) {
                moveghost(ghost);
            }
            if (ghost.position.col % 2 == 1) {
                moveghost(ghost);
            }
        });
        ghosts.speed = 2;
        ghosts.all.forEach(function(ghost, index) {
            if (!ghost.dead) {
                $('#ghost' + index).css({'background-color': ghost.color});
            }
        });
        powerup = null;
    }, 4000);
}

function setghostrestart(ghost, index) {
    ghost.dead = false;
    var color = ghost.color;
    if (ghosts.scared) {
        color = 'var(--starrynight)';
    }
    $('#ghost' + index).css({'opacity': '1', 'background-color': color});
    if (ghost.restart != null) {
        clearTimeout(ghost.restart);
    }
    ghost.restart = setTimeout(function() {
        ghost.restart = null;
    }, 1000);
}


function render() {
    content = '';
    for (i=0; i<maze.length; i++) {
        content += '<div class="pc_row">'
        for (j=0; j<maze[i].length; j++) {
            if (maze[i][j] == 0) {
                content += '<div class="pc_node" id="r' + i + 'c' + j + '">';
                content += '<div class="w" style="';
                var t = i!=0;
                var b = i!=maze.length - 1;
                var l = j!=0;
                var r = j!=maze[i].length - 1;
                
                if (t && l && maze[i-1][j]!=0 && maze[i-1][j-1]!=0 && maze[i][j-1]!=0) {
                    content += 'border-top-left-radius:50%;'
                }
                if (t && r && maze[i-1][j]!=0 && maze[i-1][j+1]!=0 && maze[i][j+1]!=0) {
                    content += 'border-top-right-radius:50%;'
                }
                if (b && l && maze[i+1][j]!=0 && maze[i+1][j-1]!=0 && maze[i][j-1]!=0) {
                    content += 'border-bottom-left-radius:50%;'
                }
                if (b && r && maze[i+1][j]!=0 && maze[i+1][j+1]!=0 && maze[i][j+1]!=0) {
                    content += 'border-bottom-right-radius:50%;'
                }
                
                content += '"/>';
                var n = false;
                var s = false;
                var w = false;
                var e = false;
                // north
                if (i==0 || maze[i-1][j]==0) {
                    content += '<div class="w_n"/>'
                    n = true;
                }
                // south
                if (i==maze.length-1 || maze[i+1][j]==0) {
                    content += '<div class="w_s"/>'
                    s = true;
                }
                // west
                if (j==0 || maze[i][j-1]==0) {
                    content += '<div class="w_w"/>'
                    w = true;
                }
                // east
                if (j==maze[i].length-1 || maze[i][j+1]==0) {
                    content += '<div class="w_e"/>'
                    e = true;
                }
                // nw
                if (n && w && (i==0 || j==0 || maze[i-1][j-1]==0)) {
                    content += '<div class="w_nw"/>'
                }
                // ne
                if (n && e && (i==0 || j==maze[i].length-1 || maze[i-1][j+1]==0)) {
                    content += '<div class="w_ne"/>'
                }
                // sw
                if (s && w && (i==maze.length-1 || j==0 || maze[i+1][j-1]==0)) {
                    content += '<div class="w_sw"/>'
                }
                // se
                if (s && e && (i==maze.length-1 || j==maze[i].length-1 || maze[i+1][j+1]==0)) {
                    content += '<div class="w_se"/>'
                }
                
                content += '</div>';
            } else if (maze[i][j] == 1) {
                content += '<div class="pc_node" id="r' + i + 'c' + j + '"></div>'
            } else if (maze[i][j] == 2) {
                content += '<div class="pc_node" id="r' + i + 'c' + j + '"><div class="pc_dot"></div></div>'
                dotsnumber++;
            } else if (maze[i][j] == 3) {
                content += '<div class="pc_node" id="r' + i + 'c' + j + '"><div class="pc_dot pc_powerup"></div></div>'
                dotsnumber++;
            }
        }
        content += '</div>'
    }
    content += '<div id="pac" class="pc_pac" style="top:' + pac.position.row + 'px;left:' + pac.position.col + 'px;"/>';
    ghosts.all.forEach(function(ghost, index) {
        content += '<div id="ghost'+index+'" class="pc_ghost" style="background-color:'+ghost.color+';top:' + ghost.position.row + 'px;left:' + ghost.position.col + 'px;"/>';
    });
    return content;
}

