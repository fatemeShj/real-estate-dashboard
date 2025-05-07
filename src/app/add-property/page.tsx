import AddPropertyForm from "@/features/real-estate/components/AddPropertyForm";

export default function AddPropertyPage() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Property</h1>
      <p className="text-gray-600">
        On this page, you can enter the property details.
      </p>

      <AddPropertyForm />
    </main>
  );
}
