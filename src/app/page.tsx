import ThemePicker from "@/components/ThemePicker";
import BlackSquareView from "@/views/BlackSquareView";

export default function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="fixed top-4 right-4">
        <ThemePicker />
      </div>
      <BlackSquareView />
    </main>
  );
}
