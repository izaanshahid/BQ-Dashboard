module.exports = ({srcDir, node_modules, distDir}) => {
    let distAssets = `${distDir}/assets`

    return {
        dist: {
            dir: distDir,
            assets: distAssets,
            js: `${distAssets}/js`,
            css: `${distAssets}/css`
        },
        src: {
            path: srcDir,
            js: `${srcDir}/js`,
            scss: `${srcDir}/scss`,
            node_modules: node_modules
        },
        bundle: {
            main: {
                src: {
                    base: {
                        js: [
                            `${srcDir}/js/components/utils.js`,
                            `${srcDir}/js/components/sidebarPanel.js`,
                            `${srcDir}/js/components/headerMenu.js`,
                            `${srcDir}/js/components/mobileHeader.js`,
                            `${srcDir}/js/components/search.js`,
                            `${srcDir}/js/components/secondarySidebar.js`,
                            `${srcDir}/js/components/stickyHeader.js`,
                            `${srcDir}/js/components/wizard.js`,
                            `${srcDir}/js/components/AatroxCusomizer.js`,
                            `${srcDir}/js/components/tabs.js`,
                            `${srcDir}/js/components/vanilla-plugins.js`,
                            `${srcDir}/js/components/init.js`
                        ],
                        style: [`${srcDir}/scss/Aatrox-design-system.scss`]
                        // tailwind: [],
                    },

                    layout: {
                        js: [
                            `${srcDir}/js/layouts/layout1.js`,
                            `${srcDir}/js/layouts/layout2.js`,
                            `${srcDir}/js/layouts/layout3.js`
                        ]
                    }
                },
                dist: {
                    style: `${distAssets}/css`,
                    js: `${distAssets}/js`
                }
            },
            'main-dark': {
                src: {
                    base: {
                        style: [`${srcDir}/scss/Aatrox-design-system-dark.scss`]
                    }
                },
                dist: {
                    style: `${distAssets}/css`,
                    js: `${distAssets}/js`
                }
            },
            tailwind: {
                src: {
                    base: {
                        style: [`${srcDir}/scss/tailwind.scss`]
                    }
                },
                dist: {
                    style: `${distAssets}/css`,
                    js: `${distAssets}/js`
                }
            },
            vendors: {
                src: {
                    // REQUIRED VENDORS, DO NOT CHANGE ORDER

                    cash: {
                        js: [`${node_modules}/cash-dom/dist/cash.min.js`]
                    },
                    ariaTablist: {
                        js: [
                            `${node_modules}/aria-tablist/dist/aria-tablist.min.js`
                        ]
                    },

                    'popper.js': {
                        js: [`${node_modules}/popper.js/dist/umd/popper.js`]
                    },

                    metismenu: {
                        style: [
                            `${node_modules}/metismenujs/dist/metisMenujs.min.css`
                        ],
                        js: [
                            `${node_modules}/metismenujs/dist/metisMenujs.min.js`
                        ]
                    },
                    select: {
                        style: [
                            `${node_modules}/vanilla-js-dropdown/vanilla-js-dropdown.css`
                        ],
                        js: [
                            `${node_modules}/vanilla-js-dropdown/src/vanilla-js-dropdown.js`
                        ]
                    },
                    'perfect-scrollbar': {
                        style: [
                            `${node_modules}/perfect-scrollbar/css/perfect-scrollbar.css`
                        ],
                        js: [
                            `${node_modules}/perfect-scrollbar/dist/perfect-scrollbar.js`
                        ]
                    },
                    moment: {
                        js: [`${node_modules}/moment/min/moment.min.js`]
                    },

                    '@tarekraafat/autocomplete.js': {
                        js: [
                            `${node_modules}/@tarekraafat/autocomplete.js/dist/js/autoComplete.js`
                        ]
                    },
                    // ABOVE FILES ARE REQUIRED VENDORS, DO NOT CHANGE ORDER

                    // OPTIONAL VENDORS
                    apexcharts: {
                        js: [`${node_modules}/apexcharts/dist/apexcharts.js`]
                    },

                    'chart.js': {
                        css: [`${node_modules}/chart.js/dist/Chart.css`],
                        js: [`${node_modules}//chart.js/dist/Chart.js`]
                    },
                    clipboard: {
                        js: [`${node_modules}/clipboard/dist/clipboard.js`]
                    }
                },
                dist: {
                    style: `${distAssets}/css`,
                    js: `${distAssets}/js`
                }
            }
        },
        copy: {
            vendors: {
                baseDir: node_modules,
                src: {
                    gijgo: {
                        dir: [`${node_modules}/gijgo`]
                    },

                    quill: {
                        dir: [`${node_modules}/quill/dist`]
                    },
                    hopscotch: {
                        dir: [`${node_modules}/hopscotch/dist`]
                    },
                    sweetalert2: {
                        dir: [`${node_modules}/sweetalert2/dist`]
                    },
                    snackbarjs: {
                        dir: [`${node_modules}/snackbarjs/dist`]
                    },
                    filepond: {
                        dir: [`${node_modules}/filepond/dist`]
                    },
                    dropzone: {
                        dir: [`${node_modules}/dropzone/dist`]
                    },

                    inputmask: {
                        dir: [`${node_modules}/inputmask/dist`]
                    },
                    nouislider: {
                        dir: [`${node_modules}/nouislider`]
                    },
                    wnumb: {
                        dir: [`${node_modules}/wnumb`]
                    },

                    'typeahead.js': {
                        dir: [`${node_modules}/typeahead.js/dist`]
                    },
                    'bloodhound-js': {
                        dir: [`${node_modules}/bloodhound-js/dist`]
                    },
                    'feather-icons': {
                        dir: [`${node_modules}/feather-icons/dist`]
                    },
                    uppy: {
                        dir: [`${node_modules}/uppy/dist`]
                    },

                    cropperjs: {
                        dir: [`${node_modules}/cropperjs/dist`]
                    },

                    'parallax-js': {
                        dir: [`${node_modules}/parallax-js/dist`]
                    },
                    fullcalendar: {
                        dir: [`${node_modules}/fullcalendar/lib`]
                    }
                },
                dist: `${distAssets}/vendors`
            },
            'images-fonts': {
                baseDir: srcDir,
                src: {
                    images: {
                        dir: [`${srcDir}/images`]
                    },
                    fonts: {
                        dir: [`${srcDir}/fonts`]
                    }
                },
                dist: `${distAssets}`
            },
            js: {
                baseDir: `${srcDir}/js/pages`,
                src: {
                    pages: {
                        dir: [`${srcDir}/js/pages`]
                    }
                },
                dist: `${distAssets}/js/pages`
            },
            data: {
                baseDir: `${srcDir}/js/data`,
                src: {
                    data: {
                        dir: [`${srcDir}/js/data`]
                    }
                },
                dist: `${distAssets}/js/data`
            },
            'scss-pages': {
                baseDir: `${srcDir}/scss/pages`,
                option: {
                    sass: true
                },
                src: {
                    pages: {
                        dir: [`${srcDir}/scss/pages`]
                    }
                },
                dist: `${distAssets}/css/pages`
            }
        }
    }
}
