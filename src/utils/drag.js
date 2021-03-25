export default {
  install(Vue) {
    // 拖拽指令
    Vue.directive('drag', {
      bind: function(el, vnode) {
        let oDiv = el
        let self = vnode.context
        oDiv.onmousedown = (e) => {
          let disX = e.clientX - oDiv.offsetLeft
          let disY = e.clientY - oDiv.offsetTop
          document.onmousemove = (e) => {
            let left = e.clientX - disX
            let top = e.clientY - disY
            oDiv.style.cursor = 'move'
            if (!left && !top) {
              oDiv.style.left = self.currentLeft
              oDiv.style.top = self.currentTop
            } else {
              oDiv.style.left = left + 'px'
              oDiv.style.top = top + 'px'
            }
          }
          document.onmouseup = () => {
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      },
    })
  },
}
