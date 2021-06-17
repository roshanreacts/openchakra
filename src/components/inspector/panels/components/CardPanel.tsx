import React, { memo } from 'react'
import ColorsControl from '~components/inspector/controls/ColorsControl'

const CardPanel = () => (
  <ColorsControl
    withFullColor
    label="Color"
    name="backgroundColor"
    enableHues
  />
)

export default memo(CardPanel)
