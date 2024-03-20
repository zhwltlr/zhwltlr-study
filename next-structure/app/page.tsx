import { Button } from "@/components/button/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button label="Click me" />
      {/* ecommerce landing page layout */}
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Welcome to my shop</h1>
        <p className="text-lg text-center">
          Get started by selecting a category below
        </p>
        <div className="flex space-x-4 mt-8">
          <Button label="Electronics" size="large" backgroundColor="blue" />
          <Button
            primary
            label="Clothing"
            size="large"
            backgroundColor="green"
          />
        </div>
      </section>
    </main>
  );
}
