import {
  PropsWithChildren,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import Button from './Button'
import { BackIcon } from './icons/BackIcon'

export type ModalProps = {
  defaultOpen?: boolean
  trigger: (toggleOpen: () => void) => ReactNode
}

export type ModalContentProps = {
  close: () => void
  modalRef: RefObject<HTMLDivElement>
}

export const ModalContent = ({
  children,
  close,
  modalRef,
}: PropsWithChildren<ModalContentProps>) => {
  return createPortal(
    <div
      className='fixed inset-0 bg-slate-300 dark:bg-slate-900 space-y-4 animate-fade-in'
      ref={modalRef}>
      <div className='px-8 md:px-16 lg:px-24 pt-8 md:pt-16 !pb-0'>
        <Button onClick={close}>
          <BackIcon className='w-6 h-6' />
        </Button>
      </div>
      <div className='p-8 md:p-16 lg:p-24 !pt-0 space-y-8 md:space-y-12 lg:space-y-16'>
        <div>{children}</div>
      </div>
    </div>,
    document.getElementsByTagName('body')[0]
  )
}

export default function Modal({
  defaultOpen = false,
  children,
  trigger,
}: PropsWithChildren<ModalProps>) {
  const [open, setOpen] = useState(defaultOpen)

  const modalRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => {
    open ? close() : setOpen(true)
  }
  const close = () => {
    const modalElement = modalRef.current
    if (modalElement) {
      modalElement.classList.add('animate-fade-out')
    }
    setTimeout(() => {
      setOpen(false)
    }, 450)
  }

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    if (open) {
      body.classList.add('overflow-hidden')
    } else {
      body.classList.remove('overflow-hidden')
    }
  }, [open])

  return (
    <>
      {trigger(toggleOpen)}
      {open && (
        <ModalContent close={close} modalRef={modalRef}>
          {children}
        </ModalContent>
      )}
    </>
  )
}
