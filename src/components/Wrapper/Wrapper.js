import React from 'react'

export default function Wrapper({children}) {

const wrapper = document.querySelector('body');

const media = window.matchMedia('(prefers-color-scheme: dark)');

const toggleMode = () => {
    wrapper.classList.remove('darkmode');
  if (media.matches) {
    wrapper.classList.add('darkmode');
  }
}

media.addEventListener('change', () => {
  toggleMode();
})

toggleMode();


  return (
    <div id='wrapper'>
        {children}
    </div>
  )
}
