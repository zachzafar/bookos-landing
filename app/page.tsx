"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DemoDialog } from "@/components/demo-dialog"
import { SignupDialog } from "@/components/signup-dialog"
import { CheckCircle2, Calendar, CreditCard, Users, BarChart3, Globe, Smartphone } from "lucide-react"

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen">
      <Header />
      <DemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
      <SignupDialog open={signupOpen} onOpenChange={setSignupOpen} />

      {/* Hero Section */}
      <section className="container mx-auto max-w-5xl px-4 pt-32 pb-20 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            The all-in-one booking & CRM platform for Caribbean rentals
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Give your guests and property owners a seamless experience by unifying bookings, payments and owner
            reporting under one roof.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Button size="lg" className="min-w-[160px]" onClick={() => setDemoOpen(true)}>
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" className="min-w-[160px] bg-transparent" onClick={scrollToFeatures}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Market Stat */}
      <section className="border-y border-border/40 bg-muted/30 py-12">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <p className="text-balance text-lg leading-relaxed text-foreground">
            The Caribbean vacation-rental market is forecast to generate{" "}
            <span className="font-bold text-primary">US$265.87M in 2025</span>, with 77% of revenue coming from online
            bookings—yet many regional agencies still rely on spreadsheets and offline payments.
          </p>
        </div>
      </section>

      {/* What is BookOS */}
      <section id="features" className="container mx-auto max-w-5xl px-4 py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">What is BookOS?</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            BookOS is a modern SaaS platform built specifically for Caribbean rental businesses—from villas and vacation
            homes to car fleets. It connects your website, payment gateway and back-office operations, so you can manage
            everything from a single dashboard.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-12 text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl">Who it's for</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Property & Villa Managers</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Handle multiple short-term rentals with ease
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Car Rental Agencies</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Track vehicle availability, reservations and payments
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Mixed-Asset Companies</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Manage everything from yachts to event spaces
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">Owners & Investors</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Real-time visibility into asset performance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="container mx-auto max-w-5xl px-4 py-20">
        <h2 className="mb-12 text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Problems we solve
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Disconnected systems</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Replace the patchwork of spreadsheets, emails and point-of-sale terminals with one unified system.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Double bookings</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Sync availability across your website and channels to eliminate overlapping reservations.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Manual payments</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Accept online payments through local gateways; no more manual card processing.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Owner blind spots</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Share real-time dashboards and financial reports, so owners always know how their property is
                performing.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Inefficient workflows</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Automate tasks like confirmation emails, invoicing and guest communication to save hours each week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-4 text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl">Key features</h2>
          <p className="mx-auto mb-12 max-w-2xl text-balance text-center text-muted-foreground">
            Everything you need to run a modern rental business in the Caribbean
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold">Unified Dashboard</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Manage bookings, rates, inventory and CRM from one interface
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold">Website Integration</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Embed a customizable booking widget and capture direct reservations
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Calendar className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold">Channel Management</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Synchronize calendars with Airbnb and OTAs to prevent double bookings
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <CreditCard className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold">Local Payments</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Connect to regional payment providers and stay tax compliant
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold">Owner Portal</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Provide owners with live revenue reports and occupancy data
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Smartphone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-semibold">Mobile Apps</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Field staff can manage check-ins, inspections and fleet tracking
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="container mx-auto max-w-5xl px-4 py-20">
        <h2 className="mb-4 text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Built for growth
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-balance text-center text-muted-foreground">
          BookOS isn't just a single app—it's the foundation of an ecosystem designed specifically for Caribbean rental
          businesses
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-border/50 bg-card p-4">
            <h3 className="mb-1 font-medium">Dynamic Pricing</h3>
            <p className="text-sm text-muted-foreground">Adjust rates based on demand and seasonality</p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card p-4">
            <h3 className="mb-1 font-medium">Marketing Automation</h3>
            <p className="text-sm text-muted-foreground">Email and SMS campaigns for repeat guests</p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card p-4">
            <h3 className="mb-1 font-medium">Maintenance Scheduler</h3>
            <p className="text-sm text-muted-foreground">Coordinate cleaning and repairs automatically</p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card p-4">
            <h3 className="mb-1 font-medium">API & Marketplace</h3>
            <p className="text-sm text-muted-foreground">Custom extensions for smart locks and accounting</p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card p-4">
            <h3 className="mb-1 font-medium">Advanced Reporting</h3>
            <p className="text-sm text-muted-foreground">Real-time revenue, occupancy and expense tracking</p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card p-4">
            <h3 className="mb-1 font-medium">Multi-Channel Sync</h3>
            <p className="text-sm text-muted-foreground">Synchronize with Airbnb, Vrbo and more</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to streamline your rental business?
          </h2>
          <p className="mb-8 text-balance text-lg leading-relaxed text-primary-foreground/90">
            BookOS is your modern operating system for Caribbean rentals. Sign up now or request a demo and see how
            BookOS can transform your operations.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="min-w-[160px]" onClick={() => setSignupOpen(true)}>
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[160px] border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setDemoOpen(true)}
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto max-w-5xl px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 BookOS. All rights reserved.</p>
          <p className="mt-2">Powered by Tradewind Studios Inc.</p>
        </div>
      </footer>
    </div>
  )
}
