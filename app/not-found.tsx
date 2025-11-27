import NotFoundSection from "@/components/not-found-section"; // Adjust the import path based on your project structure

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-white">
      <main className="grow">
        <NotFoundSection />
      </main>
    </div>
  );
};

export default NotFoundPage;
