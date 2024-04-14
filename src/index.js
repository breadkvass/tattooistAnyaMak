import './index.css';
import Glide from '@glidejs/glide'

new Glide('.glide').mount()

const glide = new Glide('#intro', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 5
})
  
glide.mount()