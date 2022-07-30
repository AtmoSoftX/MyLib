function select(str) {
  return document.querySelector(str);
}
function selectAll(str) {
  return document.querySelectorAll(str);
}
function create(str) {
  return document.createElement(str);
}
function addClass(ele, str) {
  return ele.classList.add(str);
}
function removeClass(ele, str) {
  return ele.classList.remove(str);
}
function navLinksInit() {
  document.querySelectorAll("nav").forEach(function (doc) {
    doc.querySelectorAll("a.nav-a").forEach(function (ele, i, arr) {
      ele.addEventListener("click", function () {
        arr.forEach(function (e) {
          e.classList.remove("nav-black");
        });
        ele.classList.add("nav-black");
      });
    });
  });
}
function greyNavLinksInit() {
  document.querySelectorAll("nav").forEach(function (doc) {
    doc.querySelectorAll("a.grey-nav-a").forEach(function (ele, i, arr) {
      ele.addEventListener("click", function () {
        arr.forEach(function (e) {
          e.classList.remove("nav-grey");
        });
        ele.classList.add("nav-grey");
      });
    });
  });
}
function primaryNavLinksInit() {
  document.querySelectorAll("nav").forEach(function (doc) {
    doc.querySelectorAll("a.primary-nav-a").forEach(function (ele, i, arr) {
      ele.addEventListener("click", function () {
        arr.forEach(function (e) {
          e.classList.remove("nav-primary");
        });
        ele.classList.add("nav-primary");
      });
    });
  });
}
function collapse(selector, cmd) {
  var targets = Array.from(document.querySelectorAll(selector));
  var obj = {
    show: "add",
    hide: "remove",
    toggle: "toggle",
  };
  targets.forEach(function (ele) {
    ele.classList[obj[cmd]]("collapse-show");
  });
}
function collapseInit() {
  document.querySelectorAll("[collapse]").forEach(function (btn) {
    btn.onclick = function () {
      collapse(btn.getAttribute("collapse"), "toggle");
    };
  });
}
function sidenavInit() {
  document.querySelectorAll("[sidenav]").forEach(function (btn) {
    btn.onclick = function () {
      sidenav(btn.getAttribute("sidenav"), "toggle");
    };
  });
}
function sidenav(selector, cmd) {
  var targets = Array.from(document.querySelectorAll(selector));
  var obj = {
    show: "add",
    hide: "remove",
    toggle: "toggle",
  };
  targets.forEach(function (ele) {
    ele.classList[obj[cmd]]("active");
  });
}
function dialog(title, body, btns, func = function () {}) {
  let div = document.createElement("div");
  div.classList.add("dialog");
  let bgDiv = document.createElement("div");
  bgDiv.classList.add("dialog-bg");
  let h2 = document.createElement("h2");
  h2.classList.add("dialog-title");
  h2.innerHTML = title;
  div.appendChild(h2);
  let div2 = document.createElement("div");
  div2.classList.add("dialog-body");
  div2.innerHTML = body;
  div.appendChild(div2);
  let div3 = document.createElement("div");
  div3.classList.add("dialog-btns");
  div.appendChild(div3);
  let btn = btns.split(",");
  if (btn[0]) {
    let closeBtn = document.createElement("button");
    closeBtn.classList.add("dialog-btn");
    closeBtn.innerHTML = btn[0];
    closeBtn.onclick = function () {
      div.classList.remove("active");
      setTimeout(function () {
        div.remove();
      }, 400);
      if (btn.length === 1) {
        func();
      }
      l;
    };
    div3.appendChild(closeBtn);
  }
  if (btn[1]) {
    let successBtn = document.createElement("button");
    successBtn.classList.add("dialog-btn");
    successBtn.innerHTML = btn[1];
    successBtn.onclick = function () {
      div.classList.remove("active");
      setTimeout(function () {
        div.remove();
      }, 400);
      func();
    };
    div3.appendChild(successBtn);
  }
  setTimeout(function () {
    div.classList.add("active");
  }, 0);
  document.body.appendChild(div);
  document.body.appendChild(bgDiv);
}
function ripple(){
  var getPosition = function(centered, rect, event){
    var left = (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0);
    var top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
    if(centered){
      x = rect.width/2;
      y = rect.height/2;
    }else{
      x = event.pageX - rect.left - left;
      y = event.pageY - rect.top - top;
    }
    return {
      x: x,
      y: y
    };
  };
  var getRadius = function(x, y, rect) {
    var distX = Math.max(x, rect.width-x);
    var distY = Math.max(y, rect.height-y);
    return Math.ceil(Math.sqrt(distX*distX+distY*distY));
  };
  document.querySelectorAll('[ripple]').forEach(function(btn){
    btn.addEventListener('click', function(e){
      var trigger = this.getAttribute('ripple');
      trigger = trigger === 'true' || trigger === '' ? true: false;
      if(trigger){
        var btnRect = this.getBoundingClientRect();
        var centered = this.getAttribute('ripple-centered');
        centered = centered === 'true' || centered === '' ? true: false;
        var position = getPosition(centered, btnRect, e);
        var color = this.getAttribute('ripple-bg');
        var disabled = this.getAttribute('ripple-disabled');
        disabled = disabled === 'true' || disabled === '' ? true: false;
        var radius = this.getAttribute('ripple-radius');
        radius = radius && !isNaN(Number(radius)) ? Number(radius): getRadius(position.x, position.y, btnRect);
        var fadeTime = this.getAttribute('ripple-fade-time');
        fadeTime = fadeTime && !isNaN(Number(fadeTime)) ? Number(fadeTime): 0;
        var fadeStyle = this.getAttribute('ripple-fade-style');
        var fadeDelay = this.getAttribute('ripple-fade-delay');
        fadeDelay = fadeDelay && !isNaN(Number(fadeDelay)) ? Number(fadeDelay): 0;
        var sizeTime = this.getAttribute('ripple-expand-time');
        sizeTime = sizeTime && !isNaN(Number(sizeTime)) ? Number(sizeTime): 0;
        var sizeStyle = this.getAttribute('ripple-expand-style');
        var sizeDelay = this.getAttribute('ripple-expand-delay');
        sizeDelay = sizeDelay && !isNaN(Number(sizeDelay)) ? Number(sizeDelay): 0;
        var removeDelay = this.getAttribute('ripple-remove-delay');
        removeDelay = removeDelay && !isNaN(Number(removeDelay)) ? Number(removeDelay): 1000;
        if(!disabled){
          var ripple = document.createElement('ripple');
          ripple.classList.add('ripples');
          ripple.style.left = (position.x - radius)+'px';
          ripple.style.top = (position.y - radius)+'px';
          ripple.style.width = (radius*2)+'px';
          ripple.style.height = (radius*2)+'px';
          if(color){
            ripple.style.setProperty('--ripple-bg', color);
          }
          if(fadeTime){
            ripple.style.setProperty('--fade-time', fadeTime+'ms');
          }
          if(fadeStyle){
            ripple.style.setProperty('--fade-style', fadeStyle);
          }
          if(fadeDelay){
            ripple.style.setProperty('--fade-delay', fadeDelay+'ms');
          }
          if(sizeTime){
            ripple.style.setProperty('--expand-time', sizeTime+'ms');
          }
          if(sizeStyle){
            ripple.style.setProperty('--expand-style', sizeStyle);
          }
          if(sizeDelay){
            ripple.style.setProperty('--expand-delay', sizeDelay+'ms');
          }
          this.appendChild(ripple);
          setTimeout(function(){
            ripple.style.opacity = 0;
            ripple.style.transform = 'scale3d(1,1,1)';
          },0);
          setTimeout(function() {
            ripple.remove();
          }, removeDelay);
        }
      }
    });
  });
}
function allInit() {
  collapseInit();
  sidenavInit();
  navLinksInit();
  greyNavLinksInit();
  primaryNavLinksInit();
  Prism.highlightAll();
  ripple();
}
class Message {
  obj = {};
  onOpen() {}
  onClose() {}
  onUserClose() {}
  onAutoClose() {}
  constructor() {
    let message = document.createElement("div");
    message.classList.add("message");
    let body = document.createElement("div");
    body.classList.add("message-body");
    let actions = document.createElement("div");
    actions.classList.add("message-actions");
    let closeBtn = document.createElement("button");
    closeBtn.setAttribute("class", "message-btn material-icons-outlined");
    closeBtn.innerHTML = "close";
    let textBtn = document.createElement("button");
    textBtn.classList.add("message-btn");
    message.appendChild(body);
    message.appendChild(actions);
    actions.appendChild(closeBtn);
    actions.appendChild(textBtn);
    document.body.appendChild(message);
    this.message = message;
    this.body = body;
    this.closeBtn = closeBtn;
    this.textBtn = textBtn;
    this.textBtn.onclick = this.closeBtn.onclick = function () {
      this.message.classList.remove("show");
      setTimeout(
        function () {
          this.message.setAttribute("class", "message");
        }.bind(this),
        300
      );
      this.obj = {};
      this.onUserClose();
      this.onClose();
    }.bind(this);
  }
  randomStr(length) {
    if (!length) {
      length = 10;
    }
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    characters = characters + characters.toLowerCase() + "0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result =
        result +
        characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  open(text, btnText, options) {
    if (typeof btnText === "object") {
      options = btnText;
      btnText = undefined;
    }
    if (this.message.classList.contains("show")) {
      this.message.classList.remove("show");
      this.obj = {};
      this.onAutoClose();
      this.onClose();
      setTimeout(
        function () {
          this.message.setAttribute("class", "message");
          if (options !== undefined && options.classes !== undefined) {
            for (let className of options.classes) {
              if (className !== "show") {
                this.message.classList.add(className);
              }
            }
          }
          this.body.innerText = text;
          if (btnText === undefined) {
            btnText = "";
            this.closeBtn.classList.remove("show");
            this.textBtn.classList.remove("show");
          } else if (btnText === "") {
            this.closeBtn.classList.add("show");
            this.textBtn.classList.remove("show");
          } else {
            this.closeBtn.classList.remove("show");
            this.textBtn.classList.add("show");
          }
          this.textBtn.innerText = btnText;
          this.message.classList.add("show");
          if (options !== undefined && options.time !== undefined) {
            let str = this.randomStr();
            this.obj[str] = true;
            setTimeout(
              function () {
                if (this.obj[str] === true) {
                  this.message.classList.remove("show");
                  setTimeout(
                    function () {
                      this.message.setAttribute("class", "message");
                    }.bind(this),
                    300
                  );
                  this.obj = {};
                  this.onAutoClose();
                  this.onClose();
                }
              }.bind(this),
              options.time
            );
          }
        }.bind(this),
        300
      );
    } else {
      this.body.innerText = text;
      if (options !== undefined && options.classes !== undefined) {
        for (let className of options.classes) {
          if (className !== "show") {
            this.message.classList.add(className);
          }
        }
      }
      if (btnText === undefined) {
        btnText = "";
        this.closeBtn.classList.remove("show");
        this.textBtn.classList.remove("show");
      } else if (btnText === "") {
        this.closeBtn.classList.add("show");
        this.textBtn.classList.remove("show");
      } else {
        this.closeBtn.classList.remove("show");
        this.textBtn.classList.add("show");
      }
      this.textBtn.innerText = btnText;
      this.message.classList.add("show");
      if (options !== undefined && options.time !== undefined) {
        let str = this.randomStr();
        this.obj[str] = true;
        setTimeout(
          function () {
            if (this.obj[str] === true) {
              this.message.classList.remove("show");
              setTimeout(
                function () {
                  this.message.setAttribute("class", "message");
                }.bind(this),
                300
              );
              this.obj = {};
              this.onAutoClose();
              this.onClose();
            }
          }.bind(this),
          options.time
        );
      }
    }
    this.onOpen();
  }
}
let message = new Message();
function msg(a, b, c) {
  let classes = c ? [c]: [];
  message.open(a, b, {
    time: 5000,
    classes
  });
}
