import { IconProps } from './types'

export const EmailIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
      className={className}>
      <path
        d='M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM32 128V167.9L227.6 311.3C244.5 323.7 267.5 323.7 284.4 311.3L480 167.9V128C480 110.3 465.7 96 448 96H63.1C46.33 96 31.1 110.3 31.1 128H32zM32 207.6V384C32 401.7 46.33 416 64 416H448C465.7 416 480 401.7 480 384V207.6L303.3 337.1C275.1 357.8 236.9 357.8 208.7 337.1L32 207.6z'
        fill='currentColor'
      />
    </svg>
  )
}
