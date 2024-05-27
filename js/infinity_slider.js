const DURATIONS = ["20s", "26s", "30s"]

const duplicate = (index) => {
  const clone = scroller.cloneNode(true)
  clone.id = `id:${index}`
  const sec = clone.querySelector('.sec')
  sec.style.animationDuration = DURATIONS[index];
  sec.style.animationName = (index%2===0) ? 'scroll_right' : 'scroll_left'
  document.body.appendChild(clone);
}

duplicate(0)
duplicate(1)
duplicate(2)