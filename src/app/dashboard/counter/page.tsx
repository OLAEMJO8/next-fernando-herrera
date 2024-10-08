import { CardCounter } from "@/app/shopping-cart/components";

export const metadata = {
  title: "Counter Page",
  description: "Un simple contador",
};
export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <span>Productos en el carrito</span>
      <CardCounter />
    </div>
  );
}
