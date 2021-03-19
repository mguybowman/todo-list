function focusContent() {
    document.getElementById("nav").className = "mHide"
    document.getElementById("menuButton").className = "mShow"
    document.getElementById("content").className = "mShow"
}

export { focusContent }