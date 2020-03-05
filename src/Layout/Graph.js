/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'

import {
  HorizontalBar,
  Pie,
  Doughnut,
  Line,
  Polar,
  Scatter,
  Radar,
  Bubble,
} from 'react-chartjs-2'

import { makeStyles } from '@material-ui/core/styles'
import styles from '../assets/Styles/components/card'
import { blackColor } from '../Utils/Colors'

const useStyles = makeStyles(styles)

export const LineChart = ({ data, height }) => {
  const classes = useStyles()
  return (
    <div className={classes.cardInner}>
      <Line
        data={data}
        height={height}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits',
          },
          legend: {
            display: true,
            position: 'right',
          },
          layout: {
            color: blackColor(800),
          },
        }}
      />
    </div>
  )
}

export const DoughnutChart = ({ data }) => {
  const classes = useStyles()
  return (
    <div className={classes.cardInner}>
      <Doughnut
        data={data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits',
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  )
}
export const PieChart = ({ data }) => {
  const classes = useStyles()
  return (
    <div className={classes.cardInner}>
      <Pie
        data={data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits',
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  )
}
export const PolarChart = ({ data }) => {
  const classes = useStyles()
  return (
    <div className={classes.cardInner}>
      <Polar
        data={data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits',
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  )
}
export const ScatterChart = ({ data }) => {
  const classes = useStyles()
  return (
    <div className={classes.cardInner}>
      <Scatter
        data={data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits',
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  )
}
export const HorizontalChart = ({ data }) => {
  const classes = useStyles()
  return (
    <div className={classes.cardInner}>
      <HorizontalBar
        data={data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits',
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  )
}
export const RadarChart = ({ data }) => {
  const classes = useStyles()
  return (
    <div className={classes.cardInner}>
      <Radar
        data={data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits',
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  )
}
export const BubbleChart = ({ data }) => {
  const classes = useStyles()
  return (
    <div className={classes.cardInner}>
      <Bubble
        data={data}
        option={{
          title: {
            display: true,
            text: 'Largest Number of fruits',
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </div>
  )
}

BubbleChart.propType = {
  data: PropTypes.object.isRequired,
}
PieChart.propType = {
  data: PropTypes.object.isRequired,
}

DoughnutChart.propType = {
  data: PropTypes.object.isRequired,
}

HorizontalChart.propType = {
  data: PropTypes.object.isRequired,
}

ScatterChart.propType = {
  data: PropTypes.object.isRequired,
}
RadarChart.propType = {
  data: PropTypes.object.isRequired,
}
PolarChart.propType = {
  data: PropTypes.object.isRequired,
}
LineChart.propType = {
  data: PropTypes.object.isRequired,
}
