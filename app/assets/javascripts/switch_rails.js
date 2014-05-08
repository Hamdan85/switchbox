//= require jquery-ui

function inicialSetCheckboxesState(checkbox) {
    var id = checkbox.prop('id');
    console.log(checkbox);
    if (checkbox.prop('value') == 1) {
        $('.outterSwitch[data-id=' +  id + '] div.innerSwitch').css({left: parseInt($('.outterSwitch[data-id=' +  id + '] div.innerSwitch').parent().css('width'),10)/2 });
        $('.outterSwitch[data-id=' +  id + '] .content[data-onoff=on]').css({ opacity: 1 });
        $('.outterSwitch[data-id=' +  id + '] .content[data-onoff=off]').css({ opacity: 0 });
        $('.outterSwitch[data-id=' +  id + ']').css('background-color', 'red');
    } else {
        $('.outterSwitch[data-id=' +  id + '] div.innerSwitch').css({ left: 0 });
        $('.outterSwitch[data-id=' +  id + '] .content[data-onoff=on]').css({ opacity: 0 });
        $('.outterSwitch[data-id=' +  id + '] .content[data-onoff=off]').css({ opacity: 1 });
        $('.outterSwitch[data-id=' +  id + ']').css('background-color', 'lightblue');
    }
}

function setCheckBoxState(checkbox, state) {
    var id = checkbox.prop('id');
    if (state == true) {
        checkbox.prop('checked', true);
        checkbox.val(1);
        $('input[name="' +  checkbox.prop('name') + '"][type=hidden]').val(1);
        $('.outterSwitch[data-id=' +  id + '] div.innerSwitch').animate({left: parseInt($('.outterSwitch[data-id=' +  id + '] div.innerSwitch').parent().css('width'),10)/2 }, 300);
        $('.outterSwitch[data-id=' +  id + '] .content[data-onoff=on]').animate({ opacity: 1 }, 300);
        $('.outterSwitch[data-id=' +  id + '] .content[data-onoff=off]').animate({ opacity: 0 }, 300);
        $('.outterSwitch[data-id=' +  id + ']').css('background-color', 'red');
    } else {
        checkbox.prop('checked', false);
        checkbox.val(0);
        $('input[name="' +  checkbox.prop('name') + '"][type=hidden]').val(0);
        $('.outterSwitch[data-id=' +  id + '] div.innerSwitch').animate({ left: 0 }, 300);
        $('.outterSwitch[data-id=' +  id + '] .content[data-onoff=on]').animate({ opacity: 0 }, 300);
        $('.outterSwitch[data-id=' +  id + '] .content[data-onoff=off]').animate({ opacity: 1 }, 300);
        $('.outterSwitch[data-id=' +  id + ']').css('background-color', 'lightblue');
    }
}

$.fn.switchfield = function(msgOn, msgOff){

    if (msgOn == null) { msgOn = 'ON'; }
    if (msgOff == null) { msgOff = 'OFF'; }

    //call the function above for each checkbox found on $(this)

    $(this).each(function(){
        changecheckbox($(this), $(this).prop('id'), msgOn, msgOff);
    });

    function changecheckbox(checkbox, id, msgOn, msgOff){

        checkbox.css({'visibility': 'hidden'});
        checkbox.prop('data-switched', 'true');

        checkbox.parent().append('<div class="outterSwitch" data-id=' +  id + '><div class="content" data-onoff="on"><p>' + msgOn + '</p></div><div class="content" data-onoff="off"><p>' + msgOff +'</p></div><div class="innerSwitch"></div></div>');
        //set switchboxes entities
        var switchOutter = $('.outterSwitch[data-id=' +  id + ']');
        var contentOn = $('.outterSwitch[data-id=' +  id + '] .content[data-onoff=on]');
        var contentOff = $('.outterSwitch[data-id=' +  id + '] .content[data-onoff=off]');
        var switchdiv = $('.outterSwitch[data-id='+ id + '] .innerSwitch');

        switchdiv.draggable({
            snap: true,
            snapMode: "inner",
            snapTolerance: 12,
            refreshPositions: true,
            containment: switchdiv.parent(),
            stack: '.outterSwitch[data-id='+ id + '] .content',
            drag: function(event, ui) {
                var parentWidth = parseInt($(this).parent().css('width'),10)/2;
                var thisLeft = parseInt($(this).css('left'),10);

                contentOn.css({ opacity: thisLeft/parentWidth });
                contentOff.css({ opacity: 1-thisLeft/parentWidth });

                if (thisLeft >= parentWidth/2) {
                    $(this).parent().css('background-color', 'red');
                } else {
                    $(this).parent().css('background-color', 'lightblue');
                }
            },
            stop: function(event, ui) {
                if (parseInt($(this).css('left'),10) >= parseInt($(this).parent().css('width'),10)/4) {
                    setCheckBoxState(checkbox, true);
                } else {
                    setCheckBoxState(checkbox, false);
                }
            }
        });

        switchOutter.promise().done(function(){
            switchOutter.on('click', function(){
                if (checkbox.prop('checked') == true) {
                    setCheckBoxState(checkbox, false);
                } else {
                    setCheckBoxState(checkbox, true);
                }
            });
        });

        inicialSetCheckboxesState(checkbox);
    }
};


$(document).ready(function(){
    $('input[type=checkbox][data-switch]').filter(function() {
        return !($(this).prop('data-switched') == 'false' || $(this).prop('data-switched') == 'none')
    }).switchfield()
});

document.addEventListener('page:load', function(){
    $('input[type=checkbox][data-switch]').filter(function() {
        return !($(this).prop('data-switched') == 'false' || $(this).prop('data-switched') == 'none')
    }).switchfield()
})