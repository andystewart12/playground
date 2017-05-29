function toggleNav() {
    if ($('#sidenav').width() == 0) {
        openNav();
    } else {
        closeNav();
    }
}

function openNav() {
    $('#sidenav').css({'width': '280px'});
    $('#topbarcontent').css({'left': '280px'});
    $('#brandicon').removeClass().addClass('fa fa-lg fa-chevron-circle-left');
}
function closeNav() {
    $('#sidenav').css({'width': '0px'});
    $('#topbarcontent').css({'left': '0px'});
    $('#brandicon').removeClass().addClass('fa fa-lg fa-chevron-circle-right');
}

function togglesubmenu(mID, smID) {
    if ($('#' + smID).is(":visible")) {
        closesubmenu(mID, smID);
    } else {
        opensubmenu(mID, smID);
    }
}

function opensubmenu(mID, smID) {
    $('#' + smID).slideDown('fast');
    $('#' + mID).css({'color': 'var(--light)'})
}
function closesubmenu(mID, smID) {
    $('#' + smID).slideUp('fast');
    $('#' + mID).css({'color': 'var(--aluminium)'});
    
}