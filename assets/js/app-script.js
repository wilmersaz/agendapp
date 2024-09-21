
$(function () {
    "use strict";

    //sidebar menu js
    $.sidebarMenu($('.sidebar-menu'));

    // === toggle-menu js

    $(".toggle-menu").on("click", function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    // === sidebar menu activation js
    $(function () {
        for (var i = window.location, o = $(".sidebar-menu a").filter(function () {
            return this.href == i;
        }).addClass("active").parent().addClass("active"); ;) {
            if (!o.is("li")) break;
            o = o.parent().addClass("in").parent().addClass("active");
        }
    }),

        /* Back To Top */
        $(document).ready(function () {
            $(window).on("scroll", function () {
                if ($(this).scrollTop() > 300) {
                    $('.back-to-top').fadeIn();
                } else {
                    $('.back-to-top').fadeOut();
                }
            });
            $('.back-to-top').on("click", function () {
                $("html, body").animate({ scrollTop: 0 }, 600);
                return false;
            });
        });

    $(function () {
        $('[data-toggle="popover"]').popover()
    })


    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    function loadComplements() {
        const sidebar = document.querySelector('.sidebarComp');
        const topbar = document.querySelector('.topbarComp');
        const footer = document.querySelector('.footerComp');


        fetch('/app/common/sidebar.html')
            .then(response => response.text())
            .then(data => {
                sidebar.innerHTML = data;
            });

        fetch('/app/common/topbar.html')
            .then(response => response.text())
            .then(data => {
                topbar.innerHTML = data;
            });

        fetch('/app/common/footer.html')
            .then(response => response.text())
            .then(data => {
                footer.innerHTML = data;
            });
    }

    window.onload = loadComplements;

});