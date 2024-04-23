var _ouibounce = ouibounce(document.getElementById('ouibounce-modal'), {
    aggressive: true,
  });
  $(document).ready(function () {
  
    // intel Tel Input
    let ip;
    let ip_value;
    $("#phone-country,#phone-coun").intlTelInput({
      geoIpLookup: function (callback) {
        $.get('https://ipinfo.io', function () { }, "jsonp").always(function (resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
          ip = resp.ip;
  
  
        });
      },
      initialCountry: "auto",
      nationalMode: true,
      separateDialCode: true,
    });
  
    setTimeout(function () {
      console.log(ip);
  
      $('input[name="pc"]').val($('.selected-dial-code').text());
      $('input[name="cip"]').val(ip);
  
      $('input[name="ctry"]').val($('.country-list .country.active .country-name').text());
  
      $('input[name="bpc"]').val($(' .selected-dial-code').text());
      $('input[name="bctry"]').val($('.country-list .country.active .country-name').text());
  
      $('#bpc').val($(' .selected-dial-code').text());
      $('#bctry').val($('.country-list .country.active .country-name').text());
  
      $('input[name="opc"]').val($('.selected-dial-code').text());
      $('input[name="octry"]').val($('.country-list .country.active .country-name').text());
  
    }, 3000);
  
    //$(".footer-vld-frm").validate();
    //$(".validate-banner-frm").validate();
  
  
  
    $('.customerslider').owlCarousel({
      loop: true,
      margin: 0,
      dots: true,
      responsiveClass: true,
  
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 1,
          nav: false
        },
        1000: {
          items: 1,
          nav: false,
          loop: false
        }
      }
    });
  
    $('.content-testimonial').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
  
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
    $('.various').click(function () {
      var leadprice = $(this).attr('name');
      $(".popupform .leadprice").val(leadprice)
  
    });
  
  
  
    var str = location.href.toLowerCase();
    $(".navbar-nav li a").each(function () {
      if (str.indexOf(this.href.toLowerCase()) > -1) {
        $("li.active").removeClass("active");
        $(this).parent().addClass("active");
      }
    });
  
    $('.customerslider').owlCarousel({
      loop: true,
      margin: 0,
      dots: true,
      responsiveClass: true,
  
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 1,
          nav: false
        },
        1000: {
          items: 1,
          nav: false,
          loop: false
        }
      }
    })
  
    $('[data-fancybox]').fancybox();
  //   $('.contact-form').validate();
  //   $(".contactusform").validate();
  //   $(".validate-footer").validate();
  //   $(".contactusform-footer").validate();
  
  
    var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
  
      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
  
        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
      }
      return false;
    };
  });
  
  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;
  
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");
  
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
    return false;
  };
  
  var utm_source = getUrlParameter("utm_source");
  var utm = getUrlParameter("utm");
  
  $(".validate-banner-frm").validate({
    rules: {
      cn: "required",
      em: "required",
      pn: "required",
    },
    submitHandler: function (bannerform) {
      //let validate-banner-frm = bannerform;
      if ($(".validate-banner-frm").valid()) {
          bannerform.submit();
      //   var cust_name = $(".validate-banner-frm input[name='cn']").val();
      //   var cust_email = $(".validate-banner-frm input[name=em]").val();
      //   var cust_number = $(".validate-banner-frm input[name=pn]").val();
      //   var brand = window.location.hostname;
      //   var source = "ppc";
      //   var datastring =
      //     "https://www.crisptechnologiesllc.com/portal/api/create_lead.php?customer_name=" +
      //     cust_name +
      //     "&customer_email=" +
      //     cust_email +
      //     "&customer_number=" +
      //     cust_number +
      //     "&brand=" +
      //     brand +
      //     "&source=" +
      //     source +
      //     "&lead_type=web";
      //   $.ajax({
      //     type: "GET",
      //     url: datastring,
      //     success: function (data) {
      //       $(".validate-banner-frm input[name=portal_leadid]").val(data);
      //       bannerform.submit();
      //     },
      //     error: function () {
      //       alert("Error updating record");
      //     },
      //   });
      }
    },
  });
  
  $(".validate-popupform").validate({
    rules: {
      cn: "required",
      em: "required",
      pn: "required",
    },
    submitHandler: function (bannerform) {
      //let validate-banner-frm = bannerform;
      if ($(".validate-popupform").valid()) {
          bannerform.submit();
      //   var cust_name = $(".validate-popupform input[name='cn']").val();
      //   var cust_email = $(".validate-popupform input[name=em]").val();
      //   var cust_number = $(".validate-popupform input[name=pn]").val();
      //   var brand = window.location.hostname;
      //   var source = "ppc";
      //   var datastring =
      //     "https://www.crisptechnologiesllc.com/portal/api/create_lead.php?customer_name=" +
      //     cust_name +
      //     "&customer_email=" +
      //     cust_email +
      //     "&customer_number=" +
      //     cust_number +
      //     "&brand=" +
      //     brand +
      //     "&source=" +
      //     source +
      //     "&lead_type=web";
      //   $.ajax({
      //     type: "GET",
      //     url: datastring,
      //     success: function (data) {
      //       $(".validate-popupform input[name=portal_leadid]").val(data);
      //       bannerform.submit();
      //     },
      //     error: function () {
      //       alert("Error updating record");
      //     },
      //   });
      }
    },
  });
  
  $(".footer-vld-frm").validate({
    rules: {
      cn: "required",
      em: "required",
      pn: "required",
    },
    submitHandler: function (bannerform) {
      //let validate-banner-frm = bannerform;
      if ($(".footer-vld-frm").valid()) {
          bannerform.submit();
      //   var cust_name = $(".footer-vld-frm input[name='cn']").val();
      //   var cust_email = $(".footer-vld-frm input[name=em]").val();
      //   var cust_number = $(".footer-vld-frm input[name=pn]").val();
      //   var brand = window.location.hostname;
      //   var source = "ppc";
      //   var datastring =
      //     "https://www.crisptechnologiesllc.com/portal/api/create_lead.php?customer_name=" +
      //     cust_name +
      //     "&customer_email=" +
      //     cust_email +
      //     "&customer_number=" +
      //     cust_number +
      //     "&brand=" +
      //     brand +
      //     "&source=" +
      //     source +
      //     "&lead_type=web";
      //   $.ajax({
      //     type: "GET",
      //     url: datastring,
      //     success: function (data) {
      //       $(".footer-vld-frm input[name=portal_leadid]").val(data);
      //       bannerform.submit();
      //     },
      //     error: function () {
      //       alert("Error updating record");
      //     },
      //   });
      }
    },
  });
  
  $("#form2-validate").validate({
    rules: {},
    submitHandler: function (stepform) {
      //let step2form = stepform;
      if ($("#form2-validate").valid()) {
          stepform.submit();
      //   var lead_id = getUrlParameter("portal_id");
      //   var oorder_website_theme = $(
      //     "input[name='oorder_website_theme']"
      //   ).val();
      //   var order_targeted_audience = $(
      //     "input[name='order_targeted_audience']"
      //   ).val();
      //   var order_like_or_dislike_of_competitors = $(
      //     "input[name='order_like_or_dislike_of_competitors']"
      //   ).val();
      //   var order_website_navigation = $(
      //     "input[name='order_website_navigation']"
      //   ).val();
      //   var order_domain_name = $("#domain_name option:selected").text();
      //   var order_hosting = $("#order_hosting option:selected").text();
      //   var order_web_photos = $("#web_photos option:selected").text();
      //   var order_web_content = $("#web_content option:selected").text();
      //   var package = $("input[name='selected_package']").val();
      //   var datastring =
      //     "https://www.crisptechnologiesllc.com/portal/api/lead_web_data.php?lead_id=" +
      //     lead_id +
      //     "&order_website_theme=" +
      //     oorder_website_theme +
      //     "&order_targeted_audience=" +
      //     order_targeted_audience +
      //     "&order_like_or_dislike_of_competitors=" +
      //     order_like_or_dislike_of_competitors +
      //     "&order_website_navigation=" +
      //     order_website_navigation +
      //     "&order_domain_name=" +
      //     order_domain_name +
      //     "&order_hosting=" +
      //     order_hosting +
      //     "&order_web_photos=" +
      //     order_web_photos +
      //     "&order_web_content=" +
      //     order_web_content +
      //     "&package=" +
      //     package;
      //   $.ajax({
      //     type: "GET",
      //     url: datastring,
      //     success: function (data) {
      //       stepform.submit();
      //       //HTMLFormElement.prototype.submit.call(stepform);
      //     },
      //     error: function () {
      //       alert("Error updating record");
      //     },
      //   });
      }
    },
  });
  
  
  // init Isotope
  var $container = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
  });
  
  
  var $container1 = $('.grid1').isotope({
    itemSelector: '.element-item1',
    layoutMode: 'fitRows',
  });
  
  
  
  // bind filter button click
  $('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterValue;
    $container.isotope({
      filter: filterValue
    });
  });
  
  $('#filters1').on('click', 'button', function () {
    var filterValue1 = $(this).attr('data-filter1');
    // use filterFn if matches value
    filterValue1 = filterValue1;
    $container1.isotope({
      filter: filterValue1
    });
  });
  
  
  
  // change is-checked class on buttons
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });
  
  $('.button-group1').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked1').removeClass('is-checked1');
      $(this).addClass('is-checked1');
    });
  });
  
  //****************************
  // Isotope Load more button
  //****************************
  var initShow = 6; //number of items loaded on init & onclick load more button
  var initShow1 = 6; //number of items loaded on init & onclick load more button
  
  var counter = initShow; //counter for load more button
  var counter1 = initShow1; //counter for load more button
  
  var iso = $container.data('isotope'); // get Isotope instance
  var iso1 = $container1.data('isotope'); // get Isotope instance
  
  $('#showMore ').on('click', function (e) {
    e.preventDefault();
    showNextItems(next_items);
  });
  loadMore(initShow); //execute function onload
  
  $('#showMore1 ').on('click', function (e) {
    e.preventDefault();
    showNextItems(next_items);
  });
  loadMore1(initShow1); //execute function onload
  
  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");
  
    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function (item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');
  
    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      jQuery("#showMore").hide();
    } else {
      jQuery("#showMore").show();
    };
  
  }
  
  function loadMore1(toShow1) {
    $container1.find(".hidden").removeClass("hidden");
  
    var hiddenElems1 = iso1.filteredItems.slice(toShow1, iso1.filteredItems.length).map(function (item) {
      return item.element;
    });
    $(hiddenElems1).addClass('hidden');
    $container1.isotope('layout');
  
    //when no more to load, hide show more button
    if (hiddenElems1.length == 0) {
      jQuery("#showMore1").hide();
    } else {
      jQuery("#showMore1").show();
    };
  
  }
  
  //append load more button
  $container.after('<button id="showMore"> Show More</button>');
  $container1.after('<button id="showMore1"> Show More</button>');
  
  //when load more button clicked
  $("#showMore").click(function () {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };
  
    counter = counter + initShow;
  
    loadMore(counter);
  });
  
  //when filter button clicked
  $("#filters").click(function () {
    $(this).data('clicked', true);
  
    loadMore(initShow);
  });
  
  //when load more button clicked
  $("#showMore1").click(function () {
    if ($('#filters1').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter1 = initShow1;
      $('#filters1').data('clicked', false);
    } else {
      counter1 = counter1;
    };
  
    counter1 = counter1 + initShow1;
  
    loadMore1(counter1);
  });
  
  //when filter button clicked
  $("#filters1").click(function () {
    $(this).data('clicked', true);
  
    loadMore1(initShow1);
  });
  
  
  $('.lazy').lazy();
  
  
  
  
  /* Added by MIKE JASON
  *  For package page
  */
  // $('.btn_start_project').on('click', function () {
  //   setTimeout(function () {
  //     $('#popupformWebsite form').submit();
  //   });
  // });
  
  
  $(document).ready(function () {
  
  
    var waitForZopim = setInterval(function () {
  
      if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
        return;
      }
  
      function setButtonURL() {
        zE.activate();
      }
  
  
      $('.chat').click(function () {
        zE.activate();
      });
      $('.chat_now').click(function () {
        zE.activate();
      });
  
  
      $('.thankyou-chat').click(function () {
        zE.activate();
      });
  
  
      /*  zE(function(){
            $zopim(function(){
                
              $zopim.livechat.theme.setColors({badge: '#e30b0d', primary: '#e30b0d'});
              
              $zopim.livechat.departments.filter('Senior Consultant', 'Senior Consultant');
                 $zopim.livechat.concierge.setTitle('Senior Consultant');
                 $zopim.livechat.concierge.setName('Brad Wilson');
                 $zopim.livechat.window.setTitle("Go Animation Deal");
             $zopim.livechat.badge.setText('Chat Now & Avail 70% Discount Now!');
        
              $zopim.livechat.theme.reload(); // apply new theme settings
            });
        }); */
  
  
      clearInterval(waitForZopim);
  
    }, 100);
  });
  
  
  var i = 0;
  var txt = 'Get a Professional Web Design';
  var speed = 50;
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("type-it").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  
  typeWriter();