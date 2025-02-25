// import MetisMenu from 'metismenujs';
var Aatrox = (function () {
    var initAatrox = function () {
        var adminWrap = document.querySelector(
            "div[class^='app-admin-wrap-layout']"
        )

        // Material Design
        // $('body').bootstrapMaterialDesign();

        // Tooltip
        // $('[data-toggle="tooltip"]').tooltip();

        // Popover
        // $('[data-toggle="popover"]').each(function () {
        //   var popoverClass = '';
        //   if ($(this).data('color')) {
        //     popoverClass = 'popover-' + $(this).data('color');
        //   }
        //   $(this).popover({
        //     trigger: 'focus',
        //     template:
        //       '<div class="popover ' +
        //       popoverClass +
        //       '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        //   });
        // });

        // Metis menu

        // Init onload elements
        const showOnLoadElm = document.querySelectorAll('.show-on-load')
        showOnLoadElm.forEach((elm) => ULUtil.removeClass(elm, 'show-on-load'))

        // Perfect scrollbar
        ;[
            '.perfect-scrollbar',
            '.sidebar-left-secondary',
            '.sidebar-left',
            '[data-perfect-scrollbar]',
            '.notification-dropdown',
            '.dropdown-menu'
        ].forEach((item) => {
            console.log(item)

            var $el = document.querySelector(item)
            if ($el) {
                let index1 = new PerfectScrollbar(item, {
                    suppressScrollX: ULUtil.data($el).get('suppress-scroll-x'),
                    suppressScrollY: ULUtil.data($el).get('suppress-scroll-y')
                })
            }

            console.log($el)
        })
        // ps2 = new PerfectScrollbar('.sidebar-left');

        // Sidenav consistant position
        const scrollNav = document.querySelector('.scroll-nav')
        if (scrollNav) {
            scrollNav.scrollTop = localStorage.getItem('ul_navigation_pos') || 0
            scrollNav.addEventListener(
                'ps-scroll-y',
                ULUtil.debounce((e) => {
                    localStorage.setItem(
                        'ul_navigation_pos',
                        e.target.scrollTop
                    )
                }, 100)
            )
        }

        // init disabled link
        const disabledLinks = document.querySelectorAll('a[disabled]')
        disabledLinks.forEach((a) => {
            a.addEventListener('click', function (e) {
                e.preventDefault()
            })
        })

        // feathericon
        if (window.feather) {
            feather.replace()
        }
    }
    return {
        init: function () {
            initAatrox()
        }
    }
})()

document.addEventListener('DOMContentLoaded', function () {
    Aatrox.init()
    document.getElementById('preloader').style.display = 'none'
})
