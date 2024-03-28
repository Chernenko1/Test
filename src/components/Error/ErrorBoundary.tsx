import { LoadSpinner } from '@components/LoadSpinner/LoadSpinner'
import { Component, ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true, error: _ }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  render(): ReactNode {
    const { error } = this.state

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <LoadSpinner />
          <div>Something went wrong. {error?.message}</div>
        </>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
