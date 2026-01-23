"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface DemoDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DemoDialog({ open, onOpenChange }: DemoDialogProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/send-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, type: "demo" }),
      })

      if (!res.ok) {
        throw new Error("Failed to submit")
      }

      setIsSuccess(true)

      setTimeout(() => {
        setName("")
        setEmail("")
        setCompany("")
        setIsSuccess(false)
        onOpenChange(false)
      }, 2000)
    } catch (err) {
      console.error(err)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Request a Demo</DialogTitle>
          <DialogDescription>
            See BookOS in action. We'll reach out to schedule a personalized demo.
          </DialogDescription>
        </DialogHeader>
        {isSuccess ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg font-medium">Request submitted!</p>
            <p className="mt-2 text-sm text-muted-foreground">We'll be in touch soon to schedule your demo.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="demo-name">Full Name</Label>
              <Input id="demo-name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo-email">Email</Label>
              <Input
                id="demo-email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="demo-company">Company Name</Label>
              <Input
                id="demo-company"
                placeholder="Your Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Request Demo"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
