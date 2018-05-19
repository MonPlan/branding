import React from 'react'
import PropTypes from 'prop-types'

import {
  Build as EngIcon,
  Code as ItIcon,
  Gavel as LawIcon,
  Code as DefIcon,
  Healing as MedIcon,
  Brush as DesIcon,
  AttachMoney as BusIcon,
  ChildCare as EduIcon,
  BubbleChart as PhaIcon
} from '@material-ui/icons'

import { Faculty } from '../constants'

import {
  facultyColors as facultyColorMap,
  facultyFontColorMap
} from '../styles'

export const iconStyleConverter = faculty => {
  return {
    backgroundColor: facultyColorMap[faculty],
    color: facultyFontColorMap[faculty],
    padding: '0.5em',
    borderRadius: '5em',
    height: '43px',
    width: '43px',
    marginRight: '10px'
  }
}

iconStyleConverter.propTypes = {
  faculty: PropTypes.oneOf(Object.keys(Faculty))
}
/**
 * @author Eric Jiang, Charlie Campton-Strachan, David Copley
 * the icons were extracted from CourseSnapshotCardContainer
 * the original function was called facultyStyle(faculty, mode)
 */
export const facultyIconsMap = {
  [Faculty.ENG]: <EngIcon style={iconStyleConverter(Faculty.ENG)} />,
  [Faculty.FIT]: <ItIcon style={iconStyleConverter(Faculty.FIT)} />,
  [Faculty.LAW]: <LawIcon style={iconStyleConverter(Faculty.LAW)} />,
  [Faculty.ADA]: <DesIcon style={iconStyleConverter(Faculty.ADA)} />,
  [Faculty.BUS]: <BusIcon style={iconStyleConverter(Faculty.BUS)} />,
  [Faculty.EDU]: <EduIcon style={iconStyleConverter(Faculty.EDU)} />,
  [Faculty.MHS]: <MedIcon style={iconStyleConverter(Faculty.MHS)} />,
  [Faculty.PHA]: <PhaIcon style={iconStyleConverter(Faculty.PHA)} />,
  [Faculty.ALL]: <DefIcon style={iconStyleConverter(Faculty.ALL)} />
}