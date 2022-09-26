import { forwardRef } from 'react'

export type ButtonProps = React.HTMLProps<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', ...props }, ref) => {
    return (
      <button
        className='p-2 hover:bg-slate-400/50 rounded transition-colors dark:hover:bg-slate-700'
        ref={ref}
        {...props}
      />
    )
  }
)

export default Button
