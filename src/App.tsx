import { ThemeProvider } from "@/components/theme-provider"
import { BlogPostCard } from "./components/BlogPostCard"
import { Navigation } from "./components/Navigation"
import React from "react";
import Layout from "./components/Layout";

function App() {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <div className="min-h-svh flex flex-col">
            <Navigation />
            <div className="flex-1 flex flex-col items-center justify-center">
              {/* <Avatar>
                <AvatarImage src="https://github.com/shreyasbakare.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Button>Click me!</Button> */}
              <BlogPostCard title="Quantum Entanglement" description="This article is about quantum entanglement. This article is about quantum entanglement"
               avatarImageLink="https://github.com/shreyasbakare.png" date="2025-01-01" />
              <BlogPostCard title="String Theory" description="This article is about string theory. This article is about string theory"
               avatarImageLink="https://github.com/torvalds.png" date="2025-01-01" />
              {/* <ModeToggle /> */}
            </div>
          </div>
          <h1>Welcome to Your Professional Website</h1>
          <p>This is your homepage. Add more sections as needed.</p>
        </Layout>
    </ThemeProvider>
  )
}

export default App


