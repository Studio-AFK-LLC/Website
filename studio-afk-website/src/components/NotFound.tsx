const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary px-4 text-center">
      <div className="space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold text-accent">404</h1>
        <h2 className="text-2xl md:text-4xl font-bold text-text">Page Not Found</h2>
        <p className="text-text-secondary max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="btn btn-primary inline-block"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
