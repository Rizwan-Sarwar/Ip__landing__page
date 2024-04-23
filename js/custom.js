// var page_title = 'Custom Logo Design – Unique Logo Design in 24 Hrs - Wonder Design Inc.';
$('#popupformWebsite1').on('submit', function() {
    if ($("#popupformWebsite1").valid()) {
        // alert("hello");
        $zopim(function() {
            $zopim.livechat.set({
                language: 'en',
                name: $('input[name="cn"]').val(),
                email: $('input[name="em"]').val(),
                phone: $('input[name="pn"]').val(),
                notes: $('textarea[name="msg"]').val(),
            });
            // Add tag for sending that form is submitted
            $zopim.livechat.addTags($('.order_package_name').val() + ' Lead Submitted');
            console.log ("added");
        });
        // Close Popup
        //$.fancybox.close();
        // Clear Form
        setTimeout(function() {
            // $('#popupformWebsite1')[0].reset();
        }, 2000);
    }
});

$('#popupformWebsite2').on('submit', function() {
    if ($("#popupformWebsite2").valid()) {
        // alert("hello");
        $zopim(function() {
            $zopim.livechat.set({
                language: 'en',
                name: $('input[name="cn"]').val(),
                email: $('input[name="em"]').val(),
                phone: $('input[name="pn"]').val(),
                notes: $('textarea[name="msg"]').val(),
            });
            // Add tag for sending that form is submitted
            $zopim.livechat.addTags($('.order_package_name').val() + ' Lead Submitted');
            console.log ("added");
        });
        // Close Popup
        //$.fancybox.close();
        // Clear Form
        setTimeout(function() {
            // $('#popupformWebsite1')[0].reset();
        }, 2000);
    }
});

$('#popupformWebsite3').on('submit', function() {
    if ($("#popupformWebsite3").valid()) {
        // alert("hello");
        $zopim(function() {
            $zopim.livechat.set({
                language: 'en',
                name: $('input[name="cn"]').val(),
                email: $('input[name="em"]').val(),
                phone: $('input[name="pn"]').val(),
                notes: $('textarea[name="msg"]').val(),
            });
            // Add tag for sending that form is submitted
            $zopim.livechat.addTags($('.order_package_name').val() + ' Lead Submitted');
            console.log ("added");
        });
        // Close Popup
        //$.fancybox.close();
        // Clear Form
        setTimeout(function() {
            // $('#popupformWebsite1')[0].reset();
        }, 2000);
    }
});


$('#popupformWebsite4').on('submit', function() {
    if ($("#popupformWebsite4").valid()) {
        // alert("hello");
        $zopim(function() {
            $zopim.livechat.set({
                language: 'en',
                name: $('input[name="cn"]').val(),
                email: $('input[name="em"]').val(),
                phone: $('input[name="pn"]').val(),
                notes: $('textarea[name="msg"]').val(),
            });
            // Add tag for sending that form is submitted
            $zopim.livechat.addTags($('.order_package_name').val() + ' Lead Submitted');
            console.log ("added");
        });
        // Close Popup
        //$.fancybox.close();
        // Clear Form
        setTimeout(function() {
            // $('#popupformWebsite1')[0].reset();
        }, 2000);
    }
});

$('.activate_package').on('click', function() {
    console.log($(this).attr('title'));
    console.log($("#package_name").val());
    $("#package_name").val($(this).attr('title'));
    $("#package_price").val($(this).attr('name'));

    console.log($("#package_name").val());
});