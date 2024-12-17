import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <h1 className="text-center text-4xl font-bold text-foreground">
        Welcome to your dashboard
      </h1>

      <p className="text-center text-lg text-foreground">
        You are logged in. This is a protected route.
      </p>

      <Link
        href="/sign-out"
        className="text-sm font-medium text-foreground hover:underline"
      >
        Sign out
      </Link>
    </div>
  )
}
