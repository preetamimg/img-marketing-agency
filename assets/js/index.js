$(".hero-section").length || $("nav.navbar").addClass("always-nav-active");
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate,
    this.el = el,
    this.loopNum = 0,
    this.period = parseInt(period, 10) || 2e3,
    this.txt = "",
    this.tick(),
    this.isDeleting = !1
};
if (TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length
      , fullTxt = this.toRotate[i];
    this.isDeleting ? this.txt = fullTxt.substring(0, this.txt.length - 1) : this.txt = fullTxt.substring(0, this.txt.length + 1),
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
    var that = this
      , delta = 200 - 100 * Math.random();
    this.isDeleting && (delta /= 2),
    this.isDeleting || this.txt !== fullTxt ? this.isDeleting && "" === this.txt && (this.isDeleting = !1,
    this.loopNum++,
    delta = 500) : (delta = this.period,
    this.isDeleting = !0),
    setTimeout((function() {
        that.tick()
    }
    ), delta)
}
,
window.onload = function() {
    for (var elements = document.getElementsByClassName("typewrite"), i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type")
        , period = elements[i].getAttribute("data-period");
        toRotate && new TxtType(elements[i],JSON.parse(toRotate),period)
    }
    var css = document.createElement("style");
    css.type = "text/css",
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}",
    document.body.appendChild(css)
}
,
(()=>{
    "use strict";
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach(form=>{
        form.addEventListener("submit", event=>{
            form.checkValidity() || (event.preventDefault(),
            event.stopPropagation()),
            form.classList.add("was-validated")
        }
        , !1)
    })
})
);


