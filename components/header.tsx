"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SignupDialog } from "@/components/signup-dialog"

export function Header() {
  const [signupOpen, setSignupOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image src="/bookos-logo.png" alt="BookOS" width={200} height={100} className="h-32 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <a href="https://app.bookos.xyz" target="_blank" rel="noopener noreferrer">
                Log In
              </a>
            </Button>
            <Button onClick={() => setSignupOpen(true)}>Sign Up</Button>
          </div>
        </div>
      </header>
      <SignupDialog open={signupOpen} onOpenChange={setSignupOpen} />
    </>
  )
}
