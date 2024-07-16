function toggleForm(c) {
  let objName = c.attr("modal") || c.attr("close");
  if (c.attr("modal")) {
    c.attr("close", objName);
    c.removeAttr("modal");
  } else {
    c.attr("modal", objName);
    c.removeAttr("close");
  }
}

//////////////////////////////////////////////
// Auto modal open and close
let modal;
function modOpener(c) {
  modal = c.attr("modal");
  $(`[close="${modal}"]`).addClass("js");
  $(`#${modal}`)[0].classList.add("js");

  // Same element to toggle if modal also has dp at attribute  property.
  if (c.is("[dp]")) {
    toggleForm(c);
  }

  const modFunc = /^(\b\w+\b).*(\b\w+\b)/m.exec(modal);
  let funcName =
    modFunc[1] + modFunc[2][0].toUpperCase() + modFunc[2].slice(1) || modal;
  try {
    eval(funcName + "(modal, c)");
  } catch {}
}
function modCloser(c) {
  modal = c.attr("close");
  $(`#${modal}`)[0]?.classList.remove("js");
  c.removeClass("js");

  if (c.is("[dp]")) {
    toggleForm(c);
  }
}

/////////////////////////////////////////
//// UNIVERSAL DOCUMENT EVENT lISTENER //
document.addEventListener("click", (e) => {
  let d = e.target;
  d.tagName === "path" && (d = $(d).parent("svg")[0]);
  d.tagName === "svg" &&
    $(d).parent("button")[0] &&
    (d = $(d).parent("button")[0]);

  d.tagName === "svg" &&
    $(d).parent("label")[0] &&
    (d = $(d).parent("label")[0]);

  let c = $(d);
  let clickCount = 0;
  const clickSwitch = () => {
    clickCount+=1
    switch (true) {

    case c.is("[modal]"):
      modOpener(c);
      break;

    case c.is("[close]"):
      modCloser(c);
      break;

    default:
      if (clickCount > 1) {
        break
      }
      c = c.parent()
      clickSwitch()
    }}

    clickSwitch();
  })
