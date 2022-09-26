import { IconProps } from './types'

export const BackIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      className={className}>
      <path
        d='M148.7 411.3l-144-144C1.563 264.2 0 260.1 0 256s1.562-8.188 4.688-11.31l144-144c6.25-6.25 16.38-6.25 22.62 0s6.25 16.38 0 22.62L54.63 240H496C504.8 240 512 247.2 512 256s-7.156 16-16 16H54.63l116.7 116.7c6.25 6.25 6.25 16.38 0 22.62S154.9 417.6 148.7 411.3z'
        fill='currentColor'
      />
    </svg>
  )
}
