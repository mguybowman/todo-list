function focusNav() {
    document.getElementById("nav").className = "mShow"
    document.getElementById("menuButton").className = "mHide"
    document.getElementById("content").className = "mHide"
}

export { focusNav }