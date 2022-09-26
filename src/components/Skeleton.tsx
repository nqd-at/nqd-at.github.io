import { useMemo } from 'react'

export type SkeletonProps = {
  minWidth?: number
  maxWidth?: number
  widthUnit?: 'px' | '%'
  leading?: number
  totalLines?: number
  element?: keyof JSX.IntrinsicElements
  className?: string
}

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function Skeleton({
  totalLines = 1,
  minWidth = 80,
  maxWidth = 100,
  leading = 1,
  widthUnit = '%',
  element: Element = 'span',
  className,
}: SkeletonProps) {
  const lines = Array.from(Array(totalLines).keys())
  const linesWidth = useMemo(
    () => lines.map(() => random(minWidth, maxWidth)),
    [totalLines, minWidth, maxWidth]
  )
  return (
    <>
      {lines.map((line, index) => (
        <Element
          className={'bg-slate-400/50 dark:bg-slate-700 animate-pulse ' + (className || '')}
          key={index}
          style={{
            width: `${linesWidth[index]}${widthUnit}`,
            height: `${leading}rem`,
          }}>
          &nbsp;
        </Element>
      ))}
    </>
  )
}
