import { Button } from "@/components/ui/button"

export function App() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-background text-foreground">
      <h1 className="text-2xl font-semibold tracking-tight">台账管理系统</h1>
      <p className="text-muted-foreground text-sm">Vite + React + Tailwind CSS v4 + shadcn/ui</p>
      <Button>开始开发</Button>
    </main>
  )
}
