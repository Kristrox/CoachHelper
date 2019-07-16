import React from 'react'
import { DragPreviewImage, useDrag } from 'react-dnd'
import ItemTypes from '../components/ball_type.js'
//import knightImage from '.images/pilka.jpeg'

const ballStyle = {
  fontSize: 40,
  fontWeight: 'bold',
  cursor: 'move',
}

export const Ball = () => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.BALL },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  return (
    <>

      <div
        ref={drag}
        style={{
          ...ballStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        ⚽
      </div>
    </>
  )
}

export default Ball
