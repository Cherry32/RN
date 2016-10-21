(function (d) {
    d.huadong_jsxx = function (i, k) {
        var a = d(i),
            c = d.extend({}, d.huadong_jsxx.defaults, k),
            e = c.namespace,
            p = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            t = p ? "touchend" : "click",
            l = "vertical" === c.direction,
            m = c.reverse,
            h = 0 < c.itemWidth,
            r = "fade" === c.animation,
            s = "" !== c.asNavFor,
            f = {};
        d.data(i, "huadong_jsxx", a);
        f = {
            init: function () {
                a.animating = !1;
                a.currentSlide = c.startAt;
                a.animatingTo = a.currentSlide;
                a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last;
                a.containerSelector = c.selector.substr(0, c.selector.search(" "));
                a.huandeng_04 = d(c.selector, a);
                a.container = d(a.containerSelector, a);
                a.count = a.huandeng_04.length;
                a.syncExists = 0 < d(c.sync).length;
                "slide" === c.animation && (c.animation = "swing");
                a.prop = l ? "top" : "marginLeft";
                a.args = {};
                a.manualPause = !1;
                var b = a,
                    g;
                if (g = !c.video) if (g = !r) if (g = c.useCSS) a: {
                    g = document.createElement("div");
                    var n = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"],
                        e;
                    for (e in n) if (void 0 !== g.style[n[e]]) {
                        a.pfx = n[e].replace("Perspective", "").toLowerCase();
                        a.prop = "-" + a.pfx + "-transform";
                        g = !0;
                        break a
                    }
                    g = !1
                }
                b.transitions = g;
                "" !== c.controlsContainer && (a.controlsContainer = 0 < d(c.controlsContainer).length && d(c.controlsContainer));
                "" !== c.manualControls && (a.manualControls = 0 < d(c.manualControls).length && d(c.manualControls));c.randomize && (a.huandeng_04.sort(function () {
                    return Math.round(Math.random()) - 0.5
                }), a.container.empty().append(a.huandeng_04));a.doMath();s && f.asNav.setup();a.setup("init");c.controlNav && f.controlNav.setup();c.directionNav && f.directionNav.setup();c.keyboard && (1 === d(a.containerSelector).length || c.multipleKeyboard) && d(document).bind("keyup", function (b) {
                    b = b.keyCode;
                    if (!a.animating && (39 === b || 37 === b)) b = 39 === b ? a.getTarget("next") : 37 === b ? a.getTarget("prev") : !1, a.flexAnimate(b, c.pauseOnAction)
                });c.mousewheel && a.bind("mousewheel", function (b, g) {
                    b.preventDefault();
                    var d = 0 > g ? a.getTarget("next") : a.getTarget("prev");
                    a.flexAnimate(d, c.pauseOnAction)
                });c.pausePlay && f.pausePlay.setup();c.huandeng_04how && (c.pauseOnHover && a.hover(function () {
                    !a.manualPlay && !a.manualPause && a.pause()
                }, function () {
                    !a.manualPause && !a.manualPlay && a.play()
                }), 0 < c.initDelay ? setTimeout(a.play, c.initDelay) : a.play());p && c.touch && f.touch();
                (!r || r && c.smoothHeight) && d(window).bind("resize focus", f.resize);setTimeout(function () {
                    c.start(a)
                }, 200)
            },
            asNav: {
                setup: function () {
                    a.asNav = !0;
                    a.animatingTo = Math.floor(a.currentSlide / a.move);
                    a.currentItem = a.currentSlide;
                    a.huandeng_04.removeClass(e + "active-slide").eq(a.currentItem).addClass(e + "active-slide");
                    a.huandeng_04.click(function (b) {
                        b.preventDefault();
                        var b = d(this),
                            g = b.index();
                        !d(c.asNavFor).data("huadong_jsxx").animating && !b.hasClass("active") && (a.direction = a.currentItem < g ? "next" : "prev", a.flexAnimate(g, c.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function () {
                    a.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
                },
                setupPaging: function () {
                    var b = 1,
                        g;
                    a.controlNavScaffold = d('<ol class="' + e + "huandeng_05 " + e + ("thumbnails" === c.controlNav ? "control-thumbs" : "huandeng_06") + '"></ol>');
                    if (1 < a.pagingCount) for (var n = 0; n < a.pagingCount; n++) g = "thumbnails" === c.controlNav ? '<img src="' + a.huandeng_04.eq(n).attr("data-thumb") + '"/>' : "<a>" + b + "</a>", a.controlNavScaffold.append("<li>" + g + "</li>"), b++;
                    a.controlsContainer ? d(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold);
                    f.controlNav.set();
                    f.controlNav.active();
                    a.controlNavScaffold.delegate("a, img", t, function (b) {
                        b.preventDefault();
                        var b = d(this),
                            g = a.controlNav.index(b);
                        b.hasClass(e + "active") || (a.direction = g > a.currentSlide ? "next" : "prev", a.flexAnimate(g, c.pauseOnAction))
                    });
                    p && a.controlNavScaffold.delegate("a", "click touchstart", function (a) {
                        a.preventDefault()
                    })
                },
                setupManual: function () {
                    a.controlNav = a.manualControls;
                    f.controlNav.active();
                    a.controlNav.live(t, function (b) {
                        b.preventDefault();
                        var b = d(this),
                            g = a.controlNav.index(b);
                        b.hasClass(e + "active") || (g > a.currentSlide ? a.direction = "next" : a.direction = "prev", a.flexAnimate(g, c.pauseOnAction))
                    });
                    p && a.controlNav.live("click touchstart", function (a) {
                        a.preventDefault()
                    })
                },
                set: function () {
                    a.controlNav = d("." + e + "huandeng_05 li " + ("thumbnails" === c.controlNav ? "img" : "a"), a.controlsContainer ? a.controlsContainer : a)
                },
                active: function () {
                    a.controlNav.removeClass(e + "active").eq(a.animatingTo).addClass(e + "active")
                },
                update: function (b, c) {
                    1 < a.pagingCount && "add" === b ? a.controlNavScaffold.append(d("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(c).closest("li").remove();
                    f.controlNav.set();
                    1 < a.pagingCount && a.pagingCount !== a.controlNav.length ? a.update(c, b) : f.controlNav.active()
                }
            },
            directionNav: {
                setup: function () {
                    var b = d('<ul class="' + e + 'huandeng_07"><li><a class="' + e + 'prev" href="#">' + c.prevText + '</a></li><li><a class="' + e + 'next" href="#">' + c.nextText + "</a></li></ul>");
                    a.controlsContainer ? (d(a.controlsContainer).append(b), a.directionNav = d("." + e + "huandeng_07 li a", a.controlsContainer)) : (a.append(b), a.directionNav = d("." + e + "huandeng_07 li a", a));
                    f.directionNav.update();
                    a.directionNav.bind(t, function (b) {
                        b.preventDefault();
                        b = d(this).hasClass(e + "next") ? a.getTarget("next") : a.getTarget("prev");
                        a.flexAnimate(b, c.pauseOnAction)
                    });
                    p && a.directionNav.bind("click touchstart", function (a) {
                        a.preventDefault()
                    })
                },
                update: function () {
                    var b = e + "disabled";
                    1 === a.pagingCount ? a.directionNav.addClass(b) : c.animationLoop ? a.directionNav.removeClass(b) : 0 === a.animatingTo ? a.directionNav.removeClass(b).filter("." + e + "prev").addClass(b) : a.animatingTo === a.last ? a.directionNav.removeClass(b).filter("." + e + "next").addClass(b) : a.directionNav.removeClass(b)
                }
            },
            pausePlay: {
                setup: function () {
                    var b = d('<div class="' + e + 'pauseplay"><a></a></div>');
                    a.controlsContainer ? (a.controlsContainer.append(b), a.pausePlay = d("." + e + "pauseplay a", a.controlsContainer)) : (a.append(b), a.pausePlay = d("." + e + "pauseplay a", a));
                    f.pausePlay.update(c.huandeng_04how ? e + "pause" : e + "play");
                    a.pausePlay.bind(t, function (b) {
                        b.preventDefault();
                        d(this).hasClass(e + "pause") ? (a.manualPause = !0, a.manualPlay = !1, a.pause()) : (a.manualPause = !1, a.manualPlay = !0, a.play())
                    });
                    p && a.pausePlay.bind("click touchstart", function (a) {
                        a.preventDefault()
                    })
                },
                update: function (b) {
                    "play" === b ? a.pausePlay.removeClass(e + "pause").addClass(e + "play").text(c.playText) : a.pausePlay.removeClass(e + "play").addClass(e + "pause").text(c.pauseText)
                }
            },
            touch: function () {
                function b(b) {
                    j = l ? d - b.touches[0].pageY : d - b.touches[0].pageX;
                    p = l ? Math.abs(j) < Math.abs(b.touches[0].pageX - e) : Math.abs(j) < Math.abs(b.touches[0].pageY - e);
                    if (!p || 500 < Number(new Date) - k) b.preventDefault(), !r && a.transitions && (c.animationLoop || (j /= 0 === a.currentSlide && 0 > j || a.currentSlide === a.last && 0 < j ? Math.abs(j) / q + 2 : 1), a.setProps(f + j, "setTouch"))
                }
                function g() {
                    i.removeEventListener("touchmove", b, !1);
                    if (a.animatingTo === a.currentSlide && !p && null !== j) {
                        var h = m ? -j : j,
                            l = 0 < h ? a.getTarget("next") : a.getTarget("prev");
                        a.canAdvance(l) && (550 > Number(new Date) - k && 50 < Math.abs(h) || Math.abs(h) > q / 2) ? a.flexAnimate(l, c.pauseOnAction) : r || a.flexAnimate(a.currentSlide, c.pauseOnAction, !0)
                    }
                    i.removeEventListener("touchend", g, !1);
                    f = j = e = d = null
                }
                var d, e, f, q, j, k, p = !1;
                i.addEventListener("touchstart", function (j) {
                    a.animating ? j.preventDefault() : 1 === j.touches.length && (a.pause(), q = l ? a.h : a.w, k = Number(new Date), f = h && m && a.animatingTo === a.last ? 0 : h && m ? a.limit - (a.itemW + c.itemMargin) * a.move * a.animatingTo : h && a.currentSlide === a.last ? a.limit : h ? (a.itemW + c.itemMargin) * a.move * a.currentSlide : m ? (a.last - a.currentSlide + a.cloneOffset) * q : (a.currentSlide + a.cloneOffset) * q, d = l ? j.touches[0].pageY : j.touches[0].pageX, e = l ? j.touches[0].pageX : j.touches[0].pageY, i.addEventListener("touchmove", b, !1), i.addEventListener("touchend", g, !1))
                }, !1)
            },
            resize: function () {
                !a.animating && a.is(":visible") && (h || a.doMath(), r ? f.smoothHeight() : h ? (a.huandeng_04.width(a.computedW), a.update(a.pagingCount), a.setProps()) : l ? (a.huandeng_08.height(a.h), a.setProps(a.h, "setTotal")) : (c.smoothHeight && f.smoothHeight(), a.newhuandeng_04.width(a.computedW), a.setProps(a.computedW, "setTotal")))
            },
            smoothHeight: function (b) {
                if (!l || r) {
                    var c = r ? a : a.huandeng_08;
                    b ? c.animate({
                        height: a.huandeng_04.eq(a.animatingTo).height()
                    }, b) : c.height(a.huandeng_04.eq(a.animatingTo).height())
                }
            },
            sync: function (b) {
                var g = d(c.sync).data("huadong_jsxx"),
                    e = a.animatingTo;
                switch (b) {
                case "animate":
                    g.flexAnimate(e, c.pauseOnAction, !1, !0);
                    break;
                case "play":
                    !g.playing && !g.asNav && g.play();
                    break;
                case "pause":
                    g.pause()
                }
            }
        };
        a.flexAnimate = function (b, g, n, i, k) {
            s && 1 === a.pagingCount && (a.direction = a.currentItem < b ? "next" : "prev");
            if (!a.animating && (a.canAdvance(b, k) || n) && a.is(":visible")) {
                if (s && i) if (n = d(c.asNavFor).data("huadong_jsxx"), a.atEnd = 0 === b || b === a.count - 1, n.flexAnimate(b, !0, !1, !0, k), a.direction = a.currentItem < b ? "next" : "prev", n.direction = a.direction, Math.ceil((b + 1) / a.visible) - 1 !== a.currentSlide && 0 !== b) a.currentItem = b, a.huandeng_04.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), b = Math.floor(b / a.visible);
                else return a.currentItem = b, a.huandeng_04.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), !1;
                a.animating = !0;
                a.animatingTo = b;
                c.before(a);
                g && a.pause();
                a.syncExists && !k && f.sync("animate");
                c.controlNav && f.controlNav.active();
                h || a.huandeng_04.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide");
                a.atEnd = 0 === b || b === a.last;
                c.directionNav && f.directionNav.update();
                b === a.last && (c.end(a), c.animationLoop || a.pause());
                if (r) p ? (a.huandeng_04.eq(a.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), a.huandeng_04.eq(b).css({
                    opacity: 1,
                    zIndex: 2
                }), a.huandeng_04.unbind("webkitTransitionEnd transitionend"), a.huandeng_04.eq(a.currentSlide).bind("webkitTransitionEnd transitionend", function () {
                    c.after(a)
                }), a.animating = !1, a.currentSlide = a.animatingTo) : (a.huandeng_04.eq(a.currentSlide).fadeOut(c.animationSpeed, c.easing), a.huandeng_04.eq(b).fadeIn(c.animationSpeed, c.easing, a.wrapup));
                else {
                    var q = l ? a.huandeng_04.filter(":first").height() : a.computedW;
                    h ? (b = c.itemWidth > a.w ? 2 * c.itemMargin : c.itemMargin, b = (a.itemW + b) * a.move * a.animatingTo, b = b > a.limit && 1 !== a.visible ? a.limit : b) : b = 0 === a.currentSlide && b === a.count - 1 && c.animationLoop && "next" !== a.direction ? m ? (a.count + a.cloneOffset) * q : 0 : a.currentSlide === a.last && 0 === b && c.animationLoop && "prev" !== a.direction ? m ? 0 : (a.count + 1) * q : m ? (a.count - 1 - b + a.cloneOffset) * q : (b + a.cloneOffset) * q;
                    a.setProps(b, "", c.animationSpeed);
                    if (a.transitions) {
                        if (!c.animationLoop || !a.atEnd) a.animating = !1, a.currentSlide = a.animatingTo;
                        a.container.unbind("webkitTransitionEnd transitionend");
                        a.container.bind("webkitTransitionEnd transitionend", function () {
                            a.wrapup(q)
                        })
                    } else a.container.animate(a.args, c.animationSpeed, c.easing, function () {
                        a.wrapup(q)
                    })
                }
                c.smoothHeight && f.smoothHeight(c.animationSpeed)
            }
        };
        a.wrapup = function (b) {
            !r && !h && (0 === a.currentSlide && a.animatingTo === a.last && c.animationLoop ? a.setProps(b, "jumpEnd") : a.currentSlide === a.last && (0 === a.animatingTo && c.animationLoop) && a.setProps(b, "jumpStart"));
            a.animating = !1;
            a.currentSlide = a.animatingTo;
            c.after(a)
        };
        a.animatehuandeng_04 = function () {
            a.animating || a.flexAnimate(a.getTarget("next"))
        };
        a.pause =

        function () {
            clearInterval(a.animatedhuandeng_04);
            a.playing = !1;
            c.pausePlay && f.pausePlay.update("play");
            a.syncExists && f.sync("pause")
        };
        a.play = function () {
            a.animatedhuandeng_04 = setInterval(a.animatehuandeng_04, c.huandeng_04howSpeed);
            a.playing = !0;
            c.pausePlay && f.pausePlay.update("pause");
            a.syncExists && f.sync("play")
        };
        a.canAdvance = function (b, g) {
            var d = s ? a.pagingCount - 1 : a.last;
            return g ? !0 : s && a.currentItem === a.count - 1 && 0 === b && "prev" === a.direction ? !0 : s && 0 === a.currentItem && b === a.pagingCount - 1 && "next" !== a.direction ? !1 : b === a.currentSlide && !s ? !1 : c.animationLoop ? !0 : a.atEnd && 0 === a.currentSlide && b === d && "next" !== a.direction ? !1 : a.atEnd && a.currentSlide === d && 0 === b && "next" === a.direction ? !1 : !0
        };
        a.getTarget = function (b) {
            a.direction = b;
            return "next" === b ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide - 1
        };
        a.setProps = function (b, g, d) {
            var e, f = b ? b : (a.itemW + c.itemMargin) * a.move * a.animatingTo;
            e = -1 *
            function () {
                if (h) return "setTouch" === g ? b : m && a.animatingTo === a.last ? 0 : m ? a.limit - (a.itemW + c.itemMargin) * a.move * a.animatingTo : a.animatingTo === a.last ? a.limit : f;
                switch (g) {
                case "setTotal":
                    return m ? (a.count - 1 - a.currentSlide + a.cloneOffset) * b : (a.currentSlide + a.cloneOffset) * b;
                case "setTouch":
                    return b;
                case "jumpEnd":
                    return m ? b : a.count * b;
                case "jumpStart":
                    return m ? a.count * b : b;
                default:
                    return b
                }
            }() + "px";
            a.transitions && (e = l ? "translate3d(0," + e + ",0)" : "translate3d(" + e + ",0,0)", d = void 0 !== d ? d / 1E3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", d));
            a.args[a.prop] = e;
            (a.transitions || void 0 === d) && a.container.css(a.args)
        };
        a.setup = function (b) {
            if (r) a.huandeng_04.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === b && (p ? a.huandeng_04.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + c.animationSpeed / 1E3 + "s ease",
                zIndex: 1
            }).eq(a.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : a.huandeng_04.eq(a.currentSlide).fadeIn(c.animationSpeed, c.easing)), c.smoothHeight && f.smoothHeight();
            else {
                var g, n;
                "init" === b && (a.huandeng_08 = d('<div class="' + e + 'huandeng_08"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset =
                0, m && (n = d.makeArray(a.huandeng_04).reverse(), a.huandeng_04 = d(n), a.container.empty().append(a.huandeng_04)));
                c.animationLoop && !h && (a.cloneCount = 2, a.cloneOffset = 1, "init" !== b && a.container.find(".clone").remove(), a.container.append(a.huandeng_04.first().clone().addClass("clone")).prepend(a.huandeng_04.last().clone().addClass("clone")));
                a.newhuandeng_04 = d(c.selector, a);
                g = m ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset;
                l && !h ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    a.newhuandeng_04.css({
                        display: "block"
                    });
                    a.doMath();
                    a.huandeng_08.height(a.h);
                    a.setProps(g * a.h, "init")
                }, "init" === b ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(g * a.computedW, "init"), setTimeout(function () {
                    a.doMath();
                    a.newhuandeng_04.css({
                        width: a.computedW,
                        "float": "left",
                        display: "block"
                    });
                    c.smoothHeight && f.smoothHeight()
                }, "init" === b ? 100 : 0))
            }
            h || a.huandeng_04.removeClass(e + "active-slide").eq(a.currentSlide).addClass(e + "active-slide")
        };
        a.doMath = function () {
            var b = a.huandeng_04.first(),
                d = c.itemMargin,
                e = c.minItems,
                f = c.maxItems;
            a.w = a.width();
            a.h = b.height();
            a.boxPadding = b.outerWidth() - b.width();
            h ? (a.itemT = c.itemWidth + d, a.minW = e ? e * a.itemT : a.w, a.maxW = f ? f * a.itemT : a.w, a.itemW = a.minW > a.w ? (a.w - d * e) / e : a.maxW < a.w ? (a.w - d * f) / f : c.itemWidth > a.w ? a.w : c.itemWidth, a.visible = Math.floor(a.w / (a.itemW + d)), a.move = 0 < c.move && c.move < a.visible ? c.move : a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, a.limit = 1 === a.pagingCount ? 0 : c.itemWidth > a.w ? (a.itemW + 2 * d) * a.count - a.w - d : (a.itemW + d) * a.count - a.w - d) : (a.itemW = a.w, a.pagingCount = a.count, a.last = a.count - 1);
            a.computedW = a.itemW - a.boxPadding
        };
        a.update = function (b, d) {
            a.doMath();
            h || (b < a.currentSlide ? a.currentSlide += 1 : b <= a.currentSlide && 0 !== b && (a.currentSlide -= 1), a.animatingTo = a.currentSlide);
            if (c.controlNav && !a.manualControls) if ("add" === d && !h || a.pagingCount > a.controlNav.length) f.controlNav.update("add");
            else if ("remove" === d && !h || a.pagingCount < a.controlNav.length) h && a.currentSlide > a.last && (a.currentSlide -= 1, a.animatingTo -= 1), f.controlNav.update("remove", a.last);
            c.directionNav && f.directionNav.update()
        };
        a.addSlide = function (b, e) {
            var f = d(b);
            a.count += 1;
            a.last = a.count - 1;
            l && m ? void 0 !== e ? a.huandeng_04.eq(a.count - e).after(f) : a.container.prepend(f) : void 0 !== e ? a.huandeng_04.eq(e).before(f) : a.container.append(f);
            a.update(e, "add");
            a.huandeng_04 = d(c.selector + ":not(.clone)", a);
            a.setup();
            c.added(a)
        };
        a.removeSlide = function (b) {
            var e = isNaN(b) ? a.huandeng_04.index(d(b)) : b;
            a.count -= 1;
            a.last = a.count - 1;
            isNaN(b) ? d(b, a.huandeng_04).remove() : l && m ? a.huandeng_04.eq(a.last).remove() : a.huandeng_04.eq(b).remove();
            a.doMath();
            a.update(e, "remove");
            a.huandeng_04 = d(c.selector + ":not(.clone)", a);
            a.setup();
            c.removed(a)
        };
        f.init()
    };
    d.huadong_jsxx.defaults = {
        namespace: "flex-",
        selector: ".huandeng_04 > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        huandeng_04how: !0,
        huandeng_04howSpeed: 3000,
        animationSpeed: 400,
        initDelay: 0,
        randomize: !1,
        pauseOnAction: !0,
        pauseOnHover: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 0,
        maxItems: 0,
        move: 0,
        start: function () {},
        before: function () {},
        after: function () {},
        end: function () {},
        added: function () {},
        removed: function () {}
    };
    d.fn.huadong_jsxx = function (i) {
        void 0 === i && (i = {});
        if ("object" === typeof i) return this.each(function () {
            var a = d(this),
                c = a.find(i.selector ? i.selector : ".huandeng_04 > li");
            1 === c.length ? (c.fadeIn(400), i.start && i.start(a)) : void 0 == a.data("huadong_jsxx") && new d.huadong_jsxx(this, i)
        });
        var k = d(this).data("huadong_jsxx");
        switch (i) {
        case "play":
            k.play();
            break;
        case "pause":
            k.pause();
            break;
        case "next":
            k.flexAnimate(k.getTarget("next"), !0);
            break;
        case "prev":
        case "previous":
            k.flexAnimate(k.getTarget("prev"), !0);
            break;
        default:
            "number" === typeof i && k.flexAnimate(i, !0)
        }
    }
})(jQuery);