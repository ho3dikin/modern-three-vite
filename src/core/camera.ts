import { PerspectiveCamera } from 'three'
/* import { gui } from './gui' */

const VERTICAL_FIELD_OF_VIEW = 45 // degrees 45 is the normal

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

export const camera = new PerspectiveCamera(
  VERTICAL_FIELD_OF_VIEW,
  sizes.width / sizes.height,
)

camera.position.set(9, 4, 9)

/* const cameraFolder = gui.addFolder({ title: 'Camera' })
cameraFolder.addMonitor(camera, 'position', {
  bufferSize: 10,
}) */

export default camera